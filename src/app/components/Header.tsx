"use client";
import { navLinks } from "../utils";
import Image from "next/image";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from ".";
import { personalImage } from '../assets';

const Header = () => {
    const [active, setActive] = useState("");
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleHamburguer: () => void = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <header className="h-[55px] bg-white shadow-md w-full px-3 flex items-center justify-center fixed top-0 z-50">
            <nav className="max-w-5xl flex items-center justify-between w-full relative">
                <Image src={personalImage} alt="Portfolio Logo" className='w-10 h-10 rounded-full'/>
                <ul className="md:flex hidden gap-6 justify-end">
                    {navLinks.map((elt, index) => (
                        <li key={index} className="capitalize cursor:pointer">
                            <Button className="">
                                <Link
                                    onClick={() => setActive(elt.name)}
                                    className={`hover:text-white hover:bg-primary capitalize h-full p-4 rounded-md`}
                                    to={elt.name}
                                    smooth={true}
                                    spy={true}
                                    offset={-30}
                                >
                                    {elt.name}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden">
                    <Button className="" onClick={handleHamburguer}>
                        {toggleMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </Button>
                    <div
                        className={`${
                            !toggleMenu ? "hidden" : "flex "
                        }  absolute top-10 right-[-20px] w-screen justify-end z-50 h-screen  rounded-xl`}
                    >
                        <ul className="w-2/4 bg-primary flex flex-col gap-8 hamburguer">
                            {navLinks.map((elt, index) => (
                                <li key={index} className="text-center">
                                    <Link
                                        to={elt.name}
                                        smooth={true}
                                        spy={true}
                                        offset={-30}
                                        className={
                                            "capitalize block font-bold text-white"
                                        }
                                        onClick={() => {
                                            setActive(elt.name);
                                            setToggleMenu(!toggleMenu);
                                        }}
                                    >
                                        {elt.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
