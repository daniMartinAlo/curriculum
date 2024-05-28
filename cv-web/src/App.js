import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './components/Home';
import Exp from './components/Exp';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App d-flex">
      <nav className="d-none d-md-block bg-dark sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <ScrollLink className="nav-link text-white" to="home" smooth={true} duration={500}>
                Inicio
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link text-white" to="Exp" smooth={true} duration={500}>
                Experiencia laboral
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link text-white" to="educacion" smooth={true} duration={500}>
                Educación
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link text-white" to="skills" smooth={true} duration={500}>
                Habilidades
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
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
