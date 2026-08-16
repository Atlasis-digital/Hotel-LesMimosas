import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { images } from '../data/images';
import { siteContent } from '../data/content';

export default function DiningPage() {
  const { t, lang } = useI18n();
  const c = siteContent[lang].dining;
  const imgs = [images.dining, images.gallery[7], images.gallery[8]];
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${images.dining})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900 via-sand-900/80 to-sand-900" />
        <div className="relative container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{t('dining.title')}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8 max-w-3xl text-center mb-12">
          <p className="text-gold-muted font-light leading-relaxed text-base md:text-lg">{c.intro}</p>
        </div>

        <div className="container px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.venues.map((v: any, i: number) => (
            <div key={i} className="card overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={imgs[i] ?? images.dining} alt={v.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="section-heading text-lg font-light mb-2">{v.title}</h3>
                <p className="text-gold-muted font-light text-sm">{v.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="btn-gold">{t('hero.cta')}</Link>
        </div>
      </section>
    </div>
  );
}
