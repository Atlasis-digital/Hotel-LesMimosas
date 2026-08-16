import React, { createContext, useContext, useEffect, useState } from 'react';
import { Lang, getT, RTL_LANGS } from '../data/translations';

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'lm-lang';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return (saved as Lang) || 'fr';
  });

  const isRtl = RTL_LANGS.includes(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, isRtl]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (key: string) => getT(lang, key);

  return <I18nContext.Provider value={{ lang, setLang, t, isRtl }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
