import React from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { HOTEL } from '../data/translations';

export default function LegalPage() {
  const { t, lang } = useI18n();
  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-8 max-w-3xl">
          <div className="gold-accent-line mb-6" />
          <h1 className="section-heading text-3xl md:text-4xl font-light mb-6">{t('footer.legal')}</h1>
          <div className="space-y-5 text-gold-muted font-light leading-relaxed text-sm md:text-base" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <p>{HOTEL.name} — {HOTEL.address}. {t('footer.tagline')}</p>
            <p>★ {HOTEL.rating}/5 · {HOTEL.reviewCount} {t('stats.reviews')}.</p>
            <p>© {new Date().getFullYear()} {HOTEL.name}. {t('footer.rights')}</p>
            <p>{t('footer.privacy')} · {t('footer.legal')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
