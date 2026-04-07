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
import useUTM from './hooks/useUTM';

const WHATSAPP_NUMBER = '5535997598403';

function AppV2() {
  const utms = useUTM();

  const handleDirectWhatsApp = (source = 'v2_geral') => {
    // 1. Fire GTM Event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_whatsapp_v2',
        lead_source: source,
        ...utms
      });
    }

    // 2. Fire n8n Webhook (Tracking in background)
    const n8nData = {
      tipo_clique: 'direto_v2',
      origem_sessao: source,
      ...utms,
      data_hora: new Date().toLocaleString('pt-BR'),
      url_origem: window.location.href,
      referrer_original: document.referrer || 'direto'
    };

    fetch('https://webhook.cmbmidia.com.br/webhook/8345434d-1fc7-4124-94dd-fd1d30eb6171', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(n8nData),
    }).catch(err => console.error('Erro ao enviar para n8n:', err));

    // 3. Open WhatsApp
    const message = `Olá! Gostaria de solicitar um orçamento (visto na V2).`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

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
    <div className="App AppV2">
      {/* Ordem Solicitada para V2 */}
      <HeroScrollAnimation onOpenModal={handleDirectWhatsApp} />
      <Servicos />
      <Projetos />
      <Diferenciais />
      <ComoFunciona onOpenModal={handleDirectWhatsApp} />
      <ProvaSocial onOpenModal={handleDirectWhatsApp} />
      <QuemSomos />
      <FAQ />
      <CTAFinal onOpenModal={handleDirectWhatsApp} />
      <Footer />
      <StickyWhatsApp onOpenModal={handleDirectWhatsApp} />
    </div>
  );
}

export default AppV2;
