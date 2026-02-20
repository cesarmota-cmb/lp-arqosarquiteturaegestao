import { useEffect } from 'react';
import HeroScrollAnimation from './components/HeroScrollAnimation';
import Diferenciais from './components/Diferenciais';
import ComoFunciona from './components/ComoFunciona';
import Servicos from './components/Servicos';
import Projetos from './components/Projetos';
import ProvaSocial from './components/ProvaSocial';
import QuemSomos from './components/QuemSomos';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';

function App() {
  useEffect(() => {
    // Smooth scroll para links âncora
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="App">
      <HeroScrollAnimation />
      <Diferenciais />
      <ComoFunciona />
      <Servicos />
      <Projetos />
      <ProvaSocial />
      <QuemSomos />
      <FAQ />
      <CTAFinal />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

export default App;
