import { useId, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { credentials } from '../data/products';
import { knowSofoniasOptions, recommendations } from '../data/recommendations';
import { Reveal } from './Reveal';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/sofoniasmengistu@gmail.com';
const MAX_PHOTO_BYTES = 2.5 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CommentCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const long = item.quote.length > 220;

  return (
    <article className="rec-card">
      <span className="rec-card__glow" aria-hidden="true" />
      <span className="rec-card__mark" aria-hidden="true">
        “
      </span>
      <blockquote className="rec-card__quote">
        <p className={`rec-card__text${expanded ? ' is-open' : ''}`}>
          {item.quote}
        </p>
      </blockquote>
      {long && (
        <button
          type="button"
          className="rec-card__more mono"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read full'}
        </button>
      )}
      <footer className="rec-card__footer">
        <img
          src={item.photo}
          alt=""
          className="rec-card__avatar"
          width={48}
          height={48}
        />
        <div className="rec-card__meta">
          <p className="rec-card__name">{item.name}</p>
          {item.title ? <p className="rec-card__title">{item.title}</p> : null}
          <p className="rec-card__context mono">
            {item.relationship}. {item.source}
          </p>
        </div>
      </footer>
    </article>
  );
};

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

    if (String(data.get('company') || '').trim()) {
      setStatus('idle');
      return;
    }

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const knowFrom = String(data.get('knowFrom') || '').trim();
    const quote = String(data.get('recommendation') || '').trim();
    const photo = data.get('photo');

    if (!name || name.length < 2) {
      setStatus('error');
      setError('Please enter your full name.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setError('Please enter a valid email so I can follow up if needed.');
      return;
    }
    if (!knowFrom) {
      setStatus('error');
      setError('Please choose where you know Sofonias.');
      return;
    }
    if (!(photo instanceof File) || !photo.size) {
      setStatus('error');
      setError('A profile photo is required with your comment.');
      return;
    }
    if (quote.length < 20) {
      setStatus('error');
      setError('Please write a bit more in your comment (at least a short paragraph).');
      return;
    }

    data.append('_subject', `Portfolio comment from ${name}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    data.set(
      'message',
      [
        `Where we know each other: ${knowFrom}`,
        '',
        quote,
        '',
        'Note: Post for public review — publish on site after approval.',
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
          Thanks. Sofonias reviews every comment and publishes approved ones in
          the row above. You will not see it instantly for everyone — that is
          intentional.
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
    >
      <p className="contact-form__title">Submit your comment</p>
      <p className="contact-form__note">
        Feedback on my work or study ability is welcome. Add your photo and
        where you know me. Sofonias reviews submissions and posts approved
        comments publicly here.
      </p>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

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

      <label className="contact-form__field">
        <span>Where do you know Sofonias?</span>
        <select name="knowFrom" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {knowSofoniasOptions.map((opt) => (
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
          <p className="mono">Preview JPG, PNG, or WebP under 2.5 MB</p>
        </div>
      ) : (
        <p className="recommendations__photo-hint mono">JPG, PNG, or WebP under 2.5 MB</p>
      )}

      <label className="contact-form__field">
        <span>Your comment</span>
        <textarea
          name="recommendation"
          required
          rows={4}
          minLength={20}
          placeholder="Any feedback on my work or study ability..."
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
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.rec-card');
    const step = (card?.getBoundingClientRect().width || 300) + 16;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

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
              Public comments are curated here. Submit below — Sofonias reviews
              each one, then publishes approved feedback in this row.
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

        <Reveal delay={40}>
          <div className="recommendations__toolbar">
            <p className="band__meta mono">Swipe or use arrows. Hover a box to glow</p>
            <div className="recommendations__arrows">
              <button
                type="button"
                className="recommendations__arrow"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous comments"
              >
                <ChevronLeft size={20} strokeWidth={2.25} />
              </button>
              <button
                type="button"
                className="recommendations__arrow"
                onClick={() => scrollByCard(1)}
                aria-label="Next comments"
              >
                <ChevronRight size={20} strokeWidth={2.25} />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="recommendations__track"
            tabIndex={0}
            aria-label="Colleague and manager comments"
          >
            {recommendations.map((item) => (
              <CommentCard key={item.id} item={item} />
            ))}
          </div>
        </Reveal>

        <Reveal className="recommendations__submit" delay={160}>
          <RecommendationForm />
        </Reveal>
      </div>
    </section>
  );
};

export default Recommendations;
