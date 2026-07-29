import { Reveal } from './Reveal';

const IntroVideo = () => {
  return (
    <section id="intro-video" className="section section--tight intro-video">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">Hear from Sofonias</p>
            <h2 className="section__title">
              A short intro in his{' '}
              <span className="text-accent">own words</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Cloud and DevOps since 2018, 16+ years in IT and field engineering,
              live products (WeRemoteIT, AuraPay), and how to hire or contact him.
            </p>
          </div>
        </Reveal>

        <Reveal className="intro-video__stage" delay={80}>
          <div className="intro-video__frame">
            <video
              className="intro-video__player"
              controls
              playsInline
              preload="metadata"
              poster="/sofonias-intro-poster.jpg"
              aria-label="Sofonias Mengistu introducing his Cloud DevOps and engineering background"
            >
              <source src="/sofonias-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="intro-video__caption mono">
            ~3 min · Addis Ababa · Hire, consulting, and product builds
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default IntroVideo;
