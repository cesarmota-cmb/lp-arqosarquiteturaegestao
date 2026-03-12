import { useEffect, useState } from 'react';
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
import LeadModal from './components/LeadModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('geral');

  const openModal = (source = 'geral') => {
    setModalSource(source);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

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
      <LeadModal isOpen={modalOpen} onClose={closeModal} source={modalSource} />
      <HeroScrollAnimation onOpenModal={openModal} />
      <Diferenciais />
      <ComoFunciona onOpenModal={openModal} />
      <Servicos />
      <Projetos />
      <ProvaSocial onOpenModal={openModal} />
      <QuemSomos />
      <FAQ />
      <CTAFinal onOpenModal={openModal} />
      <Footer />
      <StickyWhatsApp onOpenModal={openModal} />
    </div>
  );
}

export default App;
