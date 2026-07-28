const StickyCta = () => {
  return (
    <div className="sticky-cta" role="navigation" aria-label="Quick actions">
      <a href="#contact" className="btn-primary">
        Hire me
      </a>
      <a
        href="/Sofonias_Mengistu_Resume.pdf"
        download="Sofonias_Mengistu_Resume.pdf"
        className="btn-ghost"
      >
        CV
      </a>
    </div>
  );
};

export default StickyCta;
