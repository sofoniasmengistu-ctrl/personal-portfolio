import { MoveRight } from 'lucide-react';
import { Reveal } from './Reveal';

const needs = [
  'Cloud Platform Architect',
  'DevOps Engineer',
  'Kubernetes',
  'DevSecOps / SRE',
  'Azure Data Engineer',
  'Consulting or build',
];

/** Thin hire band · keeps #addis-ababa for anchors; replaces tall FirstContact */
const HireStrip = () => {
  return (
    <section
      id="addis-ababa"
      className="hire-strip"
      aria-labelledby="hire-strip-heading"
    >
      <div className="container hire-strip__inner">
        <Reveal className="hire-strip__copy">
          <p className="hire-strip__label mono">
            Addis Ababa base · remote worldwide
          </p>
          <h2 id="hire-strip-heading" className="hire-strip__title">
            Hire Cloud DevOps from Addis Ababa,{' '}
            <span className="text-accent">for teams anywhere</span>
          </h2>
          <p className="hire-strip__lead">
            First 15 minutes free. On-site network work:{' '}
            <a href="/network-engineer-ethiopia/">Network Engineer Ethiopia</a>.
          </p>
        </Reveal>

        <Reveal className="hire-strip__side" delay={80}>
          <ul className="hire-strip__needs" aria-label="What people hire for">
            {needs.map((need) => (
              <li key={need}>{need}</li>
            ))}
          </ul>
          <div className="hire-strip__actions">
            <a
              href="https://wa.me/251912215057?text=Hi%20Sofonias%2C%20I%20want%20a%20free%2015%20minute%20consultation"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free 15 min <MoveRight size={16} />
            </a>
            <a href="#pricing" className="btn-ghost hire-strip__ghost">
              Pricing
            </a>
            <a href="#location" className="btn-ghost hire-strip__ghost">
              Map
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HireStrip;
