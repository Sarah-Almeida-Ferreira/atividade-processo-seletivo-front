import React from "react";
import Header from "./components/Header.js";
import ServicePage from "../src/pages/servicePage.js";
import HomePage from "../src/pages/HomePage.js";
import Sobre from "../src/pages/AboutPage.js";
import ContactSection from "../src/pages/ContactPage.js";
import Footer from "../src/components/Footer.js";
import "./styles/body.scss";
import BanhoETosa from "./pages/BanhoETosaPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceLandingPage from "./pages/ServiceLandingPage.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="section">
                  <HomePage />
                </section>
                <section id="sobre" className="section">
                  <Sobre />
                </section>
                <section id="servicos" className="section">
                  <ServicePage />
                  <br />
                  <br />
                  <BanhoETosa />
                  <br />
                  <br />
                  <ContactSection />
                  <br />
                  <br />
                </section>
              </>
            }
          />
          <Route path="/servicos/:id" element={<ServiceLandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
