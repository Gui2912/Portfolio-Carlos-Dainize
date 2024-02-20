import React from "react";
import { Section } from "../../components";
import Link from "next/link";
import {
    BsLinkedin,
    BsGithub,
    BsWhatsapp,
    BsArrowDown,
    BsArrowDownCircleFill,
} from "react-icons/bs";
import { contacts } from "../../utils";

const HomePage = () => {
    return (
        <div className="relative flex w-full" id='home'>
            <div className="w-2/4 bg-[#ebefff] h-screen absolute left-0 z-10"></div>
            <div className="w-full z-20 flex justify-center">
                <Section className="justify-center">
                    <div className="flex items-center flex-col">
                        <p className="text-primary font-bold text-2xl">
                            Olá! eu sou
                        </p>
                        <h1 className="text-[60px] font-bold text-center">
                            Carlos Dainize
                        </h1>
                        <div className="items-center w-full flex flex-col justify-center">
                            <div className="w-full text-center flex justify-center">
                                <h2 className="text-primary font-bold underline text-3xl type-write-effect border-gray-400 border-r-4 mb-8 font-mono">
                                    Full Stack developer.
                                </h2>
                            </div>
                            <div className="flex gap-4 justify-center w-full md:w-max mt-6  md:mt-0">
                                {contacts.map((elt, index) => (
                                    <>
                                        <Link href={elt.link} target="_blank">
                                            {
                                                <elt.icon className="text-black text-5xl hover:first-of-type:text-primary" />
                                            }
                                        </Link>
                                    </>
                                ))}
                            </div>
                            <div className="flex mt-12 relative">
                                <BsArrowDownCircleFill className="text-2xl absolute left-[40%] top-[30%] arrow text-primary" />

                                <div className="triangle-left" />

                                <div className="triangle-right" />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default HomePage;
