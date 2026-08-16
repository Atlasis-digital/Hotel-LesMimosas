import React from 'react';
import { LANGS } from '../data/translations';
import { useI18n } from '../i18n/I18nProvider';

// Compact language switcher: FR / EN / AR. Arabic flips the whole layout to RTL.
export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center gap-1 rounded-full border border-gold/20 bg-sand-800/60 p-1" role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
            lang === l.code ? 'bg-gold text-sand-900' : 'text-gold-muted hover:text-gold'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
