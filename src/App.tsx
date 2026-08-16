import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import SiteFooter from './components/SiteFooter';
import { I18nProvider } from './i18n/I18nProvider';
import { HOTEL } from './data/translations';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const RoomsPage = lazy(() => import('./pages/RoomsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const DiningPage = lazy(() => import('./pages/DiningPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const PiscinePage = lazy(() => import('./pages/PiscinePage'));
const TabarkaPage = lazy(() => import('./pages/TabarkaPage'));
const LivreDorPage = lazy(() => import('./pages/LivreDorPage'));
const ReservationPage = lazy(() => import('./pages/ReservationPage'));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-900">
      <div className="w-10 h-10 border-4 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in-up').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <I18nProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-sand-900 flex flex-col">
          <Navigation />
          <main id="main-content" className="flex-1 pt-16">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/rooms" element={<RoomsPage />} />
                <Route path="/dining" element={<DiningPage />} />
                <Route path="/piscine" element={<PiscinePage />} />
                <Route path="/tabarka" element={<TabarkaPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/livredor" element={<LivreDorPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/legal" element={<LegalPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          {/* ONE footer, rendered once for the whole site */}
          <SiteFooter />
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}

// re-export so pages can import HOTEL without duplicating
export { HOTEL };
