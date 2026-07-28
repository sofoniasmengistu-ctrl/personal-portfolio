import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__stage">
        <div className="hero__copy">
          <p className="hero__eyebrow">Addis Ababa · Africa · Remote</p>
          <h1 className="hero__brand">
            Sofonias<span className="text-gradient">.</span>
          </h1>

          <div className="hero__roles">
            <span className="hero__pill hero__pill--teal">Cloud DevOps Engineer</span>
            <span className="hero__pill hero__pill--amber">Product Builder</span>
          </div>

          <p className="hero__headline">
            Infrastructure that lasts. Products people use in chat.
          </p>
          <p className="hero__sub">
            Kubestronaut and founder — shipping Telegram-native platforms while
            delivering multi-cloud DevSecOps for teams across Africa and beyond.
          </p>

          <ul className="hero__checks">
            <li className="hero__check">
              <Check size={16} strokeWidth={2.5} />
              Only CNCF Kubestronaut registered in Ethiopia
            </li>
            <li className="hero__check">
              <Check size={16} strokeWidth={2.5} />
              30k+ LinkedIn network · 97+ GitHub engineering projects
            </li>
            <li className="hero__check">
              <Check size={16} strokeWidth={2.5} />
              Upwork & consulting: cloud, Kubernetes, CI/CD, data platforms
            </li>
          </ul>

          <div className="hero__actions">
            <a href="#products" className="btn-primary">
              Products <ArrowRight size={18} />
            </a>
            <a href="#engineering" className="btn-ghost">
              Engineering work
            </a>
            <a href="#contact" className="btn-ghost">
              Contact
            </a>
          </div>
        </div>

        <div className="hero__visual" role="img" aria-label="Sofonias in CNCF Kubestronaut jacket">
          <div className="hero__glass">
            <p className="hero__glass-title">Live now</p>
            <ul className="hero__glass-list">
              <li>WeRemoteIT — AI hiring</li>
              <li>AuraPay — TON & USDT</li>
              <li>NexusAI — 300+ models</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
