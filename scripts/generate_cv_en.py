"""Regenerate the English PDF resume from the supplied French CV.
Optional command: python -m pip install reportlab && python scripts/generate_cv_en.py
"""
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

BASE = Path(__file__).resolve().parents[1]
DEST = BASE / "public" / "cv" / "Ihsane_Foudal_CV_EN.pdf"
DEST.parent.mkdir(parents=True, exist_ok=True)
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
if not Path(FONT).exists():
    # Windows: pick a TTF available on standard Windows installations.
    FONT = "C:/Windows/Fonts/arial.ttf"
    BOLD = "C:/Windows/Fonts/arialbd.ttf"
pdfmetrics.registerFont(TTFont("ResumeText", FONT))
pdfmetrics.registerFont(TTFont("ResumeBold", BOLD))
pdfmetrics.registerFontFamily("ResumeText",normal="ResumeText",bold="ResumeBold",italic="ResumeText",boldItalic="ResumeBold")

INK = colors.HexColor("#1A1F2B")
PURPLE = colors.HexColor("#7D3295")
SLATE = colors.HexColor("#3B4252")
MUTED = colors.HexColor("#5D6070")
RULE = colors.HexColor("#E5D7E9")

style = {
    "name": ParagraphStyle("Name",fontName="ResumeBold",fontSize=20.5,leading=24,textColor=INK,spaceAfter=1),
    "role": ParagraphStyle("Role",fontName="ResumeBold",fontSize=8.8,leading=13,textColor=PURPLE),
    "contact": ParagraphStyle("Contact",fontName="ResumeText",fontSize=8.4,leading=13,textColor=SLATE,alignment=TA_RIGHT),
    "section": ParagraphStyle("Section",fontName="ResumeBold",fontSize=9,leading=13,spaceBefore=10,spaceAfter=4,textColor=PURPLE),
    "body": ParagraphStyle("Body",fontName="ResumeText",fontSize=8.05,leading=11.5,textColor=INK),
    "entry": ParagraphStyle("Entry",fontName="ResumeBold",fontSize=8.35,leading=12,textColor=INK),
    "date": ParagraphStyle("Date",fontName="ResumeBold",fontSize=8,leading=12,textColor=SLATE,alignment=TA_RIGHT),
    "line": ParagraphStyle("Line",fontName="ResumeText",fontSize=7.95,leading=11.5,spaceAfter=1.5,textColor=INK),
    "small": ParagraphStyle("Small",fontName="ResumeText",fontSize=7.9,leading=11.8,textColor=INK),
}

def p(txt, key="body"):
    return Paragraph(txt, style[key])

def title(label):
    return [p(label.upper(),"section"), Table([["" ]],colWidths=[527],rowHeights=[1],style=TableStyle([("BACKGROUND",(0,0),(-1,-1),RULE),("BOTTOMPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0)])),Spacer(1,4)]

def entry(name, date, detail):
    t=Table([[p(name,"entry"),p(date,"date")]],colWidths=[428,99])
    t.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)]))
    return [t,p(detail,"line")]

story=[]
header = Table([[
    [p("Ihsane Foudal","name"),p("Final-Year Engineering Student in Computer Science &amp; Data Engineering","role"),p("Data Engineering &amp; Software Engineering","role")],
    [p("Khouribga, Morocco","contact"),p("+212 6 57 86 61 14","contact"),p("ihssanfoudal@email.com","contact")],
]], colWidths=[366,161])
header.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)]))
story.extend([header,Spacer(1,8)])
story += title("Professional Profile")
story.append(p("Final-year engineering student in Computer Science and Data Engineering at ENSA Khouribga, seeking a final-year internship (PFE). Focused on Data Engineering, data analytics and Business Intelligence, with additional skills in Machine Learning, Deep Learning and software development. Eager to build valuable solutions and apply technical skills in a professional environment."))
story += title("Education")
story += entry("Engineering Degree — Computer Science &amp; Data Engineering", "2024–2027", "National School of Applied Sciences (ENSA), Khouribga · Expected graduation: 2027")
story += entry("Integrated Preparatory Classes", "2022–2024", "National School of Applied Sciences (ENSA), Khouribga")
story += title("Professional Experience")
story += entry("Data &amp; Business Intelligence Intern — OCP Group, Khouribga", "2026", "• Cleaned and analyzed more than 5,000 requests using Python (Pandas).<br/>• Built a star-schema data warehouse with SQL Server, and Power BI dashboards with DAX.<br/>• Performed beneficiary segmentation with K-Prototypes and developed a profile assignment model.")
story += entry("Software Development Intern — ONEE, Khouribga", "2025", "• Designed and developed a three-tier intranet app to digitize employee and administrative request management.<br/>• Used PHP, MySQL, HTML, CSS and JavaScript; added PDF generation and Chart.js dashboards.")
story += title("Academic Projects")
story += entry("Moroccan Darija Sentiment Analysis — NLP Pipeline", "2026", "Processed more than 83,000 Moroccan Darija YouTube comments; compared ML/DL models and vectorization methods for positive, negative and neutral classification. Best compared results came from BERTDarija fine-tuning; tracked experiments with MLflow and Weights &amp; Biases.")
story += entry("Business Intelligence &amp; Data Analytics", "2025", "Designed a decision-support solution for analyzing medicines, efficacy and adverse effects: SQL Server data warehouse, automated ETL with SSIS, SSAS OLAP cube and Power BI dashboards.")
story += entry("Face Mask Detection — Computer Vision", "2026", "Built an image, video and webcam mask-detection system using YOLO and VGG, with frame-by-frame processing and confidence score visualization.")
story += entry("Sales Management &amp; Analytics Web Platform", "2026", "Developed a product, sales and inventory management app using Java, Spring Boot, Thymeleaf and MySQL; MVC architecture, REST APIs, Spring Security authentication and roles, responsive interfaces and analytics dashboards.")
story += title("Technical Skills")
story.append(p("<b>Data &amp; BI:</b> Python (Pandas, NumPy, Matplotlib, Scikit-learn, PyTorch), SQL, Excel, Power BI, DAX, ETL, SSIS, SSAS.<br/><b>Databases:</b> SQL Server, MySQL, MongoDB. <b>AI:</b> Machine Learning, Deep Learning, NLP, Computer Vision.<br/><b>Software:</b> Java, Spring Boot, Thymeleaf, REST APIs, JavaScript, Next.js, NestJS, PHP, HTML, CSS, Bootstrap.<br/><b>Design &amp; Modeling:</b> UML, Merise, relational and dimensional modeling.","small"))
story += title("Soft Skills & Languages")
story.append(p("<b>Soft skills:</b> Analytical thinking, problem-solving, teamwork, communication, autonomy and adaptability.<br/><b>Languages:</b> Arabic (native), French (fluent), English (intermediate).","small"))

doc=SimpleDocTemplate(str(DEST),pagesize=A4,rightMargin=34,leftMargin=34,topMargin=28,bottomMargin=25,title="Ihsane Foudal - CV English",author="Ihsane Foudal")
doc.build(story)
print(f"Generated: {DEST} ({DEST.stat().st_size} bytes)")
