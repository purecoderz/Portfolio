import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import { Testimony } from "./components/Testimony";
import Credentials from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      {/* <Testimony /> */}
      <Credentials />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
