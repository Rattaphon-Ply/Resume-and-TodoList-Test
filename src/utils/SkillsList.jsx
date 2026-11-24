import {
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiSupabase,
  SiPostman,
  SiNodedotjs,
  SiCypress,
  SiPrisma,
  SiGit,
  SiNestjs,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import vite from "../assets/vite.svg";
import typescript from "../assets/typescript.svg";
import { PythonIcon } from "../components/icons/PythonIcon";

export const skills = [
  // Frontend
  { img: vite, label: "Vite" },
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiReact, color: "#61DAFB", label: "React Native" },
  { Icon: SiNextdotjs, color: "#FFFFFF", label: "Next.js" },
  { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { img: typescript, label: "TypeScript" },
  { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind CSS" },
  { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
  { Icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },

  // Backend & Database
  { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
  { Icon: SiExpress, color: "#FFFFFF", label: "Express.js" },
  { Icon: SiNestjs, color: "#E0234E", label: "NestJS" },
  { Icon: SiPrisma, color: "#FFFFFF", label: "Prisma" },
  { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
  { Icon: SiSupabase, color: "#3ECF8E", label: "Supabase" },

  // Testing, Languages & Tools
  { Icon: SiCypress, color: "#69D3A7", label: "Cypress" },
  { Icon: SiGit, color: "#F05032", label: "Git" },
  { Icon: FaGithub, color: "#FFFFFF", label: "GitHub" },
  { Icon: SiPostman, color: "#FF6C37", label: "Postman" },
  { Icon: PythonIcon, color: "#3776AB", label: "Python" },
  { Icon: TbBrandCSharp, color: "#512BD4", label: "C#" },
];
