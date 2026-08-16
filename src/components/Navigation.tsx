import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../i18n/I18nProvider';
import { HOTEL } from '../data/translations';

export default function Navigation() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const { t } = useI18n();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/rooms', label: t('nav.rooms') },
    { to: '/dining', label: t('nav.dining') },
    { to: '/piscine', label: t('nav.piscine') },
    { to: '/tabarka', label: t('nav.tabarka') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/livredor', label: t('nav.livredor') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-sand-900/95 backdrop-blur-sm border-b border-gold/20">
      <nav className="container px-4 md:px-8" aria-label="Main">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-white font-serif text-lg font-light truncate">
            <span className="text-gold">◆</span>
            <span className="max-w-[140px] md:max-w-none truncate">{HOTEL.name}</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-light transition-colors hover:text-gold ${
                  location.pathname === l.to ? 'text-gold' : 'text-gold-muted'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitcher />
            <a href="/contact" className="hidden sm:inline-flex btn-gold text-sm">{t('nav.book')}</a>
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fermer' : 'Ouvrir'}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-light transition-colors hover:text-gold ${
                    location.pathname === l.to ? 'text-gold' : 'text-gold-muted'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2">
                {t('nav.book')}
              </a>
              <div className="pt-3 border-t border-gold/20 flex flex-col gap-2 text-sm font-light text-gold-muted">
                <span dir="auto">📞 {HOTEL.phone}</span>
                <span dir="auto">✉️ {HOTEL.email}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
