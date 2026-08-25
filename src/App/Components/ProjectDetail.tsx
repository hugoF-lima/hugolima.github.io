import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { Slideshow } from './Slideshow';
import { ProjectMeta } from './ProjectMeta';
import { ProjectCaseStudy } from './ProjectCaseStudy';
import { MediaLightbox, ShowcaseItem } from './MediaLightbox';
import { useSurfaceBorderFlow } from '../hooks/useSurfaceBorderFlow';
import { snapshotRect, transitionTimings, useProjectTransition } from '../transition/projectTransitionStore';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const detailShellRef = useRef<HTMLDivElement | null>(null);
  const { transition, syncTargetRect, settleIntoDetail, clearTransition, startReverseTransition } = useProjectTransition();
  const surfaceBorderFlowHandlers = useSurfaceBorderFlow();
  const project = projects.find(p => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!project || !detailShellRef.current) {
      return;
    }

    if (transition.direction !== 'forward' || transition.slug !== project.slug || transition.phase !== 'routeForward') {
      return;
    }

    const actualRect = snapshotRect(detailShellRef.current.getBoundingClientRect());
    syncTargetRect(actualRect);

    const frame = window.requestAnimationFrame(() => {
      settleIntoDetail(actualRect);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [project, settleIntoDetail, syncTargetRect, transition.direction, transition.phase, transition.slug]);

  useEffect(() => {
    if (!project) {
      return;
    }

    if (transition.direction !== 'forward' || transition.slug !== project.slug || transition.phase !== 'detailSettling') {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      clearTransition();
    }, transitionTimings.detailSettleDelay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [clearTransition, project, transition.direction, transition.phase, transition.slug]);

  if (!project) {
    return <div style={{ padding: '2rem' }}>Project not found</div>;
  }

  const handleBackHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (!detailShellRef.current) {
      navigate('/');
      return;
    }

    const slideshowViewport = detailShellRef.current.querySelector('.slideshow-viewport');
    const mediaWidth = slideshowViewport instanceof HTMLElement
      ? slideshowViewport.getBoundingClientRect().width
      : detailShellRef.current.getBoundingClientRect().width * 0.42;

    startReverseTransition({
      slug: project.slug,
      sourceRect: snapshotRect(detailShellRef.current.getBoundingClientRect()),
      mediaWidth,
      homeScrollY: transition.homeScrollY || 0,
    });

    window.setTimeout(() => {
      navigate('/');
    }, transitionTimings.reverseRouteDelay);
  };

  const showcaseItems: ShowcaseItem[] = useMemo(() => {
    if (!project.videos || project.videos.length === 0) {
      return [];
    }
    return project.videos.map((video, idx) => {
      let tabLabel: string | undefined;
      if (project.caseStudy?.baseKey) {
        if (idx === 0) {
          const v = t(`${project.caseStudy.baseKey}.videos.invoiceAutomationTabLabel`, { defaultValue: '' });
          tabLabel = v ? String(v) : undefined;
        } else if (idx === 1) {
          const v = t(`${project.caseStudy.baseKey}.videos.excelUpdateTabLabel`, { defaultValue: '' });
          tabLabel = v ? String(v) : undefined;
        }
      }
      const previewImage = project.images?.[(idx + 1) % Math.max(1, project.images.length)];
      return {
        src: video.src,
        descKey: video.descKey,
        tabLabel,
        previewImage,
      };
    });
  }, [project, t]);

  const legacyShowcaseBody =
    project.videos && project.videos.length > 0 ? (
      <div className="showcase-list">
        {project.videos.map((video, idx) => (
          <div key={idx} className="video-container">
            {video.descKey && (
              <p className="video-description" style={{ whiteSpace: 'pre-line' }}>
                {t(video.descKey)}
              </p>
            )}
            <video controls className="project-showcase-video">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    ) : null;

  return (
    <div className="container">
      <main className="item-group project-detail-route">
        <article
          ref={detailShellRef}
          className={[
            'project-detail-shell',
            'surface-border-flow',
            transition.slug === project.slug && transition.direction === 'forward' && transition.phase === 'routeForward'
              ? 'project-detail-shell-transitioning-in'
              : '',
            transition.slug === project.slug && transition.direction === 'reverse' && transition.phase === 'routeReverse'
              ? 'project-detail-shell-transitioning-out'
              : '',
          ].filter(Boolean).join(' ')}
          {...surfaceBorderFlowHandlers}
        >
          <div className="project-detail-hero">
            <section className="project-detail-media-column">
              <h2>{t(project.nameKey)}</h2>
              <Slideshow images={project.images} />
            </section>

            <section className="project-detail-copy-column">
              {project.fullDescKey && (
                <p className="project-detail-description" style={{ whiteSpace: 'pre-line' }}>
                  {t(project.fullDescKey)}
                </p>
              )}
              <ProjectMeta project={project} className="project-detail-meta" />
            </section>
          </div>

          {project.caseStudy ? (
            <ProjectCaseStudy
              project={project}
              showcaseItems={showcaseItems}
              onOpenShowcase={(index) => setLightboxIndex(index)}
            />
          ) : (
            legacyShowcaseBody && (
              <section className="project-detail-showcase">
                <h2>{t('showcase')}</h2>
                {legacyShowcaseBody}
              </section>
            )
          )}
        </article>

        <div className="project-detail-back-row">
          <a href="/" onClick={handleBackHome} style={{ color: 'aquamarine', textDecoration: 'underline' }}>
            {t('backToHome')}
          </a>
        </div>
      </main>

      {lightboxIndex !== null && showcaseItems.length > 0 && (
        <MediaLightbox
          items={showcaseItems}
          openIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};
