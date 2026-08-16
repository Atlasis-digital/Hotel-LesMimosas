import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { images } from '../data/images';

export default function GalleryPage() {
  const { t } = useI18n();
  const [active, setActive] = useState<string | null>(null);
  // gallery already excludes the hero (hero is shown elsewhere) to avoid duplicates
  const all = images.gallery;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div>
      <section className="relative min-h-[45vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${images.gallery[0]})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900 via-sand-900/80 to-sand-900" />
        <div className="relative container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{t('gallery.title')}</h1>
          <p className="text-gold-muted font-light mt-3 max-w-xl mx-auto">{t('gallery.subtitle')}</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {all.map((img, i) => (
            <button key={i} onClick={() => setActive(img)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              aria-label={`${t('gallery.title')} ${i + 1}`}>
              <img src={img} alt={`${t('gallery.title')} ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4" onClick={() => setActive(null)} role="dialog" aria-modal>
          <button className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl" aria-label="Fermer">✕</button>
          <img src={active} alt="Gallery" className="max-w-[92vw] max-h-[92vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
