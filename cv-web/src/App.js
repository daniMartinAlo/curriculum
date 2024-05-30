import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './components/Home';
import Exp from './components/Exp';
import Education from './components/Education';
import Skills from './components/Skills';
import profilePhoto from './assets/img/profilePhoto.jpg';
import './App.css';

function App() {
  return (
    <div className="App d-flex">
      <nav className="d-none d-md-block bg-dark sidebar">
        <div className="sidebar-sticky">
          <div className="profile text-center p-1">
            <img src={profilePhoto} alt="" className="img-fluid rounded-circle mb-2 profile-img" />
            <h1 className="text-light p-1">Daniel Martin</h1>
            <div className="social-links mt-1">
              <a href="https://github.com/daniMartinAlo" target="_blank" rel="noreferrer" className="social-icon"><i className="bx bxl-github"></i></a>
              <a href="https://www.linkedin.com/in/daniel-martin-alonso-408076226" target="_blank" rel="noreferrer" className="social-icon"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="home" smooth={true} duration={500}>
              <i class="bx bx-user"></i> Sobre mi
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="Exp" smooth={true} duration={500}>
              <i className="bx bx-briefcase"></i> Experiencia laboral
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="educacion" smooth={true} duration={500}>
              <i className="bx bx-file-blank"></i> Educación
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="skills" smooth={true} duration={500}>
              <i className="bx bx-book-content"></i> Habilidades
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <main className="px-4">
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
