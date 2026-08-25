import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ProjectCaseStudySection as ProjectCaseStudySectionData } from '../../data/projects';
import { StatCard } from './StatCard';

interface ProjectCaseStudySectionProps {
  sectionKey: 'problem' | 'solution' | 'results' | 'limitations';
  section: ProjectCaseStudySectionData;
  isFirst?: boolean;
  isLast?: boolean;
}

export const ProjectCaseStudySection: React.FC<ProjectCaseStudySectionProps> = ({
  sectionKey,
  section,
}) => {
  const { t } = useTranslation();

  const hasDescription = !!section.descriptionKey;
  const hasItems = !!section.itemsKey;
  const hasMetrics = !!section.metricsKey;

  const itemsArr: string[] | null = hasItems
    ? (t(section.itemsKey!, { returnObjects: true }) as unknown as string[]) ?? null
    : null;

  const metricsRaw: unknown = hasMetrics ? t(section.metricsKey!, { returnObjects: true }) : undefined;
  const metricsArr: Array<string | { label: string; sublabel?: string }> = Array.isArray(metricsRaw)
    ? (metricsRaw as Array<string | { label: string; sublabel?: string }>)
    : [];

  return (
    <section className={`case-study-section case-study-section--card case-study-section--${sectionKey}`}>
      <header className="case-study-section-header">
        <h3 className={`case-study-section-title case-study-section-title--${sectionKey}`}>
          {t(section.titleKey)}
        </h3>
      </header>

      {hasDescription && (
        <p className="case-study-description" style={{ whiteSpace: 'pre-line' }}>
          {t(section.descriptionKey!)}
        </p>
      )}

      {itemsArr && Array.isArray(itemsArr) && itemsArr.length > 0 && (
        <ul className="case-study-items">
          {itemsArr.map((it, idx) => (
            <li key={idx} className="case-study-item">
              {it}
            </li>
          ))}
        </ul>
      )}

      {metricsArr.length > 0 && (
        <div className={`case-study-metrics case-study-metrics--${sectionKey}`}>
          {metricsArr.map((m, idx) => {
            const accent =
              sectionKey === 'results'
                ? idx === 0
                  ? 'emerald'
                  : 'cyan'
                : sectionKey === 'limitations'
                  ? 'amber'
                  : 'primary';

            if (typeof m === 'string') {
              return (
                <StatCard
                  key={idx}
                  label={m}
                  accent={accent}
                />
              );
            }
            return (
              <StatCard
                key={idx}
                label={m.label}
                sublabel={m.sublabel}
                accent={accent}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
