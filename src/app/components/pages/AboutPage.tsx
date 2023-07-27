import { Button, Section } from "../../components";
import { Technologies, aboutInformations } from "../../utils";
import React from "react";

const AboutPage = () => {
    return (
        <Section className="" id="about">
            <h2 className="text-start w-full font-bold text-5xl">About-me</h2>
            <p className="text-xl text-gray-400 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis saepe laborum deleniti distinctio ea officia incidunt
                nulla blanditiis, dolorum reprehenderit libero esse dolores
                autem, porro nisi excepturi ut. Odio, minima!
            </p>
            <article className=" w-full">
                <ul className="flex flex-col gap-4 items-start">
                    {aboutInformations.map((elt, index) => (
                        <li className="flex gap-3 items-center" key={index}>
                            <h3 className="font-bold text-xl min-w-[90px]">
                                {elt.label}:{" "}
                            </h3>
                            <p className="text-gray-400 text-xl">
                                {elt.information}
                            </p>
                        </li>
                    ))}
                </ul>
                <p className="text-xl mt-12 mb-6">
                    <span className="text-primary font-bold text-xl">120</span>{" "}
                    Projects completed
                </p>
                <Button className="btn-rounded">Dowload Resume</Button>
            </article>
            <h2 className="w-full text-start text-3xl font-bold my-6">
                Technologies
            </h2>
            <ul className="flex gap-4 flex-nowrap mb-20 w-full overflow-x-scroll relative h-44 scrollbar-thin scrollbar-thumb-primary scrollbar-track-[#EBEFFF]">
                {Technologies.map((elt, index) => (
                    <li
                        key={index}
                        className="rounded-md cursor-pointer min-w-[6rem] w-24 h-24 shadow-xl flex justify-center items-center relative tech-card bg-[#ebefff] hover:bg-gray-800"
                    >
                        <i className="h-full w-full flex items-center text-gray-800 justify-center hover:text-primary">
                            <elt.icon className="text-5xl" />
                        </i>
                        <p className="text-xl font-mono absolute hidden shadow-xl bg-[#fff] p-2 rounded-md text-center bottom-[-50px]">
                            {elt.techName}
                        </p>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default AboutPage;
