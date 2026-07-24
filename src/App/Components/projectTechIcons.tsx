import { IconType } from 'react-icons';
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiPandas,
  SiPython,
  SiQt,
  SiReact,
  SiSqlite,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { BsFiletypeJson, BsFiletypeXml } from 'react-icons/bs';
import { ProjectTech } from '../../data/projects';

interface TechIconDefinition {
  label: string;
  icon: IconType;
}

export const techIconMap: Record<ProjectTech, TechIconDefinition> = {
  python: { label: 'Python', icon: SiPython },
  qt: { label: 'Qt', icon: SiQt },
  pandas: { label: 'Pandas', icon: SiPandas },
  xml: { label: 'XML', icon: BsFiletypeXml },
  java: { label: 'Java', icon: FaJava },
  sqlite: { label: 'SQLite', icon: SiSqlite },
  json: { label: 'JSON', icon: BsFiletypeJson },
  html: { label: 'HTML5', icon: SiHtml5 },
  css: { label: 'CSS3', icon: SiCss },
  javascript: { label: 'JavaScript', icon: SiJavascript },
  typescript: { label: 'TypeScript', icon: SiTypescript },
  react: { label: 'React', icon: SiReact },
  vite: { label: 'Vite', icon: SiVite },
};
