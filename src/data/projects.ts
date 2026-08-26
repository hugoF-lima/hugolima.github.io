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
    caseStudy: {
      baseKey: 'projects.ankiWeaver',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.ankiWeaver.problem.title',
        descriptionKey: 'projects.ankiWeaver.problem.description',
      },
      solution: {
        titleKey: 'projects.ankiWeaver.solution.title',
        descriptionKey: 'projects.ankiWeaver.solution.description',
        itemsKey: 'projects.ankiWeaver.solution.items',
      },
      technologies: {
        titleKey: 'projects.ankiWeaver.technologies.title',
      },
      results: {
        titleKey: 'projects.ankiWeaver.results.title',
        metricsKey: 'projects.ankiWeaver.results.metrics',
        itemsKey: 'projects.ankiWeaver.results.items',
      },
      limitations: {
        titleKey: 'projects.ankiWeaver.limitations.title',
        descriptionKey: 'projects.ankiWeaver.limitations.description',
      },
    },
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
    caseStudy: {
      baseKey: 'projects.kanjiQuiz',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.kanjiQuiz.problem.title',
        descriptionKey: 'projects.kanjiQuiz.problem.description',
      },
      solution: {
        titleKey: 'projects.kanjiQuiz.solution.title',
        descriptionKey: 'projects.kanjiQuiz.solution.description',
        itemsKey: 'projects.kanjiQuiz.solution.items',
      },
      technologies: {
        titleKey: 'projects.kanjiQuiz.technologies.title',
      },
      results: {
        titleKey: 'projects.kanjiQuiz.results.title',
        metricsKey: 'projects.kanjiQuiz.results.metrics',
        itemsKey: 'projects.kanjiQuiz.results.items',
      },
      limitations: {
        titleKey: 'projects.kanjiQuiz.limitations.title',
        descriptionKey: 'projects.kanjiQuiz.limitations.description',
      },
    },
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
    caseStudy: {
      baseKey: 'projects.bookStore',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.bookStore.problem.title',
        descriptionKey: 'projects.bookStore.problem.description',
      },
      solution: {
        titleKey: 'projects.bookStore.solution.title',
        descriptionKey: 'projects.bookStore.solution.description',
        itemsKey: 'projects.bookStore.solution.items',
      },
      technologies: {
        titleKey: 'projects.bookStore.technologies.title',
      },
      results: {
        titleKey: 'projects.bookStore.results.title',
        metricsKey: 'projects.bookStore.results.metrics',
        itemsKey: 'projects.bookStore.results.items',
      },
      limitations: {
        titleKey: 'projects.bookStore.limitations.title',
        descriptionKey: 'projects.bookStore.limitations.description',
      },
    },
    images: media.images.bookStore,
  },
  {
    id: 5,
    slug: 'natsu-matsuri-site',
    nameKey: 'projects.natsuMatsuri.title',
    descKey: 'projects.natsuMatsuri.description',
    fullDescKey: 'projects.natsuMatsuri.fullDescription',
    repoKey: 'projects.natsuMatsuri.repository',
    techStack: ['react', 'typescript'],
    caseStudy: {
      baseKey: 'projects.natsuMatsuri',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.natsuMatsuri.problem.title',
        descriptionKey: 'projects.natsuMatsuri.problem.description',
      },
      solution: {
        titleKey: 'projects.natsuMatsuri.solution.title',
        descriptionKey: 'projects.natsuMatsuri.solution.description',
        itemsKey: 'projects.natsuMatsuri.solution.items',
      },
      technologies: {
        titleKey: 'projects.natsuMatsuri.technologies.title',
      },
      results: {
        titleKey: 'projects.natsuMatsuri.results.title',
        metricsKey: 'projects.natsuMatsuri.results.metrics',
        itemsKey: 'projects.natsuMatsuri.results.items',
      },
      limitations: {
        titleKey: 'projects.natsuMatsuri.limitations.title',
        descriptionKey: 'projects.natsuMatsuri.limitations.description',
      },
    },
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
    caseStudy: {
      baseKey: 'projects.outlookExtractor',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.outlookExtractor.problem.title',
        descriptionKey: 'projects.outlookExtractor.problem.description',
      },
      solution: {
        titleKey: 'projects.outlookExtractor.solution.title',
        descriptionKey: 'projects.outlookExtractor.solution.description',
        itemsKey: 'projects.outlookExtractor.solution.items',
      },
      technologies: {
        titleKey: 'projects.outlookExtractor.technologies.title',
      },
      results: {
        titleKey: 'projects.outlookExtractor.results.title',
        metricsKey: 'projects.outlookExtractor.results.metrics',
        itemsKey: 'projects.outlookExtractor.results.items',
      },
      limitations: {
        titleKey: 'projects.outlookExtractor.limitations.title',
        descriptionKey: 'projects.outlookExtractor.limitations.description',
      },
    },
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
    caseStudy: {
      baseKey: 'projects.recupSt',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.recupSt.problem.title',
        descriptionKey: 'projects.recupSt.problem.description',
      },
      solution: {
        titleKey: 'projects.recupSt.solution.title',
        descriptionKey: 'projects.recupSt.solution.description',
        itemsKey: 'projects.recupSt.solution.items',
      },
      technologies: {
        titleKey: 'projects.recupSt.technologies.title',
      },
      results: {
        titleKey: 'projects.recupSt.results.title',
        metricsKey: 'projects.recupSt.results.metrics',
        itemsKey: 'projects.recupSt.results.items',
      },
      limitations: {
        titleKey: 'projects.recupSt.limitations.title',
        descriptionKey: 'projects.recupSt.limitations.description',
      },
    },
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
    caseStudy: {
      baseKey: 'projects.jpTyper',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.jpTyper.problem.title',
        descriptionKey: 'projects.jpTyper.problem.description',
      },
      solution: {
        titleKey: 'projects.jpTyper.solution.title',
        descriptionKey: 'projects.jpTyper.solution.description',
        itemsKey: 'projects.jpTyper.solution.items',
      },
      technologies: {
        titleKey: 'projects.jpTyper.technologies.title',
      },
      results: {
        titleKey: 'projects.jpTyper.results.title',
        metricsKey: 'projects.jpTyper.results.metrics',
        itemsKey: 'projects.jpTyper.results.items',
      },
      limitations: {
        titleKey: 'projects.jpTyper.limitations.title',
        descriptionKey: 'projects.jpTyper.limitations.description',
      },
    },
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
    caseStudy: {
      baseKey: 'projects.enadeMockup',
      sectionOrder: ['problem', 'solution', 'technologies', 'results', 'limitations', 'showcase'],
      problem: {
        titleKey: 'projects.enadeMockup.problem.title',
        descriptionKey: 'projects.enadeMockup.problem.description',
      },
      solution: {
        titleKey: 'projects.enadeMockup.solution.title',
        descriptionKey: 'projects.enadeMockup.solution.description',
        itemsKey: 'projects.enadeMockup.solution.items',
      },
      technologies: {
        titleKey: 'projects.enadeMockup.technologies.title',
      },
      results: {
        titleKey: 'projects.enadeMockup.results.title',
        metricsKey: 'projects.enadeMockup.results.metrics',
        itemsKey: 'projects.enadeMockup.results.items',
      },
      limitations: {
        titleKey: 'projects.enadeMockup.limitations.title',
        descriptionKey: 'projects.enadeMockup.limitations.description',
      },
    },
    images: media.images.enade,
  },
];
