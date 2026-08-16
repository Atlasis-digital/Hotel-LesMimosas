import React from 'react';
import { reviews } from '../data/reviews';
import { useI18n } from '../i18n/I18nProvider';

// Movie-credits style continuous vertical scroll. The list is duplicated so the
// loop is seamless (translateY -50%). Pauses on hover via CSS.
export default function ReviewMarquee() {
  const { lang } = useI18n();
  const loop = [...reviews, ...reviews];

  return (
    <div className="relative h-[420px] md:h-[520px] overflow-hidden rounded-xl border border-gold/10 bg-sand-900/40">
      {/* fade masks top & bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-sand-900 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sand-900 to-transparent z-10" />

      <div className="marquee-track animate-marquee flex flex-col gap-4 py-4">
        {loop.map((r, i) => (
          <div key={i} className="card p-5 mx-4">
            <div className="flex items-center gap-1 mb-2 text-gold" aria-hidden>
              {'★'.repeat(r.rating)}
              <span className="sr-only">{r.rating}/5</span>
            </div>
            <p className="text-white/90 font-light leading-relaxed text-sm md:text-base">
              “{r.text[lang]}”
            </p>
            <div className="mt-3 text-gold-muted text-xs">
              {r.name} · <span dir="auto">{r.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
