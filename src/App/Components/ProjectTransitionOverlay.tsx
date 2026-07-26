import React from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { useProjectTransition } from '../transition/projectTransitionStore';
import { techIconMap } from './projectTechIcons';

export const ProjectTransitionOverlay: React.FC = () => {
  const { t } = useTranslation();
  const { transition } = useProjectTransition();
  const project = projects.find((entry) => entry.slug === transition.slug);

  if (!project || !transition.sourceRect || !transition.targetRect || transition.phase === 'idle') {
    return null;
  }

  const rect = transition.phase === 'homeExit' ? transition.sourceRect : transition.targetRect;
  const overlayClassName = [
    'project-transition-overlay',
    transition.direction ? `project-transition-overlay-${transition.direction}` : '',
    `project-transition-overlay-${transition.phase}`,
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties & Record<'--transition-media-width', string> = {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    '--transition-media-width': `${Math.max(260, transition.mediaWidth ?? rect.width - 32)}px`,
  };

  return (
    <div className={overlayClassName} style={style} aria-hidden="true">
      <div className="project-transition-overlay-card">
        <div className="project-transition-overlay-hero">
          <div className="project-transition-overlay-media">
            <h2>{t(project.nameKey)}</h2>
            <img src={project.images[0]} alt="" />
          </div>
          <div className="project-transition-overlay-copy">
            <p>{t(project.fullDescKey ?? project.descKey)}</p>
            <div className="project-transition-overlay-tech">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-transition-overlay-tech-item">
                  {techIconMap[tech].label}
                </span>
              ))}
            </div>
          </div>
        </div>
        {project.videos && project.videos.length > 0 && (
          <div className="project-transition-overlay-showcase">
            <h3>{t('showcase')}</h3>
            <div className="project-transition-overlay-showcase-placeholder"></div>
          </div>
        )}
      </div>
    </div>
  );
};
