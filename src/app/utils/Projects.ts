import { findmyduoImage } from '../assets';

interface Projects {
    title: string;
    description: string;
    deploy: string;
    repository?: string;
    techList: string[];
    image?: any;
}

const myProjects: Projects[] = [


    {
        title: "KenzieBurguer",
        description:
            "Uma hamburgueria virtual onde o cliente pode selecionar seus produtos através de um filtro e adicionar/remover do carrinho de comporas.",
        deploy: "https://hamburgueria-da-kenzie-sigma.vercel.app/",
        repository: "https://github.com/Gui2912/KenzieBurguer",
        techList: ["Styled-components", "React"],
    },
    {
        title: "NuKenzie",
        description:
            "Esse projeto visa um controle financeiro do usuário de maneira simples e minimalista.",
        deploy: "https://nu-kenzie-taupe-nine.vercel.app/",
        repository: "https://github.com/Gui2912/react-entrega-s1-nu-kenzie-Gui2912",
        techList: ["Styled-components", "React"],
    },
    {
        title: "FrontEmpresas",
        description:
            "Meu projeto final do segundo módulo na KenzieAcademy feito em JavaScript Vanilla (ES6) onde coloquei em prática permissões de login, integração com API e CSS avançado.",
        deploy: "",
        repository:
            "https://github.com/Kenzie-Academy-Brasil-Developers/m2-projeto-frotend-empresas-Gui2912",
        techList: ["JavaScript", "HTML", "CSS"],
    },
    {
        title: "FindMyDuo",
        description:
            "Uma plataforma para conectar players a possíveis duos em seus jogos favoritos",
        deploy: "https://projeto-findmyduo.vercel.app/",
        repository: "https://github.com/FindMyDuo/projeto-findmyduo",
        techList: ["Styled-Components", "React", "TypeScript"],

    },
];

export { myProjects };
