import React from "react";
import { Section } from "@/components";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsWhatsapp, BsArrowDown,BsArrowDownCircleFill } from "react-icons/bs";

const HomePage = () => {
    return (
        <div className="relative flex w-full">
            <div className="w-2/4 bg-[#ebefff] h-screen absolute left-0 z-10"></div>
            <div className="w-full z-20 flex justify-center">
                <Section className="justify-center">
                    <div className="flex items-center flex-col">
                        <p className="text-primary font-bold text-2xl">
                            Hey! I am
                        </p>
                        <h1 className="text-[60px] font-bold text-center">
                            Carlos Dainize
                        </h1>
                        <div className="items-center w-full flex flex-col justify-center">
                            <div className="w-full text-center flex justify-center">
                                <h2 className="text-primary font-bold underline text-3xl type-write-effect border-gray-400 border-r-4 mb-8">
                                    Front end developer.
                                </h2>
                            </div>
                            <div className="flex gap-4 justify-center w-full md:w-max mt-6  md:mt-0">
                                <Link href={"https://github.com/Gui2912"}>
                                    <BsGithub className="text-black text-5xl hover:text-orange-500" />
                                </Link>
                                <Link
                                    href={
                                        "https://www.linkedin.com/in/carlos-dainize/"
                                    }
                                >
                                    <BsLinkedin className="text-primary text-5xl hover:text-black" />
                                </Link>
                                <Link
                                    href={
                                        "https://api.whatsapp.com/send?phone=5519992530418&text=Ol%C3%A1%20Carlos,%20vim%20do%20seu%20portfolio"
                                    }
                                    id="about"
                                >
                                    <BsWhatsapp className="text-green-500 text-5xl hover:text-yellow-400" />
                                </Link>
                            </div>
                            <div className="flex mt-12 relative">
                                <BsArrowDownCircleFill className="text-2xl absolute left-[40%] top-[25%] arrow text-primary" />

                                <div className="triangle-left"></div>

                                <div className="triangle-right"></div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default HomePage;
