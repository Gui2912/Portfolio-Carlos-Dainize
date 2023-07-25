import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className: string;
}

const Section = ({ className, children }: SectionProps) => {
    return (
        <section
            className={`${className} pt-12 min-h-screen w-full flex max-w-5xl z-20 items-center flex-col`}
        >
            {children}
        </section>
    );
};

export default Section;
