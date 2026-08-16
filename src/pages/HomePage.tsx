import React from 'react';
import { Link } from 'react-router-dom';
import ReviewMarquee from '../components/ReviewMarquee';
import { useI18n } from '../i18n/I18nProvider';
import { HOTEL } from '../data/translations';
import { images } from '../data/images';

export default function HomePage() {
  const { t, lang } = useI18n();

  const facts = [
    { v: '1895', l: 'Depuis' },
    { v: '74', l: 'Chambres' },
    { v: '4 ha', l: 'De parc' },
    { v: '154', l: 'Lits' },
  ];

  const highlights = [
    { to: '/rooms', title: t('home.cardRooms'), text: t('home.cardRoomsText'), img: images.rooms[0] },
    { to: '/dining', title: t('home.cardDining'), text: t('home.cardDiningText'), img: images.dining },
    { to: '/piscine', title: t('home.cardPool'), text: t('home.cardPoolText'), img: images.pool },
    { to: '/tabarka', title: t('home.cardTabarka'), text: t('home.cardTabarkaText'), img: images.gallery[20] },
  ];

  return (
    <>
      {/* HERO — explicit stacking: image layer behind (-z), overlay + text in front (+z) */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* background image (lowest layer) */}
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${images.hero})` }} />
        {/* dark gradient for contrast (above image) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-sand-900/80 via-sand-900/55 to-sand-900" />
        {/* content (top layer) */}
        <div className="relative z-20 container px-4 md:px-8 text-center py-24">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="font-serif font-medium tracking-wide text-white leading-tight
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] mb-4">
            {HOTEL.name}
          </h1>
          <p className="text-gold-muted text-lg md:text-xl font-light max-w-3xl mx-auto mb-8">
            {t('home.intro')}
          </p>
          <a href="/contact" className="btn-gold text-base">{t('hero.cta')}</a>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-sand-800 border-y border-gold/10 py-8">
        <div className="container px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {facts.map((s) => (
            <div key={s.l}>
              <div className="text-2xl md:text-3xl text-gold font-light">{s.v}</div>
              <div className="text-gold-muted text-xs md:text-sm font-light mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO — fills the old blank space with real copy */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8 max-w-4xl text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h2 className="section-heading text-3xl md:text-4xl font-light mb-6">{t('section.discover')}</h2>
          <p className="text-gold-muted font-light leading-relaxed text-base md:text-lg">
            {t('home.intro')}
          </p>
          <p className="text-gold-muted font-light leading-relaxed text-base md:text-lg mt-4">
            {HOTEL.description}
          </p>
          <div className="mt-8">
            <Link to="/about" className="text-gold font-light hover:underline">{t('nav.about')} →</Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 md:py-24 bg-sand-800">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="gold-accent-line mx-auto mb-6" />
            <h2 className="section-heading text-3xl md:text-4xl font-light">{t('section.highlights')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <Link key={h.to} to={h.to} className="card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={h.img} alt={h.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="section-heading text-lg font-light mb-2">{h.title}</h3>
                  <p className="text-gold-muted font-light text-sm leading-relaxed">{h.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-10">
            <div className="gold-accent-line mx-auto mb-6" />
            <h2 className="section-heading text-3xl md:text-4xl font-light">{t('reviews.title')}</h2>
            <p className="text-gold-muted font-light mt-3 max-w-xl mx-auto text-sm md:text-base">{t('reviews.subtitle')}</p>
          </div>
          <ReviewMarquee />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-sand-800">
        <div className="container px-4 md:px-8 text-center">
          <h2 className="section-heading text-3xl md:text-4xl font-light mb-6">{t('home.ctaBook')}</h2>
          <a href="/contact" className="btn-gold text-base">{t('hero.cta')}</a>
        </div>
      </section>
    </>
  );
}
