import { useState } from 'react';
import PortfolioLayout from './layouts/PortfolioLayout';
import LoadingPage from './views/LoadingPage';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HomeSection from './views/HomeSection';
import AboutSection from './views/AboutmeSection';

function App() {
  const [showLoadingPage, setShowLoadingPage] = useState(true);

  return (
    <div className="relative h-screen min-h-fit text-zinc-600 app">
      <Navbar />

      <PortfolioLayout>
        <HomeSection />
        <AboutSection />
      </PortfolioLayout>

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
