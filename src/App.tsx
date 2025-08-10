import { AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

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
import LanguageProvider from './components/LanguageProvider';

function App() {
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const resources = [
      '/certs/algorithms-data-structures.jpg',
      '/certs/css-pro.jpg',
      '/certs/design-patterns.jpg',
      '/certs/gen-ai.jpg',
      '/certs/mit.jpg',
      '/certs/responsive-web-design.jpg',
      '/certs/solid-clean-code.jpg',
      '/certs/ts.jpg',
      '/certs/vue.jpg',
      '/bg.webp',
      '/profile.webp',
      '/vc-logo.png',
    ];

    let loadedCount = 0;

    const loadResource = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / resources.length) * 100));
          resolve();
        };
      });

    Promise.all(resources.map(loadResource)).then(() => {
      setTimeout(() => setShowLoadingPage(false), 500);
    });
  }, []);

  return (
    <LanguageProvider>
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
            <LoadingPage progress={progress} key={'loadingPage'} />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

export default App;
