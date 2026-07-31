import { useEffect, useId, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Addis', href: '#addis-ababa' },
  { name: 'Field', href: '#field' },
  { name: 'Work', href: '#work' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Recs', href: '#recommendations' },
  { name: 'Pricing', href: '#pricing' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const menuId = useId();

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'addis-ababa', 'field', 'case-study', 'work', 'products', 'approach', 'about', 'recommendations', 'pricing', 'contact'];
      let current = '#home';

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        current = '#contact';
      } else {
        for (const id of sections) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = `#${id}`;
            break;
          }
        }
      }

      setActiveHash(current === '#contact' ? '#about' : current);

      if (current === '#home') {
        window.history.replaceState(null, '', window.location.pathname);
      } else if (current !== '#contact') {
        window.history.replaceState(null, '', current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="brand" aria-label="Sofonias Mengistu — Cloud Platform Architect">
          <img src="/brand-mark.svg" alt="" className="brand__mark" width="28" height="28" />
          <span className="brand__text">
            <span className="brand__name">
              Sofonias Mengistu
              <img
                src="/ckad-helm.svg"
                alt=""
                className="brand__helm"
                width="14"
                height="14"
                title="CKAD"
              />
            </span>
            <span className="brand__title">Cloud Platform Architect</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={activeHash === link.href ? 'is-active' : undefined}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-dark nav-desktop__cta">
            Contact
            <svg className="btn-arrow" viewBox="0 0 28 12" aria-hidden="true">
              <path d="M0 6h22M17 1l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls={menuId}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <nav id={menuId} className="nav-mobile" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={activeHash === link.href ? 'is-active' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-dark" onClick={() => setIsOpen(false)}>
              Contact
              <svg className="btn-arrow" viewBox="0 0 28 12" aria-hidden="true">
                <path d="M0 6h22M17 1l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
