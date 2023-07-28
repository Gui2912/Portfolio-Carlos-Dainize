import { AboutPage, Header, HomePage } from "./components";
import ContactPage from './components/pages/ContactPage';
import ProjectsPage from "./components/pages/ProjectsPage";
import React from "react";

const Home = () => {
    return (
        <main className="flex items-center flex-col">
            <Header />
            <HomePage />
            <AboutPage />
            <ProjectsPage />
            <ContactPage />
        </main>
    );
};

export default Home;
