import React from 'react';
import profileImg from '../assets/img/profilePhoto.jpg';

const Home = () => {
  const myAge = () => {
    var fechaNacimiento = new Date('2002-05-02');
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (
      fechaActual.getMonth() < fechaNacimiento.getMonth() ||
      (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  };

  const age = myAge();

  return (
    <section id="home" className="my-5">
      <div className="container">
        <div className="section-title">
          <h2 className='component-h1'>Sobre mi</h2>
          <hr style={{ borderTop: '4px solid #007bff', width: '50px', margin: '15px 0', marginLeft: '0' }} />
          <p>¡Hola! Mi nombre es Daniel Martín Alonso, un desarrollador que esta comenzando su inserción en el mundo laboral. Desde que tengo memoria, los ordenadores me han fascinado, y cuando descubrí la programación, ¡fue amor a primera vista! Comencé realizando un certificado de profesionalidad centrado en bases de datos y PHP y desde ahi di el salto al Grado Superior DAM donde aprendí otras muchas tecnologías</p>
        </div>

        <div className="row">
          <div className="col-lg-4 mt-3" data-aos="fade-right">
            <img src={profileImg} className="img-fluid about-img" alt="Profile" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>FrontEnd &amp; BackEnd Developer.</h3>
            <p className="fst-italic">
              He trabajado tanto con tecnologías de Front como de Back aunque tengo algo más de experiencia en la parte FrontEnd
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Cumpleaños:</strong> <span>2 de Mayo de 2002</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Teléfono:</strong> <span>+34 622 09 80 68</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Rivas Vaciamadrid, Madrid</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Edad:</strong> <span>{age}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>danielmartinalonso90@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p>
            En mi experiencia laboral, me he enfocado principalmente en el desarrollo utilizando JavaScript y TypeScript, así como en el manejo de frameworks como React y Next.js. Para la gestión de estilos, he empleado CSS, Tailwind y Bootstrap. Poseo habilidades en el uso de herramientas de control de versiones como GitHub o Bitbucket y en la gestión de proyectos a través de aplicaciones como Jira. Además, cuento con experiencia en el manejo de bases de datos SQL y MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

