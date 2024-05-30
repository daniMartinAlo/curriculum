import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="my-5">
      <div className="container">
        <div className="section-title">
          <h2>Habilidades</h2>
          <p>A continuación, se presentan algunas de mis habilidades más destacadas en el ámbito de la programación. Sin embargo, es importante señalar que existen otras habilidades adicionales que no han sido resaltadas en esta tabla.</p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <p className='mb-0 custom-bold'>HTML</p>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
            </div>

            <p className='mb-0 custom-bold'>CSS / Tailwind / Bootstrap</p>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
