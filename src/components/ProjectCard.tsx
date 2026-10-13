
import Link from "next/link";

import {
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";

import type { Project } from "@/data/projects";
import { ProjectArtwork } from "./ProjectArtwork";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article
      className={`project-card ${
        project.featured
          ? "project-card-featured"
          : ""
      }`}
    >
      {/* Carte cliquable : détails du projet */}
      <Link
        href={`/projets/${project.slug}`}
        className="project-card-link"
        aria-label={`Explorer le projet ${project.title}`}
      >
        {/* Illustration */}
        <div className="project-cover">
          <ProjectArtwork variant={project.visual} />

          <div className="project-cover-sticker">
            {project.index} / {project.year}
          </div>
        </div>

        {/* Informations du projet */}
        <div className="project-card-content">

          <div className="project-card-category">
            {project.category}
          </div>

          <div className="project-card-title-row">
            <h3>{project.shortTitle}</h3>

            <span className="project-go">
              <ArrowUpRight size={20} />
            </span>
          </div>

          <p>{project.description}</p>

          <div className="tag-list">
            {project.stack.slice(0, 4).map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Bouton GitHub indépendant */}
      {project.github && (
        <div className="project-card-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link"
            aria-label={`Voir le code GitHub de ${project.title}`}
          >
            <Github size={18} />

            <span>Voir le projet sur GitHub</span>

            <ExternalLink size={15} />
          </a>
        </div>
      )}
    </article>
  );
}
