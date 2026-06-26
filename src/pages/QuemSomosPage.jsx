import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function QuemSomosPage() {
  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <section className="page-hero" style={{
        background: 'var(--black)',
        paddingTop: 76,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/QuemSomos1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          transform: 'scale(1.04)',
          opacity: 0.2,
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.92))' }} />
        <div className="page-hero-inner" style={{ maxWidth: 1280, margin: '0 auto', paddingLeft: '5%', paddingRight: '5%', position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(48px, 7vw, 84px)',
            color: 'white', lineHeight: 0.95,
          }}>QUEM <span style={{ color: 'var(--yellow)' }}>SOMOS</span></h1>
        </div>
      </section>

      {/* Sobre */}
      <section style={{ background: '#0d0d0d', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: 40, height: 3, background: 'var(--yellow)', borderRadius: 2, margin: '0 auto 24px' }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px, 4vw, 46px)', color: 'white', marginBottom: 20, letterSpacing: 1 }}>SOBRE A EMPRESA</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.9 }}>
              Somos uma empresa especializada no fornecimento de areia e brita, com foco em qualidade, pontualidade
              e atendimento eficiente. Atuamos com responsabilidade e compromisso, contribuindo para o sucesso das
              obras e o desenvolvimento do setor da construção civil.
            </p>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section style={{ background: 'var(--black)', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid-2col">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ width: 4, height: 48, background: 'var(--yellow)', borderRadius: 2 }} />
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', letterSpacing: 2 }}>MISSÃO</h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.9 }}>
              Ser referência no fornecimento de areia e brita, oferecendo produtos de qualidade com agilidade,
              confiança e responsabilidade, contribuindo para o sucesso das obras dos nossos clientes e o
              desenvolvimento da construção civil.
            </p>
          </div>
          <div className="qs-img" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(245,193,0,0.15)', aspectRatio: '4/3', background: '#1a1a1a' }}>
            <img src="/QuemSomos1.jpg" alt="Missão" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Visão */}
      <section style={{ background: '#0d0d0d', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid-2col">
          <div className="qs-img qs-img-last" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(245,193,0,0.15)', aspectRatio: '4/3', background: '#1a1a1a' }}>
            <img src="/QuemSomos2.jpg" alt="Visão" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className="qs-text-first">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ width: 4, height: 48, background: 'var(--yellow)', borderRadius: 2 }} />
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', letterSpacing: 2 }}>VISÃO</h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.9, marginBottom: 12 }}>
              Ser reconhecido como a principal referência no fornecimento de areia e brita, atuando com excelência, compromisso e inovação.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.9, marginBottom: 12 }}>
              Buscamos fortalecer a construção civil por meio de entregas pontuais, produtos de alta qualidade e um atendimento que valoriza cada cliente.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.9 }}>
              Queremos crescer junto com nossos parceiros, sempre com responsabilidade ambiental e ética nos negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section style={{ background: 'var(--black)', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid-2col">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ width: 4, height: 48, background: 'var(--yellow)', borderRadius: 2 }} />
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', letterSpacing: 2 }}>VALORES</h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.9, marginBottom: 24 }}>
              No Rei da Areia, atuamos com firmeza e compromisso em cada entrega.
            </p>
            {[
              ['Liderança e confiança', 'Atuamos com a segurança de quem entende do negócio e entrega o que promete.'],
              ['Qualidade garantida', 'Nossos produtos são selecionados para garantir segurança e durabilidade nas obras.'],
              ['Compromisso com o cliente', 'Atendimento ágil, transparente e focado nas necessidades de cada projeto.'],
              ['Pontualidade', 'Sabemos que tempo é material de obra, por isso entregamos sempre no prazo.'],
              ['Responsabilidade ambiental', 'Trabalhamos com consciência e respeito à natureza e ao futuro.'],
              ['Crescimento com ética', 'Evoluímos lado a lado com nossos parceiros, sempre com honestidade e respeito.'],
            ].map(([titulo, desc]) => (
              <div key={titulo} style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--yellow)', marginTop: 8, flexShrink: 0 }} />
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.8 }}>
                  <strong style={{ color: 'white' }}>{titulo}:</strong> {desc}
                </p>
              </div>
            ))}
          </div>
          <div className="qs-img" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(245,193,0,0.15)', aspectRatio: '4/3', background: '#1a1a1a' }}>
            <img src="/QuemSomos3.jpg" alt="Valores" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
