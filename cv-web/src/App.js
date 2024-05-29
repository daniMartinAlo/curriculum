import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Home from "./components/Home";
import Exp from "./components/Exp";
import Education from "./components/Education";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="App d-flex">
      <div className="d-flex flex-column bg-dark sidebar text-white">
        <div className="profile text-center p-3">
          <img
            src="assets/img/profile-img.jpg"
            alt=""
            className="img-fluid rounded-circle mb-3"
          />
          <h1 className="text-light">
            <a href="index.html" className="text-decoration-none text-white">
              Alex Smith
            </a>
          </h1>
          <div className="social-links mt-3">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <ScrollLink
                className="nav-link scrollto text-white"
                to="hero"
                smooth={true}
                duration={500}
              >
                <i className="bx bx-home"></i> <span>Home</span>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link scrollto text-white"
                to="about"
                smooth={true}
                duration={500}
              >
                <i className="bx bx-user"></i> <span>About</span>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link scrollto text-white"
                to="resume"
                smooth={true}
                duration={500}
              >
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link scrollto text-white"
                to="portfolio"
                smooth={true}
                duration={500}
              >
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link scrollto text-white"
                to="services"
                smooth={true}
                duration={500}
              >
                <i className="bx bx-server"></i> <span>Services</span>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link scrollto text-white"
                to="contact"
                smooth={true}
                duration={500}
              >
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Element name="home">
              <Home />
            </Element>
            <Element name="Exp">
              <Exp />
            </Element>
            <Element name="educacion">
              <Education />
            </Element>
            <Element name="skills">
              <Skills />
            </Element>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
