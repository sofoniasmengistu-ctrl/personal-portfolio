const highlights = [
  'Kubestronaut',
  'Azure all certs',
  'AWS Cloud Engineer',
  'CCNA, CCNP, Security',
  'Kubernetes',
  'EKS, GKE, AKS',
  'Infomaniak, Linode',
  'Terraform',
  'AWS, Azure, GCP',
  'Python, Go',
  'CI/CD and DevSecOps',
  'Networking',
  'Data and MLOps',
];

const Skills = () => {
  return (
    <section id="skills" className="section section--tight">
      <div className="container">
        <p className="section__label">07 Craft</p>
        <h2 className="section__title">
          Selected <span className="text-gradient">capabilities</span>
        </h2>
        <p className="section__lead">
          A short list. Full certifications live in the CV and Credly.
        </p>

        <div className="skills__chips">
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
