import {
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoPostgresql,
    BiLogoCss3,
    BiLogoJavascript,
} from "react-icons/bi";
import {
    SiNextdotjs,
    SiTypescript,
    SiStyledcomponents,
    SiExpress,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

interface ITechnologies {
    techName: string;
    icon: any;
}

const Technologies: ITechnologies[] = [
    {
        icon: AiFillHtml5,
        techName: "HTML5",
    },
    {
        icon: BiLogoCss3,
        techName: "CSS",
    },
    {
        icon: BiLogoJavascript,
        techName: "JavaScript",
    },
    {
        icon: SiTypescript,
        techName: "Typescript",
    },
    {
        icon: BiLogoReact,
        techName: "React",
    },

    {
        icon: SiNextdotjs,
        techName: "Next.js",
    },
    {
        icon: BiLogoTailwindCss,
        techName: "TailwindCss",
    },
    {
        icon: SiStyledcomponents,
        techName: "Styledcomponents",
    },
    {
        icon: FaBootstrap,
        techName: "Bootstrap",
    },
    {
        icon: BiLogoPostgresql,
        techName: "PostgreSQL",
    },
    {
        icon: SiExpress,
        techName: "Express",
    },

];

export default Technologies;
