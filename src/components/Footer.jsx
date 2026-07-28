import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { companyChannels } from '../data/products';
import ContactForm from './ContactForm';

/** Logo-only quick links, no repeated phone text on screen */
const socialLinks = [
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
  {
    id: 'email',
    label: 'Email Sofonias',
    href: 'mailto:sofoniasmengistu@gmail.com',
    Icon: Mail,
  },
  {
    id: 'wa-1',
    label: 'WhatsApp +251 912 215 057',
    href: 'https://wa.me/251912215057',
    Icon: MessageCircle,
  },
  {
    id: 'wa-2',
    label: 'WhatsApp +251 946 699 350',
    href: 'https://wa.me/251946699350',
    Icon: MessageCircle,
  },
  {
    id: 'tg-1',
    label: 'Telegram +251 912 215 057',
    href: 'https://t.me/+251912215057',
    Icon: Send,
  },
  {
    id: 'tg-2',
    label: 'Telegram +251 946 699 350',
    href: 'https://t.me/+251946699350',
    Icon: Send,
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <p className="section__label" style={{ textAlign: 'center' }}>
          05 Contact Addis Ababa
        </p>
        <h2 className="section__title" style={{ textAlign: 'center' }}>
          Make Sofonias your <span className="text-accent">first contact</span>
        </h2>
        <p className="section__lead" style={{ margin: '0 auto 1.5rem', textAlign: 'center' }}>
          Need DevOps, Network Engineer help, IT support, cloud support, or a
          build in Addis Ababa? Reach Sofonias first. Form, WhatsApp, Telegram,
          or call.
        </p>

        <nav className="contact__icons" aria-label="Direct contact">
          {socialLinks.map(({ id, label, href, Icon }) => (
            <a
              key={id}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="contact__icon"
              aria-label={label}
              title={label}
            >
              <Icon size={22} />
            </a>
          ))}
        </nav>

        <div className="contact__layout">
          <ContactForm />

          <div className="contact__aside">
            <p className="contact__aside-title">Ask Sofonias first for</p>
            <ul className="contact__offer">
              <li>DevOps, DevSecOps, and SRE roles in Addis Ababa</li>
              <li>Network Engineer and on site field support</li>
              <li>IT support, cloud support, and Kubernetes</li>
              <li>Consulting, training, and product builds</li>
            </ul>
            <a
              href="/Sofonias_Mengistu_Resume.pdf"
              download="Sofonias_Mengistu_Resume.pdf"
              className="btn-dark contact__cv"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="contact__company">
          <p className="contact__company-label mono">Also building WeRemoteIT</p>
          <div className="contact__company-links">
            {companyChannels.map((c) => (
              <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <p className="contact__copy">
          © {new Date().getFullYear()} Sofonias Mengistu, first contact in Addis Ababa for DevOps and Network Engineering
        </p>
      </div>
    </footer>
  );
};

export default Footer;
