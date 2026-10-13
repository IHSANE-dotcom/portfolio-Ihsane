import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Database, FileText, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { site } from "@/data/site";

/**
 * HERO EDITORIAL — première section du portfolio.
 * - Modifie ici le grand titre et les deux étiquettes flottantes.
 * - Modifie le texte de description et la disponibilité dans src/data/site.ts.
 * - Modifie les dimensions et les couleurs dans src/app/hero-intro.css.
 * Le visuel à droite est vectoriel et construit en CSS : aucune photo requise.
 */
export function HeroIntro() {
  return (
    <section className="intro-hero" id="accueil" aria-labelledby="intro-title">
      <div className="intro-hero__grain" aria-hidden="true" />

      <div className="site-container intro-hero__grid">
        <div className="intro-hero__content">
          <p className="intro-hero__eyebrow">
            <span className="intro-hero__eyebrow-line" />
           SALUT, JE SUIS {site.name.toUpperCase()}
          </p>

          <h1 className="intro-hero__title" id="intro-title">
            <span>Des données aux solutions</span>
            <em>qui comptent<span className="intro-hero__dot">.</span></em>
          </h1>

          <p className="intro-hero__description">{site.introduction}</p>

          <div className="intro-hero__actions">
            <Link href="/#projets" className="intro-hero__button intro-hero__button--primary">
              Découvrir mes projets <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/cv" className="intro-hero__button intro-hero__button--secondary">
              Mes CV français & anglais <FileText size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="intro-hero__bottom">
            <span><MapPin size={15} aria-hidden="true" /> {site.city}</span>
            <span><GraduationCap size={16} aria-hidden="true" /> {site.school} · {site.graduation}</span>
          </div>
        </div>

        <div className="intro-hero__art" role="img" aria-label="Illustration abstraite des données et de l'intelligence artificielle, sans photographie">
          <div className="intro-hero__halo" aria-hidden="true" />
          <div className="intro-hero__ring intro-hero__ring--outer" aria-hidden="true" />
          <div className="intro-hero__ring intro-hero__ring--inner" aria-hidden="true" />

          <svg className="intro-hero__paths" viewBox="0 0 520 500" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M262 122 C337 108 396 127 424 175" stroke="url(#lineViolet)" strokeWidth="2" strokeDasharray="5 10" />
            <path d="M255 346 C170 369 113 358 88 310" stroke="url(#lineViolet)" strokeWidth="2" strokeDasharray="5 10" />
            <path d="M126 205 C166 143 204 123 262 122" stroke="#B48EAD" strokeWidth="1.5" opacity=".8" />
            <circle cx="262" cy="122" r="6" fill="#AE51C2" />
            <circle cx="424" cy="175" r="6" fill="#AE51C2" />
            <circle cx="88" cy="310" r="6" fill="#3B4252" />
            <circle cx="255" cy="346" r="6" fill="#AE51C2" />
            <defs>
              <linearGradient id="lineViolet" x1="88" y1="122" x2="424" y2="369">
                <stop stopColor="#B48EAD" />
                <stop offset="1" stopColor="#AE51C2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="intro-hero__core" aria-hidden="true">
            <div className="intro-hero__core-gloss" />
            <svg width="126" height="124" viewBox="0 0 126 124" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M63 13L109 40V86L63 112L17 86V40L63 13Z" stroke="#E5D7E9" strokeWidth="2.4" />
              <path d="M63 13V61M63 61L109 40M63 61L17 40M63 61V112" stroke="#E5D7E9" strokeWidth="2.4" />
              <path d="M63 35L89 50V76L63 91L37 76V50L63 35Z" fill="#AE51C2" fillOpacity=".32" stroke="#DDB4E7" strokeWidth="1.7" />
              <path d="M63 35V63L89 50M63 63L37 50M63 63V91" stroke="#F6F1F5" strokeWidth="1.7" />
              <circle cx="63" cy="63" r="5" fill="#F6F1F5" />
            </svg>
            <span className="intro-hero__core-caption">DATA × INTELLIGENCE</span>
          </div>

          <div className="intro-hero__float intro-hero__float--top" aria-hidden="true">
            <span className="intro-hero__float-icon"><Database size={19} /></span>
            <span><strong>Data Engineering</strong><small>Structurer · Transformer</small></span>
          </div>

          <div className="intro-hero__float intro-hero__float--bottom" aria-hidden="true">
            <span className="intro-hero__float-icon intro-hero__float-icon--alt"><Sparkles size={19} /></span>
            <span><strong>IA & Analytics</strong><small>Analyser · Innover</small></span>
          </div>

          <div className="intro-hero__signature" aria-hidden="true">
            <span>DESIGN</span><span className="intro-hero__signature-dot" /><span>BUILD</span><span className="intro-hero__signature-dot" /><span>IMPACT</span>
          </div>
        </div>
      </div>

      <Link href="/#apropos" className="intro-hero__discover" aria-label="Découvrir la suite du portfolio">
        <span>EN SAVOIR PLUS</span><ArrowDownRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
