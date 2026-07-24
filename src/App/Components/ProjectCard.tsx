import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../data/projects';
import { Slideshow } from './Slideshow';
import { Link } from 'react-router-dom';
import { ProjectMeta } from './ProjectMeta';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="item">
      <h2 className="projectContainer">
        <Link to={`/project/${project.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          {t(project.nameKey)}
        </Link>
      </h2>
      <Slideshow images={project.images} />
      <p className="project-description">{t(project.descKey)}</p>
      <ProjectMeta project={project} />
    </div>
  );
};
