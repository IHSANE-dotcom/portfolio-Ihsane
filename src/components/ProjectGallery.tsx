"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const filters = [
  { key: "all", title: "Tous les projets" },
  { key: "data", title: "Data & BI" },
  { key: "ai", title: "IA & NLP" },
  { key: "software", title: "Software" },
];
const projectGroup: Record<string, string[]> = {
  "ocp-data-warehouse": ["data"],
  "sentiment-darija": ["ai"],
  "bi-pharmaceutique": ["data"],
  "plateforme-ventes": ["software"],
  "detection-masque": ["ai"],
};

export function ProjectGallery() {
  const [active, setActive] = useState("all");
  const visible = projects.filter(project => active === "all" || projectGroup[project.slug]?.includes(active));
  return <>
    <div className="filters" role="group" aria-label="Filtrer les projets">
      {filters.map(filter => <button key={filter.key} type="button" className={`filter-button ${active === filter.key ? "active" : ""}`} aria-pressed={active === filter.key} onClick={() => setActive(filter.key)}>{filter.title}<span>{filter.key === "all" ? projects.length : projects.filter(p => projectGroup[p.slug]?.includes(filter.key)).length}</span></button>)}
    </div>
    <div className="projects-grid" aria-live="polite">{visible.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div>
  </>;
}
