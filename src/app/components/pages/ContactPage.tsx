"use client";
import React from "react";
import { Section } from "..";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { contacts } from "@/app/utils";

const ContactPage = () => {
    return (
        <Section className="relative" id="contact">
            <h2 className="text-start w-full font-bold text-5xl">Contatos</h2>
            <p className="text-xl text-gray-400 my-5">
                Obrigado por chegar até aqui! Sinta-se a vontade para entrar em contato em qualquer um desses meios, estou aberto a vagas front end PJ, CLT ou freelances(temporário)
            </p>
            <ul className="flex justify-between w-full h-32 mt-20">
                {contacts.map((elt, index) => (
                    <Link
                        target='_blank'
                        key={index}
                        href={elt.link}
                        className="rounded-lg  shadow-md text-2xl min-w-[30%] h-[ful]"
                    >
                        <li className="text-5xl hover:bg-secondary hover:text-primary h-full w-full flex justify-center items-center">
                            {<elt.icon />}
                        </li>
                    </Link>
                ))}
            </ul>
            <div className="absolute bottom-0 h-1/5 bg-primary w-[98vw] flex justify-center items-start">
                <LinkScroll
                    to={"home"}
                    smooth={true}
                    spy={true}
                    offset={-30}
                    className="text-3xl bg-transparent text-secondary relative bg:text-violet-500"
                >
                    <BsFillArrowUpCircleFill className="absolute top-[-15px]" />
                </LinkScroll>
            </div>
        </Section>
    );
};

export default ContactPage;
