import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project, ProjectTech } from '../../data/projects';
import { techIconMap } from './projectTechIcons';

interface ProjectMetaProps {
  project: Project;
  className?: string;
}

const TechIcon: React.FC<{ tech: ProjectTech }> = ({ tech }) => {
  const iconDefinition = techIconMap[tech];
  const Icon = iconDefinition.icon;

  return (
    <span
      className="project-tech-icon"
      title={iconDefinition.label}
      aria-label={iconDefinition.label}
    >
      <Icon aria-hidden="true" focusable="false" />
    </span>
  );
};

export const ProjectMeta: React.FC<ProjectMetaProps> = ({ project, className }) => {
  const { t } = useTranslation();
  const sourceCodeUrl = project.repoKey ? (t(project.repoKey) as string) : undefined;
  const liveDemoUrl = project.showLiveDemo ? project.liveDemoUrl : undefined;

  return (
    <div className={['project-card-footer', className].filter(Boolean).join(' ')}>
      <div className="project-tech-stack" aria-label={t('techStack')}>
        {project.techStack.map((tech) => (
          <TechIcon key={tech} tech={tech} />
        ))}
      </div>
      <div className="project-actions">
        {sourceCodeUrl && (
          <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="project-action-button">
            {t('sourceCode')}
          </a>
        )}
        {liveDemoUrl && (
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-action-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            {t('liveDemo')}
          </a>
        )}
      </div>
    </div>
  );
};
