/**
 * POINT DE PERSONNALISATION PRINCIPAL.
 * Vérifie l'adresse e-mail, ajoute tes liens publics, et remplace le CV si besoin.
 * ATTENTION : les fichiers /public sont accessibles par toute personne ayant l'URL.
 */
export const site = {
  name: "Ihsane Foudal",
  initials: "IF",
  role: "Data Engineering & Software Engineering",
  school: "ENSA Khouribga",
  city: "Khouribga, Maroc",
  introduction:
    "Élève ingénieure en dernière année d'Informatique & Ingénierie des Données, je transforme des données complexes en solutions utiles et des idées en applications concrètes.",
  pitch:
    "J'aime concevoir des chaînes de traitement de données, des systèmes décisionnels et des applications fiables. Mon approche relie l'analyse, l'ingénierie et l'expérience utilisateur pour répondre à de vrais besoins.",
  graduation: "2027",
  availability: "Ouverte aux opportunités de stage PFE 2027",
  // Cette adresse provient du CV remis. CONFIRME qu'elle est correcte avant publication.
  email: "ihssanfoudal@email.com",
  // Ajoute tes vrais liens personnels uniquement. Aucun lien n'a été inventé.
  github: "https://github.com/IHSANE-dotcom",
  linkedin: "https://www.linkedin.com/in/ihsane-foudal-669316331/",
  cvFrench: "/cv/Ihsane_Foudal_CV_FR.pdf",
  cvEnglish: "/cv/Ihsane_Foudal_CV_EN.pdf",
  // Ajoute l'URL Vercel uniquement après la mise en ligne.
  url: "",
} as const;

export const expertise = [
  {
    id: "data", number: "01", title: "Data Engineering & BI",
    text: "Transformer les données brutes en actifs décisionnels fiables et exploitables.",
    tools: ["Python", "Pandas", "SQL", "ETL / SSIS", "SQL Server", "Power BI", "DAX", "SSAS"],
  },
  {
    id: "ai", number: "02", title: "Intelligence artificielle",
    text: "Analyser, modéliser et expérimenter avec le Machine Learning et le Deep Learning.",
    tools: ["Scikit-learn", "PyTorch", "NLP", "Computer Vision", "MLflow"],
  },
  {
    id: "software", number: "03", title: "Software Engineering",
    text: "Concevoir des applications, interfaces et services maintenables de bout en bout.",
    tools: ["Java", "Spring Boot", "API REST", "JavaScript", "Next.js", "PHP"],
  },
  {
    id: "databases", number: "04", title: "Bases de données & modélisation",
    text: "Organiser l'information et concevoir des modèles de données adaptés aux usages.",
    tools: ["MySQL", "MongoDB", "SQL Server", "UML", "Merise", "Modélisation dimensionnelle"],
  },
] as const;

export const experiences = [
  {
    company: "Groupe OCP", location: "Khouribga", position: "Stagiaire Data & Business Intelligence", year: "2026",
    intro: "Valorisation de données de demandes du service social, de la préparation à la restitution analytique.",
    achievements: [
      "Préparation, nettoyage et analyse de plus de 5 000 demandes avec Python et Pandas.",
      "Conception d'un Data Warehouse en schéma en étoile sous SQL Server.",
      "Création de tableaux de bord Power BI et segmentation de profils avec K-Prototypes.",
    ],
    technologies: ["Python", "SQL Server", "Power BI", "DAX", "K-Prototypes"],
  },
  {
    company: "ONEE", location: "Khouribga", position: "Stagiaire Développeuse Logiciel", year: "2025",
    intro: "Conception d'une application intranet trois tiers pour digitaliser des processus de gestion internes.",
    achievements: [
      "Développement d'une solution de gestion des employés et des demandes administratives.",
      "Génération de documents PDF et tableaux de bord avec Chart.js.",
      "Réalisation d'interfaces web avec PHP, MySQL, HTML, CSS et JavaScript.",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Chart.js"],
  },
] as const;

export const education = [
  { year: "2024 — 2027", title: "Cycle ingénieur — Informatique & Ingénierie des Données", place: "École Nationale des Sciences Appliquées, Khouribga" },
  { year: "2022 — 2024", title: "Classes préparatoires intégrées", place: "École Nationale des Sciences Appliquées, Khouribga" },
] as const;

/* ==================================================
   LOGOS DES TECHNOLOGIES — URL EXTERNES
   Aucun téléchargement d'image nécessaire
================================================== */

const devicon =
  "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons";

export const technologyLogos: Record<string, string> = {
  // DATA ENGINEERING & BI
  Python: `${devicon}/python/python-original.svg`,
  Pandas: `${devicon}/pandas/pandas-original.svg`,
  "SQL Server":
    `${devicon}/microsoftsqlserver/microsoftsqlserver-original.svg`,
  "Power BI":
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",

  // INTELLIGENCE ARTIFICIELLE
  "Scikit-learn":
    `${devicon}/scikitlearn/scikitlearn-original.svg`,
  PyTorch: `${devicon}/pytorch/pytorch-original.svg`,
  MLflow:
    "https://cdn.simpleicons.org/mlflow/0194E2",

  // SOFTWARE ENGINEERING
  Java: `${devicon}/java/java-original.svg`,
  "Spring Boot":
    "https://cdn.simpleicons.org/springboot/6DB33F",
  JavaScript:
    `${devicon}/javascript/javascript-original.svg`,
  "Next.js":
    "https://cdn.simpleicons.org/nextdotjs/AE51C2",
  PHP: `${devicon}/php/php-original.svg`,

  // BASES DE DONNÉES
  MySQL: `${devicon}/mysql/mysql-original.svg`,
  MongoDB: `${devicon}/mongodb/mongodb-original.svg`,
};
