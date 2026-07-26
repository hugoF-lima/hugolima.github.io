import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../data/projects';
import { Slideshow } from './Slideshow';
import { useNavigate } from 'react-router-dom';
import { ProjectMeta } from './ProjectMeta';
import { useSurfaceBorderFlow } from '../hooks/useSurfaceBorderFlow';
import { getExpandedDetailRect, snapshotRect, transitionTimings, useProjectTransition } from '../transition/projectTransitionStore';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { transition, startForwardTransition, beginForwardOverlay } = useProjectTransition();
  const surfaceBorderFlowHandlers = useSurfaceBorderFlow();

  const triggerTransition = () => {
    if (transition.phase !== 'idle') {
      return;
    }

    if (!cardRef.current) {
      navigate(`/project/${project.slug}`);
      return;
    }

    const slideshowViewport = cardRef.current.querySelector('.slideshow-viewport');
    const mediaWidth = slideshowViewport instanceof HTMLElement
      ? slideshowViewport.getBoundingClientRect().width
      : cardRef.current.getBoundingClientRect().width - 32;

    startForwardTransition({
      slug: project.slug,
      sourceRect: snapshotRect(cardRef.current.getBoundingClientRect()),
      mediaWidth,
      homeScrollY: window.scrollY,
    });

    window.setTimeout(() => {
      beginForwardOverlay(getExpandedDetailRect(Boolean(project.videos?.length)));
    }, transitionTimings.forwardOverlayDelay);

    window.setTimeout(() => {
      navigate(`/project/${project.slug}`);
    }, transitionTimings.forwardRouteDelay);
  };

  const handleTransitionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest('a, button, .slideshow, .project-card-footer')) {
      return;
    }

    triggerTransition();
  };

  const cardClassName = [
    'item',
    'surface-border-flow',
    transition.direction === 'forward' && transition.slug === project.slug && transition.phase === 'homeExit' ? 'project-card-leaving-active' : '',
    transition.direction === 'forward' && transition.slug !== project.slug && (transition.phase === 'homeExit' || transition.phase === 'routeForward') ? 'project-card-leaving-sibling' : '',
    transition.direction === 'forward' && transition.slug === project.slug && transition.phase === 'routeForward' ? 'project-card-hidden-for-overlay' : '',
    transition.direction === 'reverse' && transition.slug === project.slug && (transition.phase === 'routeReverse' || transition.phase === 'homeSettling') ? 'project-card-hidden-for-overlay' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={cardRef}
      className={cardClassName}
      data-project-card={project.slug}
      onClick={handleTransitionClick}
      {...surfaceBorderFlowHandlers}
    >
      <h2 className="projectContainer">
        <a
          href={`/project/${project.slug}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
          onClick={(event) => {
            event.preventDefault();
            triggerTransition();
          }}
        >
          {t(project.nameKey)}
        </a>
      </h2>
      <Slideshow images={project.images} />
      <p className="project-description">{t(project.descKey)}</p>
      <ProjectMeta project={project} />
    </div>
  );
};
