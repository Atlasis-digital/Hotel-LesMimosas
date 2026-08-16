import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { images } from '../data/images';
import { siteContent } from '../data/content';

const ACT_IMG = [30, 31, 28, 29];

export default function TabarkaPage() {
  const { t, lang } = useI18n();
  const c = siteContent[lang].tabarka;
  return (
    <div>
      <section className="relative min-h-[55vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${images.gallery[20]})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900 via-sand-900/75 to-sand-900" />
        <div className="relative container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{t('nav.tabarka')}</h1>
          <p className="text-gold-muted font-light mt-3 max-w-2xl mx-auto">{c.intro}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8 max-w-3xl text-center mb-14">
          <div className="gold-accent-line mx-auto mb-6" />
          <h2 className="section-heading text-3xl font-light mb-4">{t('nav.tourisme')}</h2>
          <p className="text-gold-muted font-light leading-relaxed">{c.tourisme}</p>
        </div>

        <div className="container px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.activities.map((a: any, i: number) => (
            <div key={i} className="card overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={images.gallery[ACT_IMG[i] % images.gallery.length]} alt={a.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="section-heading text-xl font-light mb-2">{a.title}</h3>
                <p className="text-gold-muted font-light text-sm leading-relaxed">{a.text}</p>
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
