import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavLinks {
    name: string;
    href: string;
}

const navLinks: NavLinks[] = [
    {
        name: "projects",
        href: "#projects",
    },
    {
        name: "about",
        href: "#about",
    },
    {
        name: "resume",
        href: "resume",
    },
    {
        name: "contact",
        href: "contact",
    },
];

function scrollToSection(event:any, sectionRef:any) {
    event.preventDefault();
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
}

const Header = () => {
    return (
        <header className="h-20 bg-white shadow-md w-full px-3 flex items-center justify-center fixed top-0 z-50">
            <nav className="max-w-5xl flex justify-between w-full">
                <Image src="" alt="Portfolio Logo" />

                <ul className="flex gap-5 w-full justify-end">
                    {navLinks.map((elt, index) => (
                        <li key={index}>
                            <Link href={elt.href}>{elt.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
