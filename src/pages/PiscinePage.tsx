import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { images } from '../data/images';
import { siteContent } from '../data/content';

export default function PiscinePage() {
  const { t, lang } = useI18n();
  const c = siteContent[lang].piscine;
  return (
    <div>
      <section className="relative min-h-[55vh] flex items-center justify-center bg-3 bg-cover bg-center" style={{ backgroundImage: `url(${images.pool})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900 via-sand-900/75 to-sand-900" />
        <div className="relative container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{t('nav.piscine')}</h1>
          <p className="text-gold-muted font-light mt-3 max-w-2xl mx-auto">{t('piscine.subtitle')}</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="gold-accent-line mb-6" />
            <h2 className="section-heading text-3xl font-light mb-4">{t('piscine.title')}</h2>
            <p className="text-gold-muted font-light leading-relaxed">{c.text}</p>
            <div className="mt-6">
              <Link to="/contact" className="btn-gold">{t('hero.cta')}</Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden card">
            <img src={images.pool} alt="Piscine" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
