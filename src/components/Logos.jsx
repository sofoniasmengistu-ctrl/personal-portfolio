import { Reveal } from './Reveal';

const logos = [
  { name: 'Addis Telco', note: 'Current · Cloud Platform Architect' },
  { name: 'WeRemoteIT', note: 'My company' },
  { name: 'AuraPay', note: 'My company' },
  { name: 'Gebeya', note: 'DevOps Engineer' },
  { name: 'Safaricom', note: 'TKG assignment' },
  { name: 'Tefer', note: 'Cloud DevOps' },
  { name: 'Upwork', note: '11+ Azure data' },
  { name: 'JSI', note: 'IT Specialist' },
  { name: 'ECX', note: 'Network specialist' },
  { name: 'Custor', note: 'Junior programmer' },
  { name: 'GIZ', note: 'Cloud trainer' },
  { name: 'KodeKloud', note: 'Senior DevOps' },
  { name: 'CNCF', note: 'Kubestronaut' },
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
