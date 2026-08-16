import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { images } from '../data/images';
import { siteContent } from '../data/content';

export default function RoomsPage() {
  const { t, lang } = useI18n();
  const c = siteContent[lang].rooms;
  const [photo1, photo2] = images.rooms;

  return (
    <div>
      {/* HERO — first room photo, following the official draft */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${photo1})` }} />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-sand-900/80 via-sand-900/55 to-sand-900" />
        <div className="relative z-20 container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{t('rooms.title')}</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8 max-w-3xl text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <p className="text-gold-muted font-light leading-relaxed text-base md:text-lg">{c.intro}</p>
        </div>
      </section>

      {/* THE TWO ROOM PHOTOS — the official draft's imagery */}
      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure className="card overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={photo1} alt="Chambre Les Mimosas" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <figcaption className="p-5 text-center text-gold-muted font-light text-sm">
              {lang === 'fr' ? 'Chambre Les Mimosas' : lang === 'ar' ? 'غرفة الميموزا' : 'Les Mimosas room'}
            </figcaption>
          </figure>
          <figure className="card overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={photo2} alt="Chambre Les Mimosas" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <figcaption className="p-5 text-center text-gold-muted font-light text-sm">
              {lang === 'fr' ? 'Chambre Les Mimosas' : lang === 'ar' ? 'غرفة الميموزا' : 'Les Mimosas room'}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="py-16 md:py-24 bg-sand-800">
        <div className="container px-4 md:px-8 max-w-3xl">
          <h2 className="section-heading text-2xl font-light mb-6 text-center">{c.equipHeading}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.equip.map((e: string) => (
              <li key={e} className="flex items-center gap-3 text-gold-muted font-light">
                <span className="text-gold">◆</span> {e}
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-gold">{t('hero.cta')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
