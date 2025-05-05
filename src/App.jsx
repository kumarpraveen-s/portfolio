import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import useScrollSpy from "react-use-scrollspy";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
    const sectionIds = ["home", "about", "education", "projects", "contact"];
    const sectionRefs = sectionIds.map(() => useRef(null));

    const activeSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: -80,
    });

    return (
        <BrowserRouter>
            <NavBar sectionRefs={sectionRefs} activeSection={activeSection} />
            <LandingPage ref={sectionRefs[0]} />
            <About ref={sectionRefs[1]} />
            <Experience ref={sectionRefs[2]} />
            <Projects ref={sectionRefs[3]} />
            <Contact ref={sectionRefs[4]} />
        </BrowserRouter>
    );
}

export default App;
