import { Github, Linkedin, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { clientChannels, companyChannels } from '../data/products';
import ContactForm from './ContactForm';

const channelIcon = (id) => {
  if (id.startsWith('wa')) return MessageCircle;
  if (id.startsWith('tg')) return Send;
  if (id.startsWith('phone')) return Phone;
  return Mail;
};

const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <p className="section__label" style={{ textAlign: 'center' }}>
          05 Contact
        </p>
        <h2 className="section__title" style={{ textAlign: 'center' }}>
          Hire me, or <span className="text-accent">let&apos;s build</span>
        </h2>
        <p className="section__lead" style={{ margin: '0 auto 1.75rem', textAlign: 'center' }}>
          Full time Cloud DevOps roles, consulting, and custom builds
          (platforms, Telegram products, cloud / Kubernetes). Reach me on any
          channel below.
        </p>

        <div className="contact__layout">
          <ContactForm />

          <div className="contact__aside">
            <p className="contact__aside-title">Direct channels</p>
            <div className="contact__channels">
              {clientChannels.map((channel) => {
                const Icon = channelIcon(channel.id);
                return (
                  <a
                    key={channel.id}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact__channel"
                  >
                    <span className="contact__channel-icon">
                      <Icon size={18} />
                    </span>
                    <span className="contact__channel-body">
                      <span className="contact__channel-label">{channel.label}</span>
                      <span className="contact__channel-value">{channel.value}</span>
                      <span className="contact__channel-note">{channel.note}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="contact__actions">
              <a
                href="/Sofonias_Mengistu_Resume.pdf"
                download="Sofonias_Mengistu_Resume.pdf"
                className="btn-dark"
              >
                Download CV
              </a>
            </div>

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
            </div>
          </div>
        </div>

        <div className="contact__company">
          <p className="contact__company-label mono">Also building · WeRemoteIT</p>
          <div className="contact__company-links">
            {companyChannels.map((c) => (
              <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <p className="contact__copy">
          © {new Date().getFullYear()} Sofonias Mengistu · Cloud DevOps Engineer · Addis Ababa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
