import React from 'react';

const Education = () => {
  const education = {
    formacionReglada: [
      {
        title: "Grado Superior Desarrollo de Aplicaciones Multiplataforma",
        duration: "09/2021 - 06/2023",
        center: "CampusFP Alcalá",
        details: ["Alcalá de Henares, Madrid"]
      },
      {
        title: "Certificado de Profesionalidad Programación en Lenguajes Estructurados y Aplicaciones de Gestión",
        duration: "09/2020 - 07/2021",
        center: "Instituto Europeo Render",
        details: ["Vicálvaro, Madrid"]
      },
      {
        title: "Bachillerato Tecnológico",
        duration: "09/2018 - 06/2020",
        center: "IES Las Lagunas",
        details: ["Rivas Vaciamadrid, Madrid"]
      }
    ],
    formacionNoReglada: [
      {
        title: "Web Development with Python",
        duration: "03/2024 - 05/2024",
        center: "IBM",
        details: ["Madrid, España"],
        credential: "https://www.credly.com/badges/ff26ff81-dab8-4b15-9aad-20199a30ef8a/linked_in_profile?trk=public_profile_see-credential"
      },
      {
        title: "Gestión de Proyectos y Fundamentos de la Metodología Agile",
        duration: "05/2024",
        center: "Santander Open Academy",
        details: ["Madrid, España"]
      },
      {
        title: "Curso React, Node, Express y MongoDB",
        duration: "04/2023",
        center: "Udemy",
        details: ["Madrid, España"],
        credential: "https://www.udemy.com/certificate/UC-5e711401-6cca-45e1-b07b-51952b0396ca/?trk=public_profile_see-credential"
      },
      {
        title: "Curso de Experto en Reparación y Montaje de Sistemas Microinformáticos",
        duration: "04/2020",
        center: "Academy Formacion",
        details: ["Madrid, España"],
      }
    ]
  };

  return (
    <section id="educacion" className="my-5">
      <div className="container">
        <h2>Educación</h2>
        <hr style={{ borderTop: '4px solid #007bff', width: '50px', margin: '15px 0', marginLeft: '0' }} />
        <div className="row">
          <div className="col-md-6">
            <h3>Formación Reglada</h3>
            <div className="container resume mt-4">
              {education.formacionReglada.map((exp, index) => (
                <div className="resume-item pb-0" key={index}>
                  <h4>{exp.title}</h4>
                  <h5>{exp.duration}</h5>
                  <h6>{exp.center}</h6>
                  <ul>
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h3>Cursos y Certificaciones</h3>
            <div className="container resume mt-4">
              {education.formacionNoReglada.map((exp, index) => (
                <div className="resume-item pb-0" key={index}>
                  <h4>{exp.title}</h4>
                  <h5>{exp.duration}</h5>
                  <h6>{exp.center}</h6>
                  <ul>
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                    {exp.credential && (
                      <a href={exp.credential} className="btn btn-primary mt-1" target="_blank" rel="noopener noreferrer">
                        Ver Credencial
                      </a>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;