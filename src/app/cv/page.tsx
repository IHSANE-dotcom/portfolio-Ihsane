import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CvViewer } from "@/components/CvViewer";

export const metadata: Metadata = { title: "CV | Français & English", description: "Consulter et télécharger les versions française et anglaise du CV." };
export default function CvPage() {
  return <main id="contenu" className="cv-page">
    <div className="site-container">
      <Link className="text-back" href="/"><ArrowLeft size={17}/> Retour au portfolio</Link>
      <div className="cv-page-top"><div className="section-eyebrow"><span className="eyebrow-line"/> MES DOCUMENTS <span className="eyebrow-num">01 / 02</span></div><h1>Mon parcours, <em>en détail.</em></h1><p>Consultez mon CV directement ici, en français ou en anglais, et téléchargez la version qui vous convient.</p></div>
      <CvViewer/>
      <div className="cv-page-bottom"><p>Un projet ou une opportunité en tête ?</p><Link href="/#contact">Entrons en contact <ArrowUpRight size={17}/></Link></div>
    </div>
  </main>;
}
