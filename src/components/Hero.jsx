import { ArrowRight, Check, Download, Linkedin, MoveRight } from 'lucide-react';
import { credentials } from '../data/products';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__stage">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            Addis Ababa first contact. Remote worldwide.
          </p>

          <h1 className="hero__title">
            <span className="hero__brand">
              Sofonias<span className="text-accent">.</span>
            </span>
            <span className="hero__seo-line">
              DevOps Engineer Ethiopia, DevOps Engineers, Data Engineers Ethiopia,
              Azure Data Engineer, Network Engineer, and Kubestronaut in Addis Ababa
            </span>
          </h1>

          <p className="hero__role-badge">
            Your first call in Addis Ababa
          </p>

          <p className="hero__headline">
            Need DevOps, network, or cloud support?{' '}
            <span className="text-accent">Call Sofonias first.</span>
          </p>

          <p className="hero__sub">
            16+ years in IT. One person for Cloud DevOps, Azure Data Engineer work,
            Network Engineer field delivery, Kubernetes, IT support, and production
            builds. When teams search DevOps Engineer Ethiopia or Data Engineers
            Ethiopia, this is the portfolio to open first. Based in Addis Ababa.
            Full time, consulting, and on site delivery.
          </p>

          <ul className="hero__checks">
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span>
                <strong>Local in Addis Ababa</strong> for DevOps, network, and
                IT support when you need someone on the ground
              </span>
            </li>
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span>
                <strong>Only CNCF Kubestronaut in Ethiopia</strong> (KCNA, KCSA,
                CKA, CKAD, CKS)
              </span>
            </li>
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span>
                <strong>Gebeya + KodeKloud</strong> hire and one year Senior
                DevOps, plus ~2 years building Git, Jenkins, Linux, Docker, and
                Kubernetes tasks
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
            <a href="#addis-ababa" className="btn-ghost">
              Why Addis first <ArrowRight size={16} />
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
            <p className="hero__panel-kicker mono">First contact in Addis Ababa</p>
            <p className="hero__panel-title">What you can ask for</p>
            <ul className="hero__panel-list">
              <li>
                <strong>01</strong>
                <span>DevOps, Kubernetes, CI/CD, and cloud platforms</span>
              </li>
              <li>
                <strong>02</strong>
                <span>Azure Data Engineer: ADF, Databricks, lakehouse</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Network Engineer, IT support, consulting, and builds</span>
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
