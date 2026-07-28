import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Products', href: '#products' },
  { name: 'Approach', href: '#approach' },
  { name: 'About', href: '#about' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'products', 'approach', 'about', 'contact'];
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
        <a href="#home" className="brand">
          Sofonias<span>^</span>
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
            Hire me →
          </a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <nav className="nav-mobile" aria-label="Mobile">
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
              Hire me →
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
