import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./componets/header";
import "./App.css";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Achievement from "./componets/Achievement";
import EventShowcase from "./componets/EventShowcase";
import EventShowcaseTwo from "./componets/EventShowcase2";
import EventSection from "./componets/EventSection";
import Team from "./componets/Team";
import DynamicLeadership from "./componets/DynamicLeadership";
import Footer from "./componets/Footer";
import OpportunitiesCTA from "./componets/OpportunitiesCTA";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OpportunitiesCTA />
      <About />
      <Achievement />
      <EventShowcase />
      <EventShowcaseTwo />
      <EventSection />
      <DynamicLeadership />
      <Footer />
    </>
  );
}

export default App;
