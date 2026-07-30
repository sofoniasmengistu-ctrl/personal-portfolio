import {
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MoveRight,
  Send,
} from 'lucide-react';
import { companyChannels, products } from '../data/products';
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
  { href: '#products', label: 'Live products' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const slideItems = [
    ...jumpLinks.map((link) => ({
      id: `jump-${link.href}`,
      label: link.label,
      href: link.href,
      external: false,
    })),
    ...products.map((product) => ({
      id: `bot-${product.id}`,
      label: product.bot,
      href: product.botUrl,
      external: true,
    })),
    ...companyChannels.map((channel) => ({
      id: `channel-${channel.id}`,
      label: channel.label,
      href: channel.href,
      external: true,
    })),
    {
      id: 'copy',
      label: `© ${year} Sofonias Mengistu · Addis Ababa`,
      href: '#home',
      external: false,
    },
  ];

  const loop = [...slideItems, ...slideItems];

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
                Sofonias
                <img
                  src="/ckad-helm.svg"
                  alt=""
                  className="brand__helm brand__helm--footer"
                  width="14"
                  height="14"
                  title="CKAD"
                />
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
              <li>AI research, AI initiatives, and live product builds</li>
              <li>On site Addis Ababa or remote delivery</li>
            </ul>
          </Reveal>

          <Reveal className="site-footer__form-wrap" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <div className="site-footer__slide" aria-label="Footer links">
        <div className="site-footer__slide-track">
          {loop.map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href={item.href}
              className="site-footer__slide-item"
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              tabIndex={i >= slideItems.length ? -1 : undefined}
              aria-hidden={i >= slideItems.length ? true : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
