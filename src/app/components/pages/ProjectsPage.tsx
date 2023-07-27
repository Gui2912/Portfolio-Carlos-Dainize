import React from "react";
import { Card, Section } from "..";

const ProjectsPage = () => {
    return (
        <Section className="items-start" id="projects">
            <article className="flex flex-col w-full justify-start">
                <h2 className="font-bold text-5xl">Projects</h2>
                <p className="text-gray-400 text-xl">
                    Some of o my best projects
                </p>
                <ul className='my-5 flex flex-col gap-10'>
                    <Card />
                </ul>
            </article>
        </Section>
    );
};

export default ProjectsPage;
