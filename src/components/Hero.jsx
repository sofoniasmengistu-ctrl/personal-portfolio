import { Check, Download, Linkedin, MoveRight } from 'lucide-react';
import { credentials } from '../data/products';

const askFor = [
  'Cloud Platform · Kubernetes · CI/CD',
  'Azure Data · ADF · Databricks',
  'Consulting · retainers · builds',
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="container hero__stage">
        <div className="hero__copy">
          <p className="hero__eyebrow hero__stagger hero__stagger--1">
            <span className="hero__avail">
              <span className="hero__avail-dot" aria-hidden="true" />
              Available now
            </span>
            Addis Ababa base. Remote worldwide. EAT (UTC+3).
          </p>

          <p className="hero__brand hero__stagger hero__stagger--2">
            Sofonias<span className="text-accent">.</span>
          </p>

          <h1 id="geo-headline" className="hero__headline hero__stagger hero__stagger--3">
            Cloud Platform Architect in Addis Ababa.{' '}
            <span className="text-accent">Remote worldwide.</span>
          </h1>

          <p className="hero__role-badge hero__stagger hero__stagger--4">
            Current role · Addis Telco
          </p>

          <p id="geo-summary" className="hero__sub hero__stagger hero__stagger--5">
            Hire a remote DevOps Engineer for Kubernetes, CI/CD, and cloud
            platforms. 16+ years in IT. Kubestronaut. Azure data when the
            platform needs it.
          </p>

          <ul className="hero__proof hero__stagger hero__stagger--6">
            <li>
              <Check size={14} strokeWidth={3} aria-hidden="true" />
              <span>
                <strong>Remote Cloud DevOps</strong> · US, Europe, Middle East,
                Asia overlap
              </span>
            </li>
            <li>
              <Check size={14} strokeWidth={3} aria-hidden="true" />
              <span id="geo-claim">
                <strong>Only CNCF Kubestronaut in Ethiopia</strong>
              </span>
            </li>
          </ul>

          <div className="hero__actions hero__stagger hero__stagger--7">
            <a href="#contact" className="btn-primary">
              Contact Sofonias <MoveRight size={18} strokeWidth={2.25} />
            </a>
            <a
              href="https://wa.me/251912215057"
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="/Sofonias_Mengistu_Resume.pdf"
              download="Sofonias_Mengistu_Resume.pdf"
              className="btn-ghost"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>

        <aside className="hero__aside hero__stagger hero__stagger--8">
          <div className="hero__media">
            <video
              className="hero__video"
              controls
              playsInline
              preload="metadata"
              poster="/sofonias-intro-poster.jpg"
              aria-label="Sofonias Mengistu short introduction video"
            >
              <source src="/sofonias-intro.mp4" type="video/mp4" />
            </video>
            <div className="hero__media-rail">
              <p className="hero__media-kicker mono">Ask for</p>
              <ul className="hero__ask">
                {askFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={credentials.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__media-link"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
