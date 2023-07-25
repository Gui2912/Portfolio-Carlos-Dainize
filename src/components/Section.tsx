import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className: string;
    id?:string;
    // name?: string;
}

const Section = ({ className, children, id }: SectionProps) => {
    return (
        <section
            id={id}
            // name={name}
            className={`${className} pt-12 px-4 min-h-screen w-full flex max-w-5xl z-20 items-center flex-col`}
        >
            {children}
        </section>
    );
};

export default Section;
