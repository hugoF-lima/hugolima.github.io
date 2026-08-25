import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { ProjectCard } from './Components/ProjectCard';
import { ProjectDetail } from './Components/ProjectDetail';
import { AboutPage } from './Components/AboutPage';
import { ProjectTransitionOverlay } from './Components/ProjectTransitionOverlay';
import { projects } from '../data/projects';
import { ProjectTransitionProvider, snapshotRect, transitionTimings, useProjectTransition } from './transition/projectTransitionStore';

const legacyRedirects = [
  { path: '/xmlReaderProject.html', to: '/project/invoice-automation' },
  { path: '/project/xml-reader', to: '/project/invoice-automation' },
  { path: '/kanjiQuizProject.html', to: '/project/kanji-quiz' },
  { path: '/bookStoreSystem.html', to: '/project/bookstore-system' },
  { path: '/carAdsSystem.html', to: '/project/car-ads-system' },
  { path: '/outlookExtractor.html', to: '/project/outlook-extractor' },
  { path: '/recupStProject.html', to: '/project/recup-st-reader' },
  { path: '/jpTyperQt.html', to: '/project/jp-typer' },
  { path: '/enadeSimulado.html', to: '/project/enade-simulado' },
  { path: '/aboutMePage.html', to: '/about' },
  { path: '/index.old.html', to: '/' },
];

const HomePage: React.FC = () => {
  const location = useLocation();
  const { transition, settleIntoHome, clearTransition } = useProjectTransition();

  // Split projects into groups of 2
  const projectGroups: typeof projects[] = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectGroups.push(projects.slice(i, i + 2));
  }

  useLayoutEffect(() => {
    if (location.pathname !== '/' || transition.direction !== 'reverse' || transition.phase !== 'routeReverse' || !transition.slug) {
      return;
    }

    window.scrollTo({ top: transition.homeScrollY, behavior: 'auto' });
    let timeoutId: number | undefined;
    const frame = window.requestAnimationFrame(() => {
      const cardElement = document.querySelector(`[data-project-card="${transition.slug}"]`);

      if (!(cardElement instanceof HTMLElement)) {
        clearTransition();
        return;
      }

      settleIntoHome(snapshotRect(cardElement.getBoundingClientRect()));
      timeoutId = window.setTimeout(() => {
        clearTransition();
      }, transitionTimings.homeSettleDelay);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [clearTransition, location.pathname, settleIntoHome, transition.direction, transition.homeScrollY, transition.phase, transition.slug]);

  const homeGroupClassName = [
    'item-group',
    transition.direction === 'forward' && (transition.phase === 'homeExit' || transition.phase === 'routeForward') ? 'item-group-transitioning-forward' : '',
    transition.direction === 'reverse' && transition.phase === 'homeSettling' ? 'item-group-transitioning-reverse' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      {projectGroups.map((group, groupIdx) => (
        <div key={groupIdx} className="container">
          <div className={homeGroupClassName}>
            {group.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const RoutedApp: React.FC = () => {
  return (
    <>
      <div className="app-shell">
        <div className="app-atmosphere" aria-hidden="true">
          <span className="app-atmosphere-glow app-atmosphere-glow-left" />
          <span className="app-atmosphere-glow app-atmosphere-glow-right" />
          <span className="app-atmosphere-glow app-atmosphere-glow-center" />
          <span className="app-atmosphere-grid" />
          <span className="app-atmosphere-vignette" />
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          {legacyRedirects.map((redirect) => (
            <Route
              key={redirect.path}
              path={redirect.path}
              element={<Navigate to={redirect.to} replace />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
      <ProjectTransitionOverlay />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ProjectTransitionProvider>
        <RoutedApp />
      </ProjectTransitionProvider>
    </BrowserRouter>
  );
};
