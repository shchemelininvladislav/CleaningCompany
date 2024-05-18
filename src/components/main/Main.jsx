import React from "react";
import Header from "./Header";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";
import "../../css/styles.css";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <main className="Main-content">
        <Services />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Main;