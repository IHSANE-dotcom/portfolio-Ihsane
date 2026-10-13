import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectArtwork } from "@/components/ProjectArtwork";

export function generateStaticParams() {return projects.map(p => ({slug: p.slug}));}
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;const p = getProject(slug);
  return p ? {title:p.title,description:p.description} : {title:"Projet introuvable"};
}
export default async function ProjectPage({params}: {params: Promise<{slug:string}>}) {
  const {slug} = await params;
  const project = getProject(slug);
  if(!project) notFound();
  const related = projects.filter(p => p.slug !== slug).slice(0,2);
  return <main id="contenu" className="detail-page"><div className="site-container">
    <div className="detail-top"><Link href="/#projets" className="text-back"><ArrowLeft size={17}/> Tous les projets</Link><span>CASE STUDY / {project.index}</span></div>
    <header className="detail-head"><p className="project-type">{project.category} <b>·</b> {project.year}</p><h1>{project.title}<span>.</span></h1><p>{project.description}</p><div className="detail-actions">{project.github && <a className="button accent" href={project.github} target="_blank" rel="noopener noreferrer">Code source <ExternalLink size={17}/></a>}{project.demo && <a className="button outline" href={project.demo} target="_blank" rel="noopener noreferrer">Voir la démo <ArrowUpRight size={17}/></a>}</div></header>
    <div className="detail-art"><ProjectArtwork variant={project.visual}/></div>
    <div className="detail-grid"><aside className="detail-aside"><span className="detail-index">PROJECT DETAILS</span><div><span>DOMAINE</span><strong>{project.category}</strong></div><div><span>ANNÉE</span><strong>{project.year}</strong></div><div><span>TECHNOLOGIES</span><div className="tag-list">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></aside><article className="detail-story"><section><span>01 / CONTEXTE</span><h2>Le projet</h2><p>{project.context}</p></section><section><span>02 / DÉFI</span><h2>La problématique</h2><p>{project.challenge}</p></section><section><span>03 / DÉMARCHE</span><h2>Comment j'ai procédé</h2><ol>{project.approach.map(step => <li key={step}><CheckCircle2 size={18}/>{step}</li>)}</ol></section><section><span>04 / RÉSULTAT</span><h2>Ce qui a été réalisé</h2><p>{project.outcome}</p></section></article></div>
    <section className="detail-more"><div><h2>Continuer à explorer <span>✳</span></h2><Link href="/#projets">Tous les projets <ArrowRight size={17}/></Link></div><div className="related-grid">{related.map(item => <Link className="related-card" href={`/projets/${item.slug}`} key={item.slug}><span>{item.index} / {item.category}</span><strong>{item.shortTitle}</strong><ArrowUpRight size={20}/></Link>)}</div></section>
  </div></main>;
}
