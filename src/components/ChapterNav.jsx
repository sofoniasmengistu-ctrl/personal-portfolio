import { useEffect, useState } from 'react';

const chapters = [
  { id: 'case-study', label: 'Cases' },
  { id: 'work', label: 'Work' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
];

const ChapterNav = () => {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const start = document.getElementById('case-study');
      const pastStart = start
        ? start.getBoundingClientRect().top < window.innerHeight * 0.55
        : false;
      const nearFooter =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 120;
      setVisible(pastStart && !nearFooter);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);

      let current = '';
      for (const chapter of chapters) {
        const el = document.getElementById(chapter.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 160) current = chapter.id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="chapter-nav" aria-label="Page chapters">
      <div
        className="chapter-nav__progress"
        style={{ '--chapter-progress': progress }}
        aria-hidden="true"
      />
      <ol className="chapter-nav__list">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              className={`chapter-nav__link${active === chapter.id ? ' is-active' : ''}`}
              aria-current={active === chapter.id ? 'true' : undefined}
            >
              <span className="chapter-nav__dot" aria-hidden="true" />
              <span className="chapter-nav__label">{chapter.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ChapterNav;
