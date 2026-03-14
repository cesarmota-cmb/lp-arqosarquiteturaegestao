import { useState } from 'react';
import useUTM from '../hooks/useUTM';
import './LeadModal.css';

const WHATSAPP_NUMBER = '5535997598403';

const LeadModal = ({ isOpen, onClose, source = 'geral' }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const utms = useUTM();

  if (!isOpen) return null;

  // Format phone: keep only digits
  const handleTelefoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
    let formatted = digits;
    if (digits.length > 2) formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length > 7) formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    setTelefone(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const phoneDigits = telefone.replace(/\D/g, '');

    const message = [
      `Olá! Meu nome é ${nome}.`,
      `Gostaria de solicitar um orçamento.`,
    ].filter(Boolean).join('\n');

    // Fire GTM dataLayer event with all tracking data
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_whatsapp',
        lead_nome: nome,
        lead_telefone: phoneDigits,
        lead_source: source,        // which section (hero, processo, casos, etc.)
        utm_source: utms.utm_source || '',
        utm_medium: utms.utm_medium || '',
        utm_campaign: utms.utm_campaign || '',
        utm_term: utms.utm_term || '',
        utm_content: utms.utm_content || '',
        gclid: utms.gclid || '',
        fbclid: utms.fbclid || '',
      });
    }

    // Enviar para o n8n da CMB Mídia (Tracking Completo antes do WhatsApp)
    const n8nData = {
      nome,
      telefone: phoneDigits,
      origem_sessao: source,
      ...utms, // Espalha todos os parâmetros (UTMs, GCLID, Referrer, etc.)
      data_hora: new Date().toLocaleString('pt-BR'),
      url_origem: window.location.href,
      referrer_original: document.referrer || 'direto'
    };

    // Usando CORS padrão (sem no-cors) para que o Content-Type seja aceito pelo n8n
    fetch('https://webhook.cmbmidia.com.br/webhook/8345434d-1fc7-4124-94dd-fd1d30eb6171', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(n8nData),
    }).catch(err => console.error('Erro ao enviar para n8n:', err));

    // Small delay to let GTM fire its tags, then redirect
    setTimeout(() => {
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      setLoading(false);
      onClose();
      setNome('');
      setTelefone('');
    }, 400);
  };

  return (
    <div className="lead-modal-overlay" onClick={onClose}>
      <div className="lead-modal" onClick={(e) => e.stopPropagation()}>
        <button className="lead-modal-close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="lead-modal-header">
          <img src="/logo-marrom.png" alt="Arqos Arquitetura" className="lead-modal-logo" />
          <h2>Solicite Seu Orçamento</h2>
          <p>Preencha rapidamente e fale com um especialista.</p>
        </div>

        <form className="lead-modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="lead-nome">Seu nome</label>
            <input
              id="lead-nome"
              type="text"
              placeholder="Ex: João Silva"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="lead-telefone">Seu WhatsApp</label>
            <input
              id="lead-telefone"
              type="tel"
              placeholder="(35) 99999-9999"
              value={telefone}
              onChange={handleTelefoneChange}
              required
              minLength={14}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary lead-modal-submit"
            disabled={loading}
          >
            {loading ? 'Redirecionando…' : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Falar no WhatsApp
              </>
            )}
          </button>

          <p className="lead-modal-disclaimer">
            Ao realizar o cadastro você será direcionado automaticamente para o nosso whatsapp
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;
