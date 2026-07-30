import { useId, useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { credentials } from '../data/products';
import { recommendationRoles, recommendations } from '../data/recommendations';
import { Reveal } from './Reveal';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/sofoniasmengistu@gmail.com';
const MAX_PHOTO_BYTES = 2.5 * 1024 * 1024;

const RecommendationForm = () => {
  const photoId = useId();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [preview, setPreview] = useState('');

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview('');
    }
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload a photo (JPG, PNG, or WebP).');
      event.target.value = '';
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      setError('Photo must be under 2.5 MB.');
      event.target.value = '';
      return;
    }

    setError('');
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const photo = data.get('photo');

    if (!(photo instanceof File) || !photo.size) {
      setStatus('error');
      setError('A profile photo is required with your recommendation.');
      return;
    }

    data.append('_subject', `Portfolio recommendation from ${data.get('name')}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    data.set(
      'message',
      [
        `Relationship: ${data.get('relationship')}`,
        `Title: ${data.get('title')}`,
        `Company: ${data.get('company') || '—'}`,
        '',
        String(data.get('recommendation') || ''),
      ].join('\n'),
    );

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (!res.ok) {
        throw new Error('Could not send. Try emailing sofoniasmengistu@gmail.com directly.');
      }

      form.reset();
      if (preview) URL.revokeObjectURL(preview);
      setPreview('');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--done" role="status">
        <p className="contact-form__done-title">Comment received</p>
        <p className="contact-form__done-body">
          Thank you. I review every submission and post it in your wording when it
          goes live.
        </p>
        <button type="button" className="btn-dark" onClick={() => setStatus('idle')}>
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form recommendations__form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      noValidate
    >
      <p className="contact-form__title">Submit your comment</p>
      <p className="contact-form__note">
        Write in your own wording — positive or critical, both are welcome. There
        is no “negative comment” here; there is honest feedback, including about
        delivery I refused to take on. Include your photo. Submissions go to my
        email and are published only after review. LinkedIn is optional.
      </p>

      <div className="contact-form__row">
        <label className="contact-form__field">
          <span>Your full name</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Full name" />
        </label>
        <label className="contact-form__field">
          <span>Your email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="contact-form__row">
        <label className="contact-form__field">
          <span>Your role / title</span>
          <input
            name="title"
            type="text"
            required
            placeholder="e.g. Engineering Manager"
          />
        </label>
        <label className="contact-form__field">
          <span>Company (optional)</span>
          <input name="company" type="text" autoComplete="organization" placeholder="Organization" />
        </label>
      </div>

      <label className="contact-form__field">
        <span>How you know Sofonias</span>
        <select name="relationship" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {recommendationRoles.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <label className="contact-form__field" htmlFor={photoId}>
        <span>Your photo (required)</span>
        <input
          id={photoId}
          name="photo"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          required
          onChange={handlePhotoChange}
        />
      </label>
      {preview ? (
        <div className="recommendations__photo-preview">
          <img src={preview} alt="Photo preview" width={72} height={72} />
          <p className="mono">Preview · JPG, PNG, or WebP under 2.5 MB</p>
        </div>
      ) : (
        <p className="recommendations__photo-hint mono">JPG, PNG, or WebP · under 2.5 MB</p>
      )}

      <label className="contact-form__field">
        <span>Your recommendation</span>
        <textarea
          name="recommendation"
          required
          rows={5}
          placeholder="Write honestly in your own words — praise, critique, or delivery you saw refused..."
        />
      </label>

      {status === 'error' && (
        <p className="contact-form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary contact-form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            Submit for review <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

const Recommendations = () => {
  return (
    <section id="recommendations" className="section section--tight recommendations section--muted">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">05 Recommendations</p>
            <h2 className="section__title">
              What colleagues and managers{' '}
              <span className="text-accent">have said</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Genuine comments from people who studied or worked with Sofonias —
              posted in the writer’s own wording. Positive or critical feedback is
              welcome; honest notes on delivery I refused are fine. New submissions
              are reviewed before they appear here.
            </p>
          </div>
          <a
            href={credentials.linkedIn}
            className="fancy-arrow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn recommendations"
          >
            <span className="fancy-arrow__label">LinkedIn</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <ArrowUpRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <div className="recommendations__list">
          {recommendations.map((item, i) => (
            <Reveal key={item.id} className="recommendations__item" delay={i * 80} variant="up">
              <blockquote className="recommendations__quote">
                <div className="recommendations__person">
                  <img
                    src={item.photo}
                    alt=""
                    className="recommendations__avatar"
                    width={56}
                    height={56}
                  />
                  <div className="recommendations__meta">
                    <p className="recommendations__name">{item.name}</p>
                    <p className="recommendations__title">{item.title}</p>
                    <p className="recommendations__context mono">
                      {item.relationship} · {item.date} · via {item.source}
                    </p>
                  </div>
                </div>
                <p className="recommendations__text">“{item.quote}”</p>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal className="recommendations__submit" delay={160}>
          <RecommendationForm />
        </Reveal>
      </div>
    </section>
  );
};

export default Recommendations;
