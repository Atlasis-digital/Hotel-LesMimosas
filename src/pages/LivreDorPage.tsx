import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

// Illustrious guests from the official "Livre d'Or"
const GUESTS = [
  'Cheb MAMI', 'Duraied LAHHAM', 'Ezzeddine EL KALAK', 'Feiza AHMAD',
  'Frédéric MITTERAND', 'HAKIM', 'Léo FERRÉ', 'Louis ARAGON',
  'M6', 'Myriam MAKEBA', 'Wadii ESSAFI',
];

export default function LivreDorPage() {
  const { t } = useI18n();
  return (
    <div>
      <section className="relative min-h-[45vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-462838f5d616?w=1920&q=80)` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900 via-sand-900/80 to-sand-900" />
        <div className="relative container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{t('nav.livredor')}</h1>
          <p className="text-gold-muted font-light mt-3 max-w-2xl mx-auto">
            {t('livredor.intro')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GUESTS.map((g) => (
              <div key={g} className="card p-6 text-center">
                <div className="text-gold text-2xl mb-2">◆</div>
                <div className="text-white font-serif text-lg font-light">{g}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-gold">{t('hero.cta')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
