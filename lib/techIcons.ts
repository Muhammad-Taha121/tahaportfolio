import type { IconType } from "react-icons";
import {
  SiExpress,
  SiFormik,
  SiGit,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbShieldCheck } from "react-icons/tb";

const techIcons: Record<string, IconType> = {
  React: SiReact,
  "React 19": SiReact,
  "Next.js": SiNextdotjs,
  "Next.js 14": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  "MongoDB Atlas": SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  "REST APIs": TbApi,
  Git: SiGit,
  JWT: SiJsonwebtokens,
  Formik: SiFormik,
  Yup: TbShieldCheck,
};

export function getTechIcon(name: string): IconType | undefined {
  return techIcons[name];
}
