const highlights = [
  'Kubestronaut',
  '12× Azure',
  'AWS Architect',
  'Cisco Security',
  'Kubernetes',
  'Terraform',
  'AWS · Azure · GCP',
  'Python · Go',
  'CI/CD · DevSecOps',
  'Networking',
];

const Skills = () => {
  return (
    <section id="skills" className="section section--tight">
      <div className="container">
        <p className="section__label">04 — Craft</p>
        <h2 className="section__title">
          Selected <span className="text-gradient">capabilities</span>
        </h2>
        <p className="section__lead">
          A short list. Full certifications and stack details are in the CV.
        </p>

        <div className="skills__chips skills__chips--curated">
          {highlights.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
