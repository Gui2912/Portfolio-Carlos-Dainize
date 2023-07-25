import { Section } from "@/components";
import React from "react";

interface AboutInfos {
    label: string;
    information: string;
}

const aboutInformations: AboutInfos[] = [
    {
        label: "Name",
        information: "Carlos Guilherme de Souza Dainize",
    },
    {
        label: "Age",
        information: "23",
    },
    {
        label: "City",
        information: "Mogi Mirim, SP, Brazil",
    },
    {
        label: "Address",
        information: "Rua Alberto Misságlia, 86",
    },

    {
        label: "Zip code",
        information: "13807-683",
    },
    {
        label: "Email",
        information: "dainize22@gmail.com",
    },
    {
        label: "Phone",
        information: "+5519992530418"
    }
];

const AboutPage = () => {
    return (

            <Section className="">
                <h2 className="text-start w-full font-bold text-5xl">
                    About-me
                </h2>
                <p className="text-xl text-gray-400 my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis saepe laborum deleniti distinctio ea officia
                    incidunt nulla blanditiis, dolorum reprehenderit libero esse
                    dolores autem, porro nisi excepturi ut. Odio, minima!
                </p>
                <article>
                    <ul>
                        {aboutInformations.map((elt, index) => (
                            <li className='flex gap-3' key={index}>
                                <h3 className='font-bold'>{elt.label}</h3>
                                <p>{elt.information}</p>
                            </li>
                        ))}
                    </ul>
                </article>
            </Section>

    );
};

export default AboutPage;
