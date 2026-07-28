import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { companyChannels } from '../data/products';

const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <p className="section__label" style={{ textAlign: 'center' }}>
          05 — Contact
        </p>
        <h2 className="section__title" style={{ textAlign: 'center' }}>
          Let&apos;s talk
        </h2>
        <p className="section__lead" style={{ margin: '0 auto 1.5rem', textAlign: 'center' }}>
          DevOps consulting, Upwork projects, or product partnerships.
        </p>

        <div className="contact__socials">
          <a
            href="https://www.linkedin.com/in/sofonias-mengistu-b5394179/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/Sofoniasm"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:sofoniasmengistu@gmail.com"
            className="contact__social"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://wa.me/251912215057"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </div>

        <div className="contact__details">
          <a href="mailto:sofoniasmengistu@gmail.com">sofoniasmengistu@gmail.com</a>
          <a href="tel:+251912215057">+251 912 215 057</a>
        </div>

        <div className="contact__company">
          <p className="contact__company-label mono">WeRemoteIT · company</p>
          <div className="contact__company-links">
            {companyChannels.map((c) => (
              <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <p className="contact__copy">
          © {new Date().getFullYear()} Sofonias Mengistu · Addis Ababa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
