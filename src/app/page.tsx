import { AboutPage, Header, HomePage } from "@/components";
import React from "react";

const Home = () => {
    return (
        <main className="flex items-center flex-col">
            <Header />
            <HomePage />
            <AboutPage />
        </main>
    );
};

export default Home;
