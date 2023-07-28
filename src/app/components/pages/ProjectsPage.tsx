import React from "react";
import { Button, Card, Section } from "..";
import Link from "next/link";

const ProjectsPage = () => {
    return (
        <Section className="items-start" id="projects">
            <article className="flex flex-col w-full justify-start">
                <h2 className="font-bold text-5xl">Projetos</h2>
                <p className="text-gray-400 text-xl">
                    Alguns dos meus projetos
                </p>
                <ul className="my-5 flex flex-col gap-10 mb-14">
                    <Card />
                </ul>

                <Link
                    rel="stylesheet"
                    target="_blank"
                    href={"https://github.com/Gui2912?tab=repositories"}
                    className="p-6 w-max font-bold bg-primary text-white hover:bg-violet-500 rounded-md"
                >
                    Ver todos projetos
                </Link>
            </article>
        </Section>
    );
};

export default ProjectsPage;
