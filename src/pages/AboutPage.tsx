import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { HOTEL } from '../data/translations';
import { images } from '../data/images';
import { siteContent } from '../data/content';

export default function AboutPage() {
  const { t, lang } = useI18n();
  const c = siteContent[lang].about;
  return (
    <div>
      <section className="relative min-h-[55vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${images.about})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900 via-sand-900/80 to-sand-900" />
        <div className="relative container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{t('about.title')}</h1>
          <p className="text-gold-muted font-light mt-3">{HOTEL.name}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="gold-accent-line mb-6" />
            <h2 className="section-heading text-3xl md:text-4xl font-light mb-6">{HOTEL.name}</h2>
            <div className="space-y-4 text-gold-muted font-light leading-relaxed">
              <p>{c.body}</p>
              <p>{c.p2}</p>
              <p>{c.p3}</p>
            </div>
            <div className="mt-8">
              <Link to="/contact" className="btn-gold">{t('about.cta')}</Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden card">
            <img src={images.about} alt={HOTEL.name} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Key facts strip for more substance */}
        <div className="container px-4 md:px-8 mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { v: '1895', l: t('stats.since') },
            { v: '74', l: t('stats.rooms') },
            { v: '4 ha', l: 'Parc' },
            { v: String(HOTEL.reviewCount), l: t('stats.reviews') },
          ].map((s) => (
            <div key={s.l} className="card p-5">
              <div className="text-2xl md:text-3xl text-gold font-light">{s.v}</div>
              <div className="text-gold-muted text-xs md:text-sm font-light mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
