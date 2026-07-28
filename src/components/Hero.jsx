import { useRef, useState } from 'react';
import { ArrowRight, Check, Download, Linkedin, MoveRight, Volume2 } from 'lucide-react';
import { credentials } from '../data/products';

const Hero = () => {
  const shortRef = useRef(null);
  const [showFull, setShowFull] = useState(false);

  const openFull = () => {
    setShowFull(true);
    if (shortRef.current) {
      shortRef.current.pause();
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero__stage">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            Open to roles · Consulting · Builds · Remote worldwide
          </p>

          <h1 className="hero__brand">
            Sofonias<span className="text-accent">.</span>
          </h1>
          <p className="hero__seo-line">
            Cloud DevOps Engineer in Ethiopia · Kubestronaut · Addis Ababa
          </p>

          <p className="hero__role-badge">
            Cloud DevOps Engineer <span aria-hidden="true">·</span> Kubestronaut
          </p>

          <p className="hero__headline">
            Production cloud &amp; Kubernetes.{' '}
            <span className="text-accent">Hire ready.</span>
          </p>

          <p className="hero__sub">
            16+ years in IT. Multi-cloud DevSecOps for real teams, plus
            founder-built products that prove I ship. Hire me full time, bring a
            consulting brief, or ask me to build your platform.
          </p>

          <ul className="hero__checks">
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span>
                <strong>Hired by Gebeya</strong> · multi-cloud Kubernetes (EKS,
                GKE, AKS, Infomaniak, Linode, TKG)
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
                <strong>16+ years · 35+ companies · 29k+ LinkedIn</strong>, plus
                GIZ cloud trainer and product founder
              </span>
            </li>
          </ul>

          <div className="hero__actions">
            <a href="#contact" className="btn-primary">
              Hire or build <MoveRight size={18} strokeWidth={2.25} />
            </a>
            <a
              href="/Sofonias_Mengistu_Resume.pdf"
              download="Sofonias_Mengistu_Resume.pdf"
              className="btn-ghost"
            >
              <Download size={16} /> Download CV
            </a>
            <a href="#case-study" className="btn-ghost">
              Case study <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <aside className="hero__aside">
          <div className="hero__media hero__visual--lift">
            {!showFull ? (
              <>
                <video
                  ref={shortRef}
                  className="hero__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/intro-poster.jpg"
                  aria-label="Short muted introduction from Sofonias Mengistu"
                >
                  <source src="/intro-short.mp4" type="video/mp4" />
                </video>
                <button type="button" className="hero__watch-full" onClick={openFull}>
                  <Volume2 size={16} />
                  Watch full intro
                </button>
              </>
            ) : (
              <video
                className="hero__video"
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster="/intro-poster.jpg"
                aria-label="Full introduction video from Sofonias Mengistu"
              >
                <source src="/intro.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="hero__panel hero__panel--lift">
            <p className="hero__panel-kicker mono">For hiring managers</p>
            <p className="hero__panel-title">What you get</p>
            <ul className="hero__panel-list">
              <li>
                <strong>01</strong>
                <span>Cloud DevOps who owns Kubernetes, pipelines, and uptime</span>
              </li>
              <li>
                <strong>02</strong>
                <span>End-to-end clusters: EKS, GKE, AKS, Infomaniak, Linode, TKG</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Builder mindset: I run products in production myself</span>
              </li>
            </ul>
            <div className="hero__panel-actions">
              <a href="#contact" className="btn-primary">
                Start a conversation <MoveRight size={16} />
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
