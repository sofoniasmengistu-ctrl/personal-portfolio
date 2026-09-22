import { useEffect, useRef, useState } from 'react';
import { Check, Download, MoveRight, Volume2, VolumeX } from 'lucide-react';

const askFor = [
  'Cloud Platform · Kubernetes · CI/CD',
  'Azure Data · ADF · Databricks',
  'Consulting · retainers · builds',
];

const Hero = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.muted = true;
    const play = video.play();
    if (play?.catch) play.catch(() => {});
    return undefined;
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next) {
      video.play().catch(() => {});
    }
  };

  return (
    <section id="home" className="hero hero--reel">
      <div className="hero__reel-wrap" aria-hidden="false">
        <video
          ref={videoRef}
          className="hero__reel"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/sofonias-intro-poster.jpg"
          aria-label="Sofonias Mengistu introduction video"
        >
          <source src="/sofonias-intro.mp4" type="video/mp4" />
        </video>
        <div className="hero__reel-veil" aria-hidden="true" />
        <div className="hero__reel-grain" aria-hidden="true" />
      </div>

      <div className="container hero__overlay">
        <div className="hero__copy">
          <p className="hero__eyebrow hero__stagger hero__stagger--1">
            <span className="hero__avail">
              <span className="hero__avail-dot" aria-hidden="true" />
              Available now
            </span>
            Addis Ababa · Remote worldwide · EAT (UTC+3)
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
            platforms. 16+ years in IT. Kubestronaut.
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
              className="btn-ghost hero__ghost-on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="/Sofonias_Mengistu_Resume.pdf"
              download="Sofonias_Mengistu_Resume.pdf"
              className="btn-ghost hero__ghost-on-dark"
            >
              <Download size={16} /> Download CV
            </a>
            <button
              type="button"
              className="hero__sound"
              onClick={toggleMute}
              aria-pressed={!muted}
              aria-label={muted ? 'Unmute introduction video' : 'Mute introduction video'}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {muted ? 'Unmute' : 'Mute'}
            </button>
          </div>

          <ul className="hero__ask hero__stagger hero__stagger--8" aria-label="What you can ask for">
            {askFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
