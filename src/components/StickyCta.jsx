import { Linkedin, MessageCircle } from 'lucide-react';

const StickyCta = () => {
  return (
    <div className="sticky-cta" role="navigation" aria-label="Quick actions">
      <a href="#contact" className="btn-primary">
        Contact
      </a>
      <div className="sticky-cta__icons">
        <a
          href="https://wa.me/251912215057"
          className="sticky-cta__icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sofonias-mengistu-eng/"
          className="sticky-cta__icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default StickyCta;
