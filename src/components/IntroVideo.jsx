import { Reveal } from './Reveal';

const VIDEO_SRC =
  'https://github.com/Sofoniasm/personal-portfolio/releases/download/intro-video-v1/sofonias-intro.mp4';

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
              and how to hire or contact him for consulting and builds.
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
              <source src={VIDEO_SRC} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="intro-video__caption mono">
            ~2 min · Addis Ababa · Hire, consulting, and builds
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default IntroVideo;
