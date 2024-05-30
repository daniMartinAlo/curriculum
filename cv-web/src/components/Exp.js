import React from 'react';

const Exp = () => {
  const experiences = [
    {
      company: "Avantgarde IT",
      position: "Desarrollador FrontEnd",
      duration: "07/2023 - 02/2024",
      description: "Alcobendas, Madrid",
      details: ["Creación de proyecto desde inicio con Jira.", "Reuniones con el cliente y el maquetador", "Proyecto realizado con NextJS, TypeScript y Tailwind.", "Uso de Bitbucket.", "Conexiones con Api.", "Integración de login con Azure.", "Uso de librerias como Zustando o i18n"]
    },
    {
      company: "Avantgarde IT",
      position: "Prácticas FrontEnd",
      duration: "03/2023 - 06/2023",
      description: "Alcobendas, Madrid",
      details: ["Iniciación con la IA.", "Desarrollo de páginas web con React y TypeScript.", "Implementación de reproductores de audio y video."]
    }
  ];

  return (
    <section id="experiencia" className="my-5">
      <div className="container">
        <h2>Experiencia laboral</h2>
        <hr style={{ borderTop: '4px solid #007bff', width: '50px', margin: '15px 0', marginLeft: '0' }} />
        <div className="container resume">
          {experiences.map((exp, index) => (
            <div className="resume-item pb-0" key={index}>
              <h4>{exp.company}</h4>
              <h5>{exp.position} - {exp.duration}</h5>
              <p><em>{exp.description}</em></p>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Exp;