import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { HOTEL } from '../data/translations';

// Single, correct footer. Real hotel business info only — NO code/JSON/AI text.
export default function SiteFooter() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  const explore = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/rooms', label: t('nav.rooms') },
    { to: '/dining', label: t('nav.dining') },
    { to: '/piscine', label: t('nav.piscine') },
    { to: '/tabarka', label: t('nav.tabarka') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/livredor', label: t('nav.livredor') },
    { to: '/reservation', label: t('nav.reserve') },
  ];

  return (
    <footer className="bg-sand-800 border-t border-gold/20" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-2 text-white font-serif text-xl font-light mb-3">
              <span className="text-gold">◆</span>
              <span>{HOTEL.name}</span>
            </div>
            <p className="text-gold-muted font-light text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
            <div className="mt-4 flex items-center gap-1 text-gold" aria-hidden>
              {'★'.repeat(Math.round(HOTEL.rating))}
              <span className="text-gold-muted text-xs ml-2">{HOTEL.rating}/5 · {HOTEL.reviewCount} {t('stats.reviews')}</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-serif text-base mb-4">{t('footer.explore')}</h3>
            <ul className="space-y-2 text-gold-muted font-light text-sm">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-base mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gold-muted font-light text-sm">
              <li dir="auto">📍 {HOTEL.address}</li>
              <li dir="auto">📞 <a href={`tel:${HOTEL.phone}`} className="hover:text-gold">{HOTEL.phone}</a></li>
              <li dir="auto">✉️ <a href={`mailto:${HOTEL.email}`} className="hover:text-gold">{HOTEL.email}</a></li>
              <li><a href={HOTEL.website} target="_blank" rel="noopener noreferrer" className="hover:text-gold">{t('nav.book')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gold-muted/70">
          <span>© {year} {HOTEL.name}. {t('footer.rights')}</span>
          <div className="flex gap-4">
            <Link to="/legal" className="hover:text-gold">{t('footer.legal')}</Link>
            <Link to="/legal" className="hover:text-gold">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
