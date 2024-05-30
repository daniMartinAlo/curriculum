import React from 'react';

const Skills = () => {
  return (
    <section id="skills-bg" className="my-5">
      <div className="container">
        <div className="section-title">
          <h2>Habilidades</h2>
          <hr style={{ borderTop: '4px solid #007bff', width: '50px', margin: '15px 0', marginLeft: '0' }} />
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

            <p className='mb-0 custom-bold'>JavaScript / TypeScript</p>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>

            <p className='mb-0 custom-bold'>SQL</p>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <p className='mb-0 custom-bold'>React / Next</p>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>

            <p className='mb-0 custom-bold'>GitHub / Bitbucket</p>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>

            <p className='mb-0 custom-bold'>Java</p>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>

            <p className='mb-0 custom-bold'>Python</p>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
