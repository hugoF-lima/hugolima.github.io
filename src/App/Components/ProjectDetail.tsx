import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { Slideshow } from './Slideshow';

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
          {project.repoKey && (
            <p>
              <a href={t(project.repoKey)} target="_blank" rel="noopener noreferrer" style={{ color: 'aquamarine' }}>
                {t(project.repoKey)}
              </a>
            </p>
          )}
        </div>

        {project.videos && project.videos.length > 0 && (
          <div className="item-video">
            <h2>{t('showcase')}</h2>
            {project.videos.map((video, idx) => (
              <div key={idx} className="video-container">
                {video.descKey && <p style={{ whiteSpace: 'pre-line' }}>{t(video.descKey)}</p>}
                <video controls style={{ maxWidth: '100%' }}>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
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
