const cards = [
  {
    title: 'MISSÃO',
    text: 'Referência em areia e brita, com qualidade, agilidade e confiança para impulsionar obras e o setor da construção civil.',
  },
  {
    title: 'VALORES',
    text: 'Qualidade e confiança em cada entrega, compromisso com o meio ambiente e ética, atendimento ágil e pontual.',
  },
  {
    title: 'VISÃO',
    text: 'Ser referência em areia e brita, com excelência, pontualidade e compromisso, fortalecendo a construção civil com ética e responsabilidade.',
  },
]

function Card({ card }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--mx', `${x}%`)
    e.currentTarget.style.setProperty('--my', `${y}%`)
  }

  return (
    <a
      href="/quem-somos"
      onMouseMove={handleMouseMove}
      onMouseEnter={e => e.currentTarget.classList.add('card-hover')}
      onMouseLeave={e => e.currentTarget.classList.remove('card-hover')}
      className="mvv-card"
      style={{
        background: 'black',
        borderRadius: 'var(--radius-lg)',
        padding: '40px 36px',
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: 'var(--shadow)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'block',
        textDecoration: 'none',
      }}
    >
      {/* Spotlight que segue o mouse */}
      <div className="mvv-spotlight" />

      <div style={{
        width: 28,
        height: 3,
        background: 'var(--yellow)',
        borderRadius: 2,
        marginBottom: 20,
      }} />
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 32,
        color: 'var(--white)',
        marginBottom: 14,
        letterSpacing: 1.5,
        transition: 'color 0.3s ease',
      }} className="mvv-title">{card.title}</h3>
      <p style={{
        color: 'var(--gray)',
        fontSize: 15,
        lineHeight: 1.85,
      }}>{card.text}</p>
    </a>
  )
}

export default function Sobre() {
  return (
    <section id="quem-somos" style={{ background: 'var(--gray-light)', padding: '100px 5%' }}>
      <style>{`
        .mvv-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          --mx: 50%;
          --my: 50%;
        }
        .mvv-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.13);
        }
        .mvv-spotlight {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mx) var(--my), rgba(245,193,0,0.18) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: inherit;
        }
        .mvv-card:hover .mvv-spotlight {
          opacity: 1;
        }
        .mvv-card:hover .mvv-title {
          color: #C49A00;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="mvv-header" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--yellow)',
            color: 'var(--White)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: 100,
            marginBottom: 16,
          }}>Sobre Nós</div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: 'var(--White)',
            lineHeight: 1,
            marginBottom: 20,
          }}>QUEM SOMOS</h2>
          <p style={{
            color: 'var(--gray)',
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            maxWidth: 640,
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Somos especialistas no fornecimento de areia e brita, com foco em qualidade, agilidade e confiança.
            Atuamos com responsabilidade para garantir o sucesso das obras e a satisfação dos nossos clientes.
          </p>
        </div>

        {/* Cards */}
        <div className="mvv-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {cards.map((card, i) => <Card key={i} card={card} />)}
        </div>
      </div>
    </section>
  )
}
