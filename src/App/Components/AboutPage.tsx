import React from 'react';
import { useTranslation } from 'react-i18next';
import { PitchEmbed } from './PitchEmbed';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="about-page">
      <div className="container">
        <div className="item-about">
          <h2>{t('aboutMeTitle')}</h2>
          <p className="about-text">{t('aboutMe')}</p>
        </div>
      </div>

      <div className="item-video">
        <div className="item-about">
          <h2>{t('aboutMeTitleTwo')}</h2>
          <div className="pitch-panel">
            <PitchEmbed title={t('watchPitch')} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="item-about">
          <h2>{t('myWorkHeaderTwo')}</h2>
          <p className="about-text">{t('myWork')}</p>
        </div>
      </div>

      <div className="container">
        <div className="item-group" style={{ width: '100%' }}>
          <div className="item-about">
            <h2>{t('contactMeHeaderTwo')}</h2>
            <p className="about-text">{t('contactMe')}</p>
          </div>

          <div className="item-about">
            <h2>{t('thanksToHeaderTwo')}</h2>
            <p className="about-text">{t('thanksTo')}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
