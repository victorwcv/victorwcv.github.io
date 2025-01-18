import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

import PortfolioLayout from './layouts/PortfolioLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingPage from './views/LoadingPage';
import HomeSection from './views/HomeSection';
import AboutSection from './views/AboutmeSection';
import ResumeSection from './views/ResumeSection';
import PortfolioSection from './views/PortfolioSection';
import ContactSection from './views/ContactSection';
import Stats from './views/Stats';
import ResponsiveNav from './components/ResponsiveNav';

function App() {
  const [showLoadingPage, setShowLoadingPage] = useState(true);

  return (
    <div className="relative min-h-fit text-zinc-700">
      <Navbar />
      <ResponsiveNav />
      <PortfolioLayout>
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
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
