import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Database, FileText, Github, GraduationCap, Linkedin, Mail, MapPin, Network, Sparkles } from "lucide-react";
import {
  site,
  expertise,
  experiences,
  education,
  technologyLogos,
} from "@/data/site";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";
import { HeroIntro } from "@/components/HeroIntro";
import Image from "next/image";


const icons = {data: Database, ai: Sparkles, software: Code2, databases: Network};

export default function Home() {
  return <main id="contenu">
    <HeroIntro />

    <div className="marquee" aria-label="Domaines de spécialisation"><div className="marquee-track"><span>DATA ENGINEERING</span><b></b><span>BUSINESS INTELLIGENCE</span><b></b><span>ARTIFICIAL INTELLIGENCE</span><b></b><span>SOFTWARE ENGINEERING</span><b></b><span>DATA ENGINEERING</span><b></b><span>BUSINESS INTELLIGENCE</span><b></b></div></div>

    <section id="apropos" className="section about-section"><div className="site-container">
      <Reveal><div className="section-eyebrow"><span className="eyebrow-line"/> 01 / À PROPOS <span className="eyebrow-num">WHO I AM</span></div></Reveal>
      <div className="about-layout"><Reveal><div className="about-heading"><span className="about-asterisk">✳</span><h2>Une approche<br/><em>curieuse.</em><br/>Un esprit <span>data.</span></h2><div className="about-signature">Curiosité. Rigueur. Impact.</div></div></Reveal>
        <Reveal delay={80}><div className="about-details"><p className="about-lead">Je suis élève ingénieure en dernière année à l'<strong>ENSA Khouribga</strong>, spécialisée en <strong>Informatique & Ingénierie des Données.</strong></p><p>{site.pitch}</p><p>Je souhaite rejoindre une équipe pour un stage PFE et contribuer à des projets mêlant ingénierie des données, Business Intelligence, intelligence artificielle ou développement logiciel.</p><div className="about-figures"><div><strong>02+</strong><span>expériences<br/>professionnelles</span></div><div><strong>05+</strong><span>projets<br/>à explorer</span></div><div><strong>2027</strong><span>diplôme<br/>d'ingénieure</span></div></div></div></Reveal>
      </div>
    </div></section>

 
{/* ==========================================
    SECTION EXPERTISES AVEC LOGOS
========================================== */}

<section
  id="expertises"
  className="section skills-section"
>
  <div className="site-container">

    {/* Titre de la section */}
    <Reveal>
      <div className="section-eyebrow">
        <span className="eyebrow-line" />
        02 / EXPERTISES
        <span className="eyebrow-num">
          WHAT I DO
        </span>
      </div>

      <div className="section-title-row">
        <h2>
          Des compétences
          <br />
          <em>qui se connectent.</em>
        </h2>

        <p>
          De la donnée brute à une solution utilisable :
          un ensemble de compétences complémentaires
          pour construire des projets de bout en bout.
        </p>
      </div>
    </Reveal>

    {/* Grille des quatre domaines */}
    <div className="skills-grid">

      {expertise.map((item, i) => {
        const Icon = icons[item.id];

        return (
          <Reveal
            key={item.id}
            delay={i * 100}
          >
            <article className="skill-card">

              {/* Icône du domaine et numéro */}
              <div className="skill-card-head">

                <div className="skill-icon">
                  <Icon size={23} />
                </div>

                <span>
                  {item.number} / 04
                </span>

              </div>

              {/* Nom du domaine */}
              <h3>{item.title}</h3>

              {/* Description */}
              <p>{item.text}</p>

              {/* Technologies avec leurs logos */}
              <div className="tag-list">

                {item.tools.map((tool) => {

                  // Récupération de l'URL du logo
                  const logo = technologyLogos[tool];

                  return (
                    <span
                      className="tag technology-tag"
                      key={tool}
                    >

                      {/* Logo externe si disponible */}
                      {logo && (
                        <Image
                          src={logo}
                          alt=""
                          width={21}
                          height={21}
                          unoptimized
                          className="technology-logo"
                        />
                      )}

                      {/* Nom de la technologie */}
                      <span className="technology-name">
                        {tool}
                      </span>

                    </span>
                  );
                })}

              </div>

              {/* Petite flèche décorative */}
              <span className="skill-corner">
                ↗
              </span>

            </article>
          </Reveal>
        );
      })}

    </div>
  </div>
</section>


    <section id="experiences" className="section experience-section"><div className="site-container experience-layout">
      <Reveal><div className="experience-left"><div className="section-eyebrow"><span className="eyebrow-line"/> 03 / EXPÉRIENCES</div><h2>Apprendre.<br/><em>Construire.</em><br/>Évoluer.</h2><p>Des expériences qui ont donné du sens à mes compétences techniques et à la résolution de problèmes réels.</p><div className="experience-deco"><BriefcaseBusiness size={32}/><span>REAL WORLD<br/>EXPERIENCE</span></div></div></Reveal>
      <div className="experience-timeline">{experiences.map((item,i) => <Reveal delay={i*80} key={item.company}><article className="experience-item"><span className="timeline-bubble"/><div className="experience-line"><span>{item.year}</span><span>{item.location}</span></div><h3>{item.position}</h3><p className="experience-company">{item.company}</p><p>{item.intro}</p><ul>{item.achievements.map(achievement => <li key={achievement}><Check size={15}/>{achievement}</li>)}</ul><div className="tag-list">{item.technologies.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article></Reveal>)}</div>
    </div></section>

    <section id="projets" className="section projects-section"><div className="site-container"><Reveal><div className="section-eyebrow"><span className="eyebrow-line"/> 04 / PROJETS <span className="eyebrow-num">SELECTED WORK</span></div><div className="section-title-row"><h2>Du code, des idées,<br/><em>des réalisations.</em></h2><p>Une sélection de projets en Data Engineering, BI, NLP, Computer Vision et développement logiciel. Explore chaque projet pour découvrir l'approche utilisée.</p></div></Reveal><ProjectGallery/><div className="projects-note"><span></span></div></div></section>

    <section id="formation" className="section education-section"><div className="site-container education-layout"><Reveal><div><div className="section-eyebrow"><span className="eyebrow-line"/> 05 / FORMATION</div><h2>Un parcours<br/><em>en mouvement.</em></h2><p>Une formation d'ingénieure ancrée dans l'informatique, les données et la conception de systèmes.</p></div></Reveal><div className="education-list">{education.map(item => <Reveal key={item.year}><div className="education-item"><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.place}</p></div><GraduationCap size={23}/></div></Reveal>)}</div></div></section>

    <section className="resume-banner"><div className="site-container resume-banner-inside"><div className="resume-ring"/><div><div className="eyebrow-light"><FileText size={17}/> CV / FRANÇAIS & ENGLISH</div><h2>Mon parcours, <em>à portée de clic.</em></h2><p>Deux versions de mon CV sont disponibles à la consultation et au téléchargement, directement depuis le portfolio.</p></div><Link href="/cv" className="button light">Voir mes deux CV <ArrowUpRight size={19}/></Link></div></section>

    <section id="contact" className="contact-section"><div className="site-container"><div className="section-eyebrow"><span className="eyebrow-line"/> 06 / CONTACT <span className="eyebrow-num">LET'S CONNECT</span></div><div className="contact-layout"><div><h2>Créons quelque chose<br/><em>de remarquable.</em></h2><p>À la recherche d'un stage PFE 2027. Parlons Data Engineering, Business Intelligence, IA, développement logiciel ou de nouvelles opportunités.</p><a className="button accent" href={`mailto:${site.email}?subject=Prise%20de%20contact%20-%20Stage%20PFE%202027`}>M'envoyer un e-mail <ArrowUpRight size={18}/></a></div><div className="contact-card"><span>LET'S TALK</span><a className="contact-address" href={`mailto:${site.email}`}><Mail size={22}/>{site.email}<ArrowUpRight size={23}/></a><div className="contact-card-footer"><span><MapPin size={16}/> {site.city}</span><span>ENSA · 2027</span></div><div className="socials">{site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a>}{site.github && <a href={site.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a>}{!site.github && !site.linkedin && <span className="social-hint">Ajoute tes liens LinkedIn et GitHub dans src/data/site.ts.</span>}</div></div></div></div></section>
  </main>;
}
