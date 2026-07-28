import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Products', href: '#products' },
  { name: 'Engineering', href: '#engineering' },
  { name: 'Clients', href: '#clients' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'products',
        'engineering',
        'clients',
        'presence',
        'ecosystem',
        'about',
        'skills',
        'contact',
      ];
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

      const map = {
        '#presence': '#products',
        '#ecosystem': '#products',
        '#skills': '#about',
      };
      const navHash = map[current] || current;
      setActiveHash(navHash);

      if (current === '#home') {
        window.history.replaceState(null, '', window.location.pathname);
      } else if (!map[current]) {
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
          Sofonias<span>DevSecOps</span>
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
