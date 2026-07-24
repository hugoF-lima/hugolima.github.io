import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { Slideshow } from './Slideshow';
import { ProjectMeta } from './ProjectMeta';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div style={{ padding: '2rem' }}>Project not found</div>;
  }

  return (
    <div className="container">
      <main className="item-group" style={{ flexDirection: 'column', width: '100%' }}>
        <div className="item-about">
          <h2>{t(project.nameKey)}</h2>
          <Slideshow images={project.images} />
          {project.fullDescKey && <p style={{ whiteSpace: 'pre-line' }}>{t(project.fullDescKey)}</p>}
          <ProjectMeta project={project} className="project-detail-meta" />
        </div>

        {project.videos && project.videos.length > 0 && (
          <section className="item-video project-showcase-section">
            <h2>{t('showcase')}</h2>
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
          </section>
        )}

        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Link to="/" style={{ color: 'aquamarine', textDecoration: 'underline' }}>
            {t('backToHome')}
          </Link>
        </div>
      </main>
    </div>
  );
};
