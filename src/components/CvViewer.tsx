"use client";

import { useState } from "react";
import { ArrowUpRight, Download, FileText, Globe2 } from "lucide-react";
import { site } from "@/data/site";

type Language = "fr" | "en";
const files: Record<Language, {title: string; note: string; label: string; url: string}> = {
  fr: { title: "Curriculum Vitae", note: "Version originale française fournie avec la candidature.", label: "CV en français", url: site.cvFrench },
  en: { title: "Resume / Curriculum Vitae", note: "Version anglaise traduite à partir du CV français.", label: "CV in English", url: site.cvEnglish },
};
export function CvViewer() {
  const [language, setLanguage] = useState<Language>("fr");
  const selected = files[language];
  return <div className="cv-widget">
    <div className="cv-tools">
      <div className="cv-languages" role="group" aria-label="Langue du CV">
        <button type="button" aria-pressed={language === "fr"} className={language === "fr" ? "selected" : ""} onClick={() => setLanguage("fr")}>FR <span>Français</span></button>
        <button type="button" aria-pressed={language === "en"} className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")}>EN <span>English</span></button>
      </div>
      <div className="cv-actions">
        <a className="button outline small" href={selected.url} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={17}/> Ouvrir le PDF</a>
        <a className="button accent small" href={selected.url} download={`Ihsane_Foudal_CV_${language.toUpperCase()}.pdf`}><Download size={17}/> Télécharger</a>
      </div>
    </div>
    <div className="cv-preview-heading"><span><FileText size={18}/> {selected.title}</span><span><Globe2 size={15}/> {language.toUpperCase()} · PDF</span></div>
    <div className="pdf-frame">
      <iframe key={selected.url} src={`${selected.url}#toolbar=1&view=FitH`} title={`Aperçu : ${selected.label}`} loading="lazy" />
      <p>Si l'aperçu PDF n'est pas pris en charge par ton navigateur, <a href={selected.url} target="_blank" rel="noopener noreferrer">ouvre le CV dans un nouvel onglet</a>.</p>
    </div>
    <p className="cv-disclaimer">{selected.note} Vérifie toutes les informations de contact et le contenu avant de partager ce fichier publiquement.</p>
  </div>;
}
