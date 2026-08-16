import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { images } from '../data/images';

export default function BlogPage() {
  const { t } = useI18n();
  const posts = [
    { title: t('blog.p1t'), excerpt: t('blog.p1e'), img: images.hero, cat: t('nav.tabarka') },
    { title: t('blog.p2t'), excerpt: t('blog.p2e'), img: images.gallery[2], cat: t('nav.dining') },
    { title: t('blog.p3t'), excerpt: t('blog.p3e'), img: images.dining, cat: t('nav.dining') },
  ];
  return (
    <div>
      <section className="relative min-h-[45vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900 via-sand-900/80 to-sand-900" />
        <div className="relative container px-4 md:px-8 py-20 text-center">
          <div className="gold-accent-line mx-auto mb-6" />
          <h1 className="section-heading text-4xl md:text-6xl font-light">{t('blog.title')}</h1>
          <p className="text-gold-muted font-light mt-3 max-w-xl mx-auto">{t('blog.intro')}</p>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="card overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs px-2 py-1 rounded-full bg-sand-900 border border-gold/15 text-gold-muted">{p.cat}</span>
                <h2 className="section-heading text-lg font-light mt-3 leading-snug">{p.title}</h2>
                <p className="text-gold-muted font-light text-sm mt-2">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-gold">{t('hero.cta')}</Link>
        </div>
      </section>
    </div>
  );
}
