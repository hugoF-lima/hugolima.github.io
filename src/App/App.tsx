import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { ProjectCard } from './Components/ProjectCard';
import { ProjectDetail } from './Components/ProjectDetail';
import { AboutPage } from './Components/AboutPage';
import { projects } from '../data/projects';

const legacyRedirects = [
  { path: '/xmlReaderProject.html', to: '/project/xml-reader' },
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
  // Split projects into groups of 2
  const projectGroups: typeof projects[] = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectGroups.push(projects.slice(i, i + 2));
  }

  return (
    <>
      {projectGroups.map((group, groupIdx) => (
        <div key={groupIdx} className="container">
          <div className="item-group">
            {group.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
