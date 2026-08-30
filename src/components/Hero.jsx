import { ArrowRight, Check, Download, Linkedin, MoveRight } from 'lucide-react';
import { credentials } from '../data/products';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__stage">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__avail">
              <span className="hero__avail-dot" aria-hidden="true" />
              Available now
            </span>
            Addis Ababa base. Remote worldwide. EAT (UTC+3).
          </p>

          <p className="hero__brand">
            Sofonias<span className="text-accent">.</span>
          </p>

          <h1 id="geo-headline" className="hero__headline">
            Cloud Platform Architect in Addis Ababa.{' '}
            <span className="text-accent">Remote worldwide.</span>
          </h1>

          <p className="hero__role-badge">
            Current role · Addis Telco
          </p>

          <p id="geo-summary" className="hero__sub">
            Hire a remote DevOps Engineer for Kubernetes, CI/CD, and cloud
            platforms. 16+ years in IT. Kubestronaut. Azure data when the
            platform needs it.
          </p>

          <ul className="hero__checks">
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span>
                <strong>Remote Cloud DevOps</strong> from Addis Ababa, with
                overlap for US, Europe, Middle East, and Asia
              </span>
            </li>
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span id="geo-claim">
                <strong>Only CNCF Kubestronaut in Ethiopia</strong> (KCNA, KCSA,
                CKA, CKAD, CKS)
              </span>
            </li>
          </ul>

          <div className="hero__actions">
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
            <a href="#recommendations" className="btn-ghost">
              Recommendations <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <aside className="hero__aside">
          <div className="hero__media hero__visual--lift">
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
          </div>
          <div className="hero__panel hero__panel--lift">
            <p className="hero__panel-kicker mono">Remote Cloud / DevOps hire</p>
            <p className="hero__panel-title">What you can ask for</p>
            <ul className="hero__panel-list">
              <li>
                <strong>01</strong>
                <span>Cloud Platform Architect, Kubernetes, CI/CD</span>
              </li>
              <li>
                <strong>02</strong>
                <span>Azure Data Engineer: ADF, Databricks, lakehouse</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Consulting, retainers, and production builds</span>
              </li>
            </ul>
            <div className="hero__panel-actions">
              <a href="#contact" className="btn-primary">
                Make Sofonias your first call <MoveRight size={16} />
              </a>
              <a
                href={credentials.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__panel-link"
              >
                <Linkedin size={16} /> LinkedIn profile
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
