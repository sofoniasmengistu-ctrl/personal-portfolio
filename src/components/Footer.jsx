import {
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MoveRight,
  Send,
} from 'lucide-react';
import { companyChannels } from '../data/products';
import ContactForm from './ContactForm';
import { Reveal } from './Reveal';

const channels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/251912215057?text=Hi%20Sofonias%2C%20I%20want%20a%20free%2015%20minute%20consultation',
    Icon: MessageCircle,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/+251912215057',
    Icon: Send,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:sofoniasmengistu@gmail.com',
    Icon: Mail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sofonias-mengistu-eng/',
    Icon: Linkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Sofoniasm',
    Icon: Github,
  },
];

const jumpLinks = [
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
  { href: '#addis-ababa', label: 'Addis Ababa' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__stage">
        <div className="container site-footer__inner">
          <Reveal className="site-footer__intro">
            <a href="#home" className="site-footer__brand" aria-label="Sofonias home">
              <img
                src="/brand-mark.svg"
                alt=""
                className="site-footer__mark"
                width="36"
                height="36"
              />
              <span className="site-footer__brand-name">
                Sofonias<span>^</span>
              </span>
            </a>

            <p className="site-footer__label mono">05 Contact · Addis Ababa</p>
            <h2 className="site-footer__title">
              Make Sofonias your{' '}
              <span className="text-accent">first contact</span>
            </h2>
            <p className="site-footer__lead">
              DevOps, Network Engineer work, IT support, cloud support, or a build.
              On site in Addis Ababa. Remote worldwide. First 15 minutes free.
            </p>

            <div className="site-footer__actions">
              <a
                href="https://wa.me/251912215057?text=Hi%20Sofonias%2C%20I%20want%20a%20free%2015%20minute%20consultation"
                className="btn-primary site-footer__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free 15 min consult <MoveRight size={16} />
              </a>
              <a
                href="/Sofonias_Mengistu_Resume.pdf"
                download="Sofonias_Mengistu_Resume.pdf"
                className="btn-ghost site-footer__cv"
              >
                <Download size={16} /> Download CV
              </a>
            </div>

            <div className="site-footer__channels" aria-label="Direct contact">
              {channels.map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="site-footer__channel"
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <ul className="site-footer__offer">
              <li>Hourly consulting and monthly retainer</li>
              <li>Full time Cloud DevOps and Network Engineer roles</li>
              <li>On site Addis Ababa or remote delivery</li>
            </ul>
          </Reveal>

          <Reveal className="site-footer__form-wrap" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container site-footer__bar-inner">
          <nav className="site-footer__nav" aria-label="Footer">
            {jumpLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-footer__company">
            <span className="mono">WeRemoteIT</span>
            {companyChannels.map((c) => (
              <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            ))}
          </div>

          <p className="site-footer__copy">
            © {year} Sofonias Mengistu · Addis Ababa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
