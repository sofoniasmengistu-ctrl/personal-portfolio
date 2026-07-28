import { Reveal } from './Reveal';

const logos = [
  { name: 'Gebeya', note: 'Hired as DevOps' },
  { name: 'Safaricom', note: 'Assigned project' },
  { name: 'GIZ', note: 'Cloud trainer' },
  { name: 'KodeKloud', note: 'Senior DevOps' },
  { name: 'CNCF', note: 'Kubestronaut' },
  { name: 'JSI', note: 'IT Specialist' },
  { name: 'ECX', note: 'Network and systems' },
  { name: 'Custor', note: 'Software internship' },
];

const Logos = () => {
  return (
    <section className="logos section--tight" aria-label="Organizations and affiliations">
      <div className="container">
        <Reveal>
          <p className="logos__eyebrow mono">Experience includes</p>
          <div className="logos__track">
            {logos.map((logo) => (
              <div key={logo.name} className="logos__item">
                <span className="logos__name">{logo.name}</span>
                <span className="logos__note">{logo.note}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Logos;
