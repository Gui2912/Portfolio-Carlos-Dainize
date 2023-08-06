import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

interface Contacts {
    link: string;
    icon: any;
}

const contacts: Contacts[] = [
    {
        link: "https://www.linkedin.com/in/carlos-dainize/",
        icon: BsLinkedin,
    },
    {
        link: "https://github.com/Gui2912",
        icon: BsGithub,
    },
    {
        link: "https://api.whatsapp.com/send?phone=5519992530418&text=Ol%C3%A1%20Carlos,%20vim%20do%20seu%20portfolio",
        icon: BsWhatsapp,
    },
];

export default contacts