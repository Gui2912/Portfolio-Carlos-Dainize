import { myProjects } from "../utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGit } from "react-icons/bs";
import { RxVercelLogo } from "react-icons/rx";

const Card = () => {
    return (
        <>
            {myProjects.map((elt, index) => (
                <li key={index} className="md:flex">
                    <div className="w-full">
                        <h3 className="font-bold text-xl">{elt.title}</h3>
                        <div className="md:flex gap-5 flex-wrap items-center my-3">
                            <p className="text-gray-400 text-lg font-mono">
                                Languages:
                            </p>
                            {elt.techList.map((elt, index) => (
                                <span
                                    key={index}
                                    className="bg-secondary rounded-md first-of-type:ml-0 ml-5 md:ml-0 p-1 text-center text-primary hover:text-secondary hover:bg-primary cursor-default"
                                >
                                    {elt}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 h-max mb-4 max-h-[96px] md:overflow-hidden overflow-y-scroll">
                            {elt.description}
                        </p>
                        <div className='flex items-center gap-5'>
                            {elt.deploy && (
                                <span className='flex items-center gap-3 hover:text-primary hover:font-bold'>
                                    <RxVercelLogo />
                                    <Link href={elt.deploy} target='_blank'>
                                        Deploy
                                    </Link>
                                </span>
                            )}
                            {elt.repository && (
                                <span className='flex items-center gap-3 hover:text-orange-500 hover:font-bold'>
                                    <BsGit />
                                    <Link href={elt.repository} target='_blank'>
                                        Repository
                                    </Link>
                                </span>
                            )}
                        </div>
                    </div>
                    {elt.image && (
                        <figure className="md:flex hidden w-2/4 justify-center relative items-center rounded-md">
                            <Image
                                src={elt.image}
                                className="h-full hidden md:block md:full relative lg:w-4/5 rounded-md"
                                alt="Project image"
                            />
                        </figure>
                    )}
                </li>
            ))}
        </>
    );
};

export default Card;
