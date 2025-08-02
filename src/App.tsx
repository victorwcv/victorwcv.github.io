import { AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import PortfolioLayout from './layouts/PortfolioLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingPage from './views/LoadingPage';
import HomeSection from './views/HomeSection';
import AboutSection from './views/AboutmeSection';
import ResumeSection from './views/ResumeSection';
// import PortfolioSection from './views/PortfolioSection';
import ContactSection from './views/ContactSection';
import Stats from './views/Stats';
import ResponsiveNav from './components/ResponsiveNav';

function App() {
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get('lang');
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [location.search, i18n]);

  return (
    <div className="relative min-h-fit text-zinc-700">
      <Navbar />
      <ResponsiveNav />
      <PortfolioLayout>
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        {/* <PortfolioSection /> */}
        <Stats />
        <ContactSection />
      </PortfolioLayout>

      <Footer />

      <AnimatePresence>
        {showLoadingPage && (
          <LoadingPage
            onAnimationComplete={setShowLoadingPage}
            key={'loadingPage'}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
