import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { media } from '../../data/media';
import { PitchEmbed } from './PitchEmbed';
import { useReactiveSurface } from '../hooks/useReactiveSurface';

const languages = [
  { code: 'pt-BR', name: 'Português (Brasil)' },
  { code: 'en', name: 'English' },
  { code: 'jp', name: '日本語' },
];

const resumeLinks = media.resumes;

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const reactiveSurfaceHandlers = useReactiveSurface();
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);
  const [showPitch, setShowPitch] = useState(false);
  const [pitchFadeProgress, setPitchFadeProgress] = useState(0);
  const [headerState, setHeaderState] = useState<'default' | 'mid' | 'compact'>('default');

  const showHomeButton = location.pathname !== '/';

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('languagePreference', lang);
  };

  const handleNavigateHome = () => {
    setShowPitch(false);
    setPitchFadeProgress(0);
    navigate('/');
  };

  useEffect(() => {
    const handleHeaderScroll = () => {
      const scrollY = window.scrollY;
      setHeaderState((currentState) => {
        if (currentState === 'default') {
          return scrollY > 2 ? 'mid' : 'default';
        }

        if (currentState === 'mid') {
          if (scrollY <= 2) {
            return 'default';
          }

          if (scrollY >= 220) {
            return 'compact';
          }

          return 'mid';
        }

        return scrollY <= 140 ? 'mid' : 'compact';
      });
    };

    handleHeaderScroll();
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleHeaderScroll);
    };
  }, []);

  useEffect(() => {
    if (!showPitch) {
      setPitchFadeProgress(0);
      return undefined;
    }

    const scrollStartY = window.scrollY;

    const handleScroll = () => {
      const distance = Math.max(window.scrollY - scrollStartY, 0);
      const nextProgress = Math.min(distance / 180, 1);

      setPitchFadeProgress(nextProgress);

      if (nextProgress >= 1) {
        setShowPitch(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showPitch]);

  return (
    <header
      className={`site-header header-reactive ${headerState}`}
      {...reactiveSurfaceHandlers}
    >
      <div className="header-top-row">
        <div className="header-social-row">
          {showHomeButton && (
            <button
              onClick={handleNavigateHome}
              className="header-back-button"
            >
              {t('backToHome')}
            </button>
          )}
          {/* GitHub Icon */}
          <a
            href="https://github.com/hugoF-lima"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/hugo-lima-240ab6209/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          {/* Mailto Icon */}
          <a href="mailto:hugolima720@protonmail.com" className="header-icon-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
        <div className="language-buttons">
          {languages.map((lang) => (
            <button
              key={lang.code}
              id={lang.code === 'jp' ? 'jpbutton' : undefined}
              className={`language-button ${i18n.language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      <h1 id="name" className="header-name" onClick={handleNavigateHome}>{t('name')}</h1>
      <p id="introduction" className="header-introduction">{t('introduction')}</p>
      <div className="header-links">
        <button
          type="button"
          id="moreInfo"
          className="header-link-button smaller-text"
          onClick={() => navigate('/about')}
        >
          {t('moreInfo')}
        </button>
        <button
          type="button"
          className="header-inline-toggle smaller-text"
          onClick={() => setShowPitch((current) => !current)}
        >
          {t('watchPitch')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: showPitch ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      {showPitch && (
        <div
          className="pitch-panel pitch-panel-fade"
          style={{
            opacity: 1 - pitchFadeProgress,
            maxHeight: `${360 * (1 - pitchFadeProgress)}px`,
            transform: `translateY(-${pitchFadeProgress * 18}px)`,
          }}
        >
          <PitchEmbed title={t('watchPitch')} />
        </div>
      )}

      {/* Resume Download Dropdown */}
      <div className="resume-dropdown">
        <button
          onClick={() => setShowResumeDropdown(!showResumeDropdown)}
          className="resume-toggle-button"
        >
          {t('downloadResume')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: showResumeDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        {showResumeDropdown && (
          <div className="resume-dropdown-menu">
            <button
              disabled={!resumeLinks['pt-BR']}
              style={{
                background: resumeLinks['pt-BR'] ? '#555' : '#444',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                color: 'white',
                cursor: resumeLinks['pt-BR'] ? 'pointer' : 'not-allowed',
              }}
              onClick={() =>
                resumeLinks['pt-BR'] &&
                window.open(resumeLinks['pt-BR'], '_blank', 'noopener,noreferrer')
              }
            >
              PT-BR
            </button>
            <button
              disabled={!resumeLinks['en']}
              style={{
                background: resumeLinks['en'] ? '#555' : '#444',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                color: 'white',
                cursor: resumeLinks['en'] ? 'pointer' : 'not-allowed',
              }}
              onClick={() =>
                resumeLinks['en'] &&
                window.open(resumeLinks['en'], '_blank', 'noopener,noreferrer')
              }
            >
              EN-US
            </button>
            <button
              disabled={!resumeLinks['jp']}
              style={{
                background: resumeLinks['jp'] ? '#555' : '#444',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                color: 'white',
                cursor: resumeLinks['jp'] ? 'pointer' : 'not-allowed',
              }}
              onClick={() =>
                resumeLinks['jp'] &&
                window.open(resumeLinks['jp'], '_blank', 'noopener,noreferrer')
              }
            >
              JP
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
