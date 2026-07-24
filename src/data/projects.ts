import { media } from './media';

export type ProjectTech =
  | 'python'
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
  videos?: Array<{
    src: string;
    descKey: string;
  }>;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'xml-reader',
    nameKey: 'project1',
    descKey: 'project1Desc',
    fullDescKey: 'xmlReaderDesc',
    repoKey: 'xmlReaderRepo',
    techStack: ['python', 'pandas', 'xml', 'qt'],
    videos: [
      {
        src: media.videos.xmlReader[0],
        descKey: 'xmlReaderVid'
      },
      {
        src: media.videos.xmlReader[1],
        descKey: 'xmlReaderVidThree'
      }
    ],
    images: media.images.xmlReader,
  },
  {
    id: 2,
    slug: 'kanji-quiz',
    nameKey: 'project2',
    descKey: 'project2Desc',
    fullDescKey: 'kanjiQuizDesc',
    repoKey: 'kanjiQuizRepo',
    techStack: ['python', 'qt'],
    images: media.images.kanjiQuiz,
  },
  {
    id: 3,
    slug: 'bookstore-system',
    nameKey: 'project3',
    descKey: 'project3Desc',
    fullDescKey: 'bookStoreDesc',
    repoKey: 'bookStoreRepo',
    techStack: ['java', 'sqlite', 'html', 'css'],
    images: media.images.bookStore,
  },
  {
    id: 4,
    slug: 'car-ads-system',
    nameKey: 'project4',
    descKey: 'project4Desc',
    fullDescKey: 'carSystemDesc',
    repoKey: 'carSystemRepo',
    techStack: ['java', 'sqlite'],
    images: media.images.carAd,
  },
  {
    id: 5,
    slug: 'outlook-extractor',
    nameKey: 'project5',
    descKey: 'project5Desc',
    fullDescKey: 'outlookDesc',
    repoKey: 'outlookRepo',
    techStack: ['python', 'qt'],
    videos: [
      {
        src: media.videos.outlook[0],
        descKey: 'outlookVid'
      }
    ],
    images: media.images.outlook,
  },
  {
    id: 6,
    slug: 'recup-st-reader',
    nameKey: 'project6',
    descKey: 'project6Desc',
    fullDescKey: 'recupStDesc',
    repoKey: 'recupStRepo',
    techStack: ['python', 'qt', 'json'],
    videos: [
      {
        src: media.videos.recupSt[0],
        descKey: 'recupStVid'
      }
    ],
    images: media.images.recupSt,
  },
  {
    id: 7,
    slug: 'jp-typer',
    nameKey: 'project7',
    descKey: 'project7Desc',
    fullDescKey: 'jpTyperDesc',
    repoKey: 'jpTyperRepo',
    techStack: ['python', 'qt'],
    images: media.images.jpTyper,
  },
  {
    id: 8,
    slug: 'enade-simulado',
    nameKey: 'project8',
    descKey: 'project8Desc',
    fullDescKey: 'enadeDesc',
    repoKey: 'enadeRepo',
    liveDemoUrl: 'https://pmi-p1.vercel.app/',
    techStack: ['html', 'css', 'javascript'],
    images: media.images.enade,
  },
];
