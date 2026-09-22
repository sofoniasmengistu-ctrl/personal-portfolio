import { useEffect, useState } from 'react';

const chapters = [
  { id: 'work', label: 'Work' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
];

const ChapterNav = () => {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const work = document.getElementById('work');
      const pastHero = work ? work.getBoundingClientRect().top < window.innerHeight * 0.55 : false;
      const nearFooter =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 120;
      setVisible(pastHero && !nearFooter);

      let current = '';
      for (const chapter of chapters) {
        const el = document.getElementById(chapter.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 160) current = chapter.id;
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
