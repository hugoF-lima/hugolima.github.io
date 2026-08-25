import { media } from './media';

export type ProjectTech =
  | 'python'
  | 'pyautogui'
  | 'qt'
  | 'pandas'
  | 'xml'
  | 'java'
  | 'sqlite'
  | 'json'
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'vite';

export type CaseStudySectionKey =
  | 'problem'
  | 'solution'
  | 'technologies'
  | 'results'
  | 'limitations'
  | 'showcase';

export interface ProjectCaseStudySection {
  titleKey: string;
  descriptionKey?: string;
  itemsKey?: string;
  metricsKey?: string;
}

export interface ProjectCaseStudy {
  baseKey: string;
  sectionOrder: CaseStudySectionKey[];
  problem?: ProjectCaseStudySection;
  solution?: ProjectCaseStudySection;
  technologies?: ProjectCaseStudySection;
  results?: ProjectCaseStudySection;
  limitations?: ProjectCaseStudySection;
  showcase?: ProjectCaseStudySection;
}

export interface Project {
  id: number;
  slug: string;
  nameKey: string;
  descKey: string;
  fullDescKey?: string;
  repoKey?: string;
  liveDemoUrl?: string;
  showLiveDemo?: boolean;
  techStack: ProjectTech[];
  caseStudy?: ProjectCaseStudy;
  videos?: Array<{
    src: string;
    descKey: string;
  }>;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'invoice-automation',
    nameKey: 'projects.invoiceAutomation.title',
    descKey: 'projects.invoiceAutomation.description',
    fullDescKey: 'projects.invoiceAutomation.fullDescription',
    repoKey: 'projects.invoiceAutomation.repository',
    techStack: ['python', 'pandas', 'xml', 'qt', 'pyautogui'],
    caseStudy: {
      baseKey: 'projects.invoiceAutomation',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.invoiceAutomation.problem.title',
        descriptionKey: 'projects.invoiceAutomation.problem.description',
      },
      solution: {
        titleKey: 'projects.invoiceAutomation.solution.title',
        descriptionKey: 'projects.invoiceAutomation.solution.description',
        itemsKey: 'projects.invoiceAutomation.solution.items',
      },
      technologies: {
        titleKey: 'projects.invoiceAutomation.technologies.title',
      },
      results: {
        titleKey: 'projects.invoiceAutomation.results.title',
        metricsKey: 'projects.invoiceAutomation.results.metrics',
        itemsKey: 'projects.invoiceAutomation.results.items',
      },
      limitations: {
        titleKey: 'projects.invoiceAutomation.limitations.title',
        descriptionKey: 'projects.invoiceAutomation.limitations.description',
      },
    },
    videos: [
      {
        src: media.videos.xmlReader[0],
        descKey: 'projects.invoiceAutomation.videos.invoiceAutomation'
      },
      {
        src: media.videos.xmlReader[1],
        descKey: 'projects.invoiceAutomation.videos.excelUpdate'
      }
    ],
    images: media.images.xmlReader,
  },

  {
    id: 2,
    slug: 'ankiweaver',
    nameKey: 'projects.ankiWeaver.title',
    descKey: 'projects.ankiWeaver.description',
    fullDescKey: 'projects.ankiWeaver.fullDescription',
    repoKey: 'projects.ankiWeaver.repository',
    techStack: ['react', 'typescript', 'python'],
    images: media.images.ankiWeaver,
    showLiveDemo: false,
    liveDemoUrl: 'https://natsu-matsuri-br-sp.vercel.app/'
  },

  {
    id: 3,
    slug: 'kanji-quiz',
    nameKey: 'projects.kanjiQuiz.title',
    descKey: 'projects.kanjiQuiz.description',
    fullDescKey: 'projects.kanjiQuiz.fullDescription',
    repoKey: 'projects.kanjiQuiz.repository',
    techStack: ['python', 'qt'],
    images: media.images.kanjiQuiz,
  },
  {
    id: 4,
    slug: 'bookstore-system',
    nameKey: 'projects.bookStore.title',
    descKey: 'projects.bookStore.description',
    fullDescKey: 'projects.bookStore.fullDescription',
    repoKey: 'projects.bookStore.repository',
    techStack: ['java', 'sqlite', 'html', 'css'],
    images: media.images.bookStore,
  },
  {
    id: 5,
    slug: 'natsu-matsuri-site',
    nameKey: 'projects.natsuMatsuri.title',
    descKey: 'projects.natsuMatsuri.description',
    repoKey: 'projects.natsuMatsuri.repository',
    techStack: ['react', 'typescript'],
    images: media.images.natsuMatsuri,
    showLiveDemo: true,
    liveDemoUrl: 'https://natsu-matsuri-br-sp.vercel.app/'
  },
  {
    id: 6,
    slug: 'outlook-extractor',
    nameKey: 'projects.outlookExtractor.title',
    descKey: 'projects.outlookExtractor.description',
    fullDescKey: 'projects.outlookExtractor.fullDescription',
    repoKey: 'projects.outlookExtractor.repository',
    techStack: ['python', 'qt'],
    videos: [
      {
        src: media.videos.outlook[0],
        descKey: 'projects.outlookExtractor.videos.extraction'
      }
    ],
    images: media.images.outlook,
  },
  {
    id: 7,
    slug: 'recup-st-reader',
    nameKey: 'projects.recupSt.title',
    descKey: 'projects.recupSt.description',
    fullDescKey: 'projects.recupSt.fullDescription',
    repoKey: 'projects.recupSt.repository',
    techStack: ['python', 'qt', 'json', 'pyautogui'],
    videos: [
      {
        src: media.videos.recupSt[0],
        descKey: 'projects.recupSt.videos.automation'
      }
    ],
    images: media.images.recupSt,
  },
  {
    id: 8,
    slug: 'jp-typer',
    nameKey: 'projects.jpTyper.title',
    descKey: 'projects.jpTyper.description',
    fullDescKey: 'projects.jpTyper.fullDescription',
    repoKey: 'projects.jpTyper.repository',
    techStack: ['python', 'qt'],
    images: media.images.jpTyper,
  },
  {
    id: 9,
    slug: 'enade-simulado',
    nameKey: 'projects.enadeMockup.title',
    descKey: 'projects.enadeMockup.description',
    fullDescKey: 'projects.enadeMockup.details',
    repoKey: 'projects.enadeMockup.repository',
    showLiveDemo: true,
    liveDemoUrl: 'https://pmi-p1.vercel.app/',
    techStack: ['html', 'css', 'javascript'],
    images: media.images.enade,
  },
];
