import { AboutPage, Header, HomePage } from "./components";
import ProjectsPage from "./components/pages/ProjectsPage";
import React from "react";

const Home = () => {
    return (
        <main className="flex items-center flex-col">
            <Header />
            <HomePage />
            <AboutPage />
            <ProjectsPage />
        </main>
    );
};

export default Home;
