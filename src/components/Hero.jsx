import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__stage">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            Cloud DevOps · Products · Consulting
          </p>
          <h1 className="hero__brand">
            Sofonias<span className="text-accent">.</span>
          </h1>

          <p className="hero__headline">
            Infrastructure that lasts.{' '}
            <span className="text-accent">Simplified.</span>
          </p>
          <p className="hero__sub">
            Kubestronaut and founder — shipping Telegram-native platforms while
            delivering multi-cloud DevSecOps for teams across Africa and beyond.
          </p>

          <ul className="hero__checks">
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span>
                <strong>Only Kubestronaut in Ethiopia:</strong> CNCF-registered —
                production Kubernetes, end to end.
              </span>
            </li>
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span>
                <strong>Proof at scale:</strong> 30k+ LinkedIn network · 97+
                GitHub engineering projects.
              </span>
            </li>
            <li className="hero__check">
              <Check size={14} strokeWidth={3} />
              <span>
                <strong>Client delivery:</strong> Upwork & consulting — cloud,
                CI/CD, data platforms.
              </span>
            </li>
          </ul>

          <div className="hero__actions">
            <a href="#products" className="btn-primary">
              Products <ArrowRight size={18} />
            </a>
            <a href="#work" className="btn-ghost">
              Engineering work
            </a>
          </div>
        </div>

        <aside className="hero__aside">
          <div
            className="hero__visual"
            role="img"
            aria-label="Sofonias in CNCF Kubestronaut jacket"
          />
          <div className="hero__panel">
            <p className="hero__panel-title">Let&apos;s talk</p>
            <ul className="hero__panel-list">
              <li>
                <strong>01</strong>
                <span>DevOps consulting & Upwork projects</span>
              </li>
              <li>
                <strong>02</strong>
                <span>Product partnerships & Telegram builds</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Multi-cloud Kubernetes delivery</span>
              </li>
            </ul>
            <a href="#contact" className="btn-primary">
              Contact me
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
