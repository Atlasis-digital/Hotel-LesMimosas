import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { HOTEL } from '../data/translations';
import { siteContent } from '../data/content';

export default function ReservationPage() {
  const { t, lang } = useI18n();
  const f = siteContent[lang].form;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const FIELDS = [
    { id: 'nom', label: f.nom, required: true },
    { id: 'prenom', label: f.prenom, required: true },
    { id: 'adresse', label: f.adresse },
    { id: 'pays', label: f.pays, required: true },
    { id: 'tel_domicile', label: f.telDomicile, required: true },
    { id: 'tel_portable', label: f.telPortable, required: true },
    { id: 'fax', label: f.fax, required: true },
    { id: 'email', label: f.email, type: 'email', required: true },
    { id: 'adultes', label: f.adultes, type: 'number' },
    { id: 'enfants_moins2', label: f.enfantsMoins2, type: 'number' },
    { id: 'enfants_plus2', label: f.enfantsPlus2, type: 'number' },
    { id: 'logements', label: f.logements, type: 'number' },
    { id: 'date_arrivee', label: f.dateArrivee, type: 'date', required: true },
    { id: 'date_depart', label: f.dateDepart, type: 'date', required: true },
  ];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await fetch('/api/booking', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).catch(() => {});
    } catch {}
    setStatus('success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <section className="relative min-h-[45vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${HOTEL.website ? 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80' : ''})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900 via-sand-900/80 to-sand-900" />
        <div className="relative container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{siteContent[lang].reservation.intro}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8 max-w-3xl">
          <form onSubmit={onSubmit} className="card p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {FIELDS.map((fld) => (
              <div key={fld.id} className={(fld.id === 'adresse' || fld.id.startsWith('date') || fld.id === 'email') ? 'md:col-span-2' : ''}>
                <label htmlFor={fld.id} className="block text-gold-muted text-sm mb-2">{fld.label}{fld.required ? ' *' : ''}</label>
                <input id={fld.id} name={fld.id} type={fld.type || 'text'} required={fld.required}
                  className="w-full px-4 py-3 bg-sand-900 border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-white" />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-gold-muted text-sm mb-2">{f.arrangement}</label>
              <select name="arrangement" className="w-full px-4 py-3 bg-sand-900 border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-white">
                {f.arrangements.map((a: string) => <option key={a}>{a}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gold-muted text-sm mb-2">{f.commentaire}</label>
              <textarea name="commentaire" rows={4} className="w-full px-4 py-3 bg-sand-900 border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-white" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" disabled={status === 'submitting'} className="btn-gold w-full disabled:opacity-60">
                {status === 'submitting' ? '…' : t('contact.send')}
              </button>
              {status === 'success' && <p className="mt-4 text-center text-green-300 text-sm">{t('contact.sent')}</p>}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
