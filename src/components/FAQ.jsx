import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      pergunta: 'Quanto custa um projeto?',
      resposta: 'O valor depende do tipo de projeto, tamanho do imóvel, e complexidade. Fazemos uma reunião (online ou presencial), entendemos seu projeto, e apresentamos uma proposta personalizada com processo, etapas e valor. É transparente, claro, e sem surpresas.'
    },
    {
      pergunta: 'Vocês atendem fora de Itajubá?',
      resposta: 'Sim! Atendemos Itajubá e região. Trabalhamos com reuniões presenciais e online, facilitando o processo mesmo para clientes de cidades próximas.'
    },
    {
      pergunta: 'Qual a diferença entre projeto arquitetônico e gestão de obra?',
      resposta: 'O projeto arquitetônico é o "o quê" e "como": plantas, 3D, especificações técnicas, detalhamento. A gestão de obra é o "executar com controle": acompanhamento técnico, controle de orçamento, cronograma, qualidade, fornecedores. A ARQOS oferece os dois — e isso é raro. Quem projeta acompanha a execução, reduzindo risco e aumentando previsibilidade.'
    },
    {
      pergunta: 'Como funciona o pagamento?',
      resposta: 'Aceitamos Pix, boleto, Pix parcelado, e cartão de crédito. O pagamento é dividido em etapas conforme andamento do projeto, trazendo segurança para você e para nós.'
    },
    {
      pergunta: 'Quanto tempo leva um projeto?',
      resposta: 'Depende da complexidade. Um projeto de interiores para apartamento de acordo com a quantidade de ambientes e tamanho do imóvel. Projeto arquitetônico completo com aprovação na prefeitura pode levar de 60 a 90 dias. Na reunião inicial, te damos um cronograma realista baseado no seu caso.'
    },
    {
      pergunta: 'Por que o 3D no pré-projeto é importante?',
      resposta: 'Porque você vê antes de executar. Muitos clientes têm medo de aprovar algo e só descobrir "como ficou" depois de pronto. Com o 3D no pré-projeto, você aprova com segurança, reduz retrabalho, e evita o famoso "não era isso que eu imaginava". É controle, transparência, e menos risco para você.'
    },
    {
      pergunta: 'Vocês cobram pela primeira visita?',
      resposta: 'Não. A primeira conversa é gratuita. Só cobramos visitas adicionais antes do fechamento do projeto, caso sejam necessárias. Nossa prioridade é entender seu projeto e apresentar uma proposta de valor.'
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section-padding" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Dúvidas Frequentes</span>
          <h2 className="section-title">Perguntas que todo mundo faz</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.pergunta}
              </div>
              <div className="faq-answer">
                {faq.resposta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
