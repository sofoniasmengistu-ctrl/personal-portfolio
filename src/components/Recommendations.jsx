import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Send, X } from 'lucide-react';
import { credentials } from '../data/products';
import { knowSofoniasOptions, recommendations } from '../data/recommendations';
import { Reveal } from './Reveal';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/sofoniasmengistu@gmail.com';
const MAX_PHOTO_BYTES = 2.5 * 1024 * 1024;
const LIVE_STORAGE_KEY = 'sofonias-live-comments-v1';
const MANAGE_KEY = 'sofonias-comments-manage';

const readLiveComments = () => {
  try {
    const raw = localStorage.getItem(LIVE_STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
};

const writeLiveComments = (list) => {
  localStorage.setItem(LIVE_STORAGE_KEY, JSON.stringify(list));
};

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Could not read photo.'));
    reader.readAsDataURL(file);
  });

const CommentCard = ({ item, canRemove, onRemove }) => {
  const [expanded, setExpanded] = useState(false);
  const long = item.quote.length > 220;

  return (
    <article className={`rec-card${item.isNew ? ' rec-card--new' : ''}`}>
      <span className="rec-card__glow" aria-hidden="true" />
      {canRemove && (
        <button
          type="button"
          className="rec-card__remove"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove comment from ${item.name}`}
          title="Remove this comment"
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      )}
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

const RecommendationForm = ({ onPosted }) => {
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
      setError('A profile photo is required with your comment.');
      return;
    }

    const name = String(data.get('name') || '').trim();
    const knowFrom = String(data.get('knowFrom') || '').trim();
    const quote = String(data.get('recommendation') || '').trim();

    data.append('_subject', `Portfolio comment from ${name}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    data.set(
      'message',
      [`Where we know each other: ${knowFrom}`, '', quote].join('\n'),
    );

    try {
      const photoDataUrl = await fileToDataUrl(photo);
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (!res.ok) {
        throw new Error('Could not send. Try emailing sofoniasmengistu@gmail.com directly.');
      }

      const entry = {
        id: `live-${Date.now()}`,
        name,
        title: '',
        relationship: knowFrom,
        date: new Date().toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        }),
        source: 'Site',
        photo: photoDataUrl,
        quote,
        isNew: true,
      };

      onPosted(entry);
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
        <p className="contact-form__done-title">Your comment is live</p>
        <p className="contact-form__done-body">
          It just appeared in the row above, in your own wording. Sofonias can
          remove a comment anytime.
        </p>
        <button type="button" className="btn-dark" onClick={() => setStatus('idle')}>
          Post another
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
        Any feedback is welcome on my work or my study ability. Tell us where you
        know me, add your photo, and post. Your comment appears above. Sofonias can
        remove it anytime.
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
          'Posting...'
        ) : (
          <>
            Post comment <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

const Recommendations = () => {
  const trackRef = useRef(null);
  const [live, setLive] = useState([]);
  const [toast, setToast] = useState(false);
  const [canManage, setCanManage] = useState(false);

  useEffect(() => {
    setLive(readLiveComments());
    setCanManage(sessionStorage.getItem(MANAGE_KEY) === '1');
  }, []);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash !== '#recommendations-manage') return;
      const ok = window.prompt('Enter manage passphrase to remove comments:') === 'sofonias';
      if (ok) {
        sessionStorage.setItem(MANAGE_KEY, '1');
        setCanManage(true);
      }
      window.history.replaceState(null, '', '#recommendations');
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const allComments = [...live, ...recommendations];

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.rec-card');
    const step = (card?.getBoundingClientRect().width || 300) + 16;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const handlePosted = (entry) => {
    setLive((prev) => {
      const next = [entry, ...prev];
      writeLiveComments(next.map(({ isNew, ...rest }) => rest));
      return next;
    });
    setToast(true);
    window.setTimeout(() => setToast(false), 3200);
    window.requestAnimationFrame(() => {
      trackRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    });
  };

  const handleRemove = (id) => {
    if (!id.startsWith('live-')) {
      window.alert('LinkedIn comments are curated in the site files. Ask to remove those from code.');
      return;
    }
    setLive((prev) => {
      const next = prev.filter((item) => item.id !== id);
      writeLiveComments(next);
      return next;
    });
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
              Comments appear here when people post them. Sofonias can remove any
              comment. Scroll the row so the page stays short.
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
            {allComments.map((item) => (
              <CommentCard
                key={item.id}
                item={item}
                canRemove={canManage && String(item.id).startsWith('live-')}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </Reveal>

        <Reveal className="recommendations__submit" delay={160}>
          <RecommendationForm onPosted={handlePosted} />
        </Reveal>
      </div>

      {toast && (
        <div className="recommendations__toast" role="status">
          Comment posted. It is in the row above.
        </div>
      )}
    </section>
  );
};

export default Recommendations;
