"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    className: string;
    id?: string;
}

const Section = ({ className, children, id }: SectionProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, x: -200, scale: 1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
            id={id}
            className={`${className} pt-12 px-4 min-h-screen w-full flex max-w-5xl z-20 items-center flex-col`}
        >
            {children}
        </motion.section>
    );
};

export default Section;
