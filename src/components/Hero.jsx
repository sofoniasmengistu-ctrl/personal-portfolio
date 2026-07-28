import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">Addis Ababa · Africa · Remote</p>
          <h1 className="hero__brand">
            Sofonias<span className="text-gradient">.</span>
          </h1>
          <p className="hero__headline">
            Chat-native products. Infrastructure that lasts.
          </p>
          <p className="hero__sub">
            I design and ship Telegram-native platforms — then keep them
            running. Founder. Kubestronaut. Sixteen years in networks and cloud.
          </p>
          <div className="hero__actions">
            <a href="#products" className="btn-primary">
              Selected work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />
          <div className="hero__frame">
            <div className="hero__frame-bar">
              <span className="hero__frame-dot" />
              live · telegram
            </div>
            <div className="hero__chat">
              <div className="hero__bubble">
                <strong>WeRemoteIT</strong>
                AI hiring, inside chat
              </div>
              <div className="hero__bubble hero__bubble--out">
                <strong>AuraPay</strong>
                TON · USDT · Stars
              </div>
              <div className="hero__bubble">
                <strong>NexusAI</strong>
                300+ models, one bot
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
