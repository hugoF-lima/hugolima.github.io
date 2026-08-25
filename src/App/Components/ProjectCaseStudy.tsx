import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '../../data/projects';
import { ProjectCaseStudySection } from './ProjectCaseStudySection';
import { ShowcasePreview, ShowcaseItem } from './MediaLightbox';

interface ProjectCaseStudyProps {
  project: Project;
  showcaseItems?: ShowcaseItem[];
  onOpenShowcase: (index: number) => void;
}

const CORE_GROUP_KEYS = ['problem', 'solution', 'results', 'limitations'] as const;
type CoreGroupKey = typeof CORE_GROUP_KEYS[number];

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project, showcaseItems = [], onOpenShowcase }) => {
  const { t } = useTranslation();

  const caseStudy = project.caseStudy!;

  const coreSections: Array<{ key: CoreGroupKey; section: Exclude<typeof caseStudy.problem, undefined> }> = [];
  for (const key of CORE_GROUP_KEYS) {
    const section = caseStudy[key];
    if (section) {
      coreSections.push({ key, section: section as Exclude<typeof caseStudy.problem, undefined> });
    }
  }

  const hasShowcase = !!showcaseItems.length;
  const showcaseTitleKey = caseStudy.showcase?.titleKey ?? 'showcase';

  return (
    <div className="case-study-surface">
      <div className="case-study-stack" aria-label="Project details">
        {coreSections.map(({ key, section }, idx) => (
          <ProjectCaseStudySection
            key={key}
            sectionKey={key}
            section={section}
            isFirst={idx === 0}
            isLast={idx === coreSections.length - 1}
          />
        ))}
      </div>

      {hasShowcase && (
        <section className="case-study-section case-study-section--showcase case-study-section--standalone case-study-section--card">
          <h3 className="case-study-section-title case-study-section-title--showcase">
            {t(showcaseTitleKey)}
          </h3>
          <div className="case-study-showcase-inner">
            <ShowcasePreview items={showcaseItems} onOpen={onOpenShowcase} />
          </div>
        </section>
      )}
    </div>
  );
};
