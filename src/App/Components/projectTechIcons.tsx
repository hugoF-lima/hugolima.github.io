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

interface BaseTechDefinition {
  label: string;
}

interface TechIconDefinition extends BaseTechDefinition {
  kind: 'icon';
  icon: IconType;
}

interface TechTextDefinition extends BaseTechDefinition {
  kind: 'text';
  text: string;
}

export type TechDefinition = TechIconDefinition | TechTextDefinition;

export const techIconMap: Record<ProjectTech, TechDefinition> = {
  python: { label: 'Python', kind: 'icon', icon: SiPython },
  pyautogui: { label: 'PyAutoGUI', kind: 'text', text: 'pyautogui' },
  qt: { label: 'Qt', kind: 'icon', icon: SiQt },
  pandas: { label: 'Pandas', kind: 'icon', icon: SiPandas },
  xml: { label: 'XML', kind: 'icon', icon: BsFiletypeXml },
  java: { label: 'Java', kind: 'icon', icon: FaJava },
  sqlite: { label: 'SQLite', kind: 'icon', icon: SiSqlite },
  json: { label: 'JSON', kind: 'icon', icon: BsFiletypeJson },
  html: { label: 'HTML5', kind: 'icon', icon: SiHtml5 },
  css: { label: 'CSS3', kind: 'icon', icon: SiCss },
  javascript: { label: 'JavaScript', kind: 'icon', icon: SiJavascript },
  typescript: { label: 'TypeScript', kind: 'icon', icon: SiTypescript },
  react: { label: 'React', kind: 'icon', icon: SiReact },
  vite: { label: 'Vite', kind: 'icon', icon: SiVite },
};
