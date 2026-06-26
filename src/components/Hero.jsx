import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const slides = [
  {
    tag: 'Qualidade Garantida',
    title: 'TEMOS O',
    highlight: 'MELHOR VALOR',
    sub: 'DO MERCADO',
    desc: 'Areia, brita e materiais de construção com entrega rápida e preço justo em Paulínia e região.',
    cta: 'Ver Produtos',
    ctaLink: '/produtos',
    img: '/bunner2.jpg',
    mobilePos: 'center right',
  },
  {
    tag: 'Entrega Rápida',
    title: 'ESPECIALISTAS',
    highlight: 'EM AREIA',
    sub: 'E BRITA',
    desc: 'Mais de anos de experiência fornecendo materiais de construção com excelência e pontualidade.',
    cta: 'Fale Conosco',
    ctaLink: '/contato',
    img: '/Bunner1.png',
    mobilePos: 'center right',
  },
  {
    tag: 'Confie em Nós',
    title: 'REFERÊNCIA',
    highlight: 'NA REGIÃO',
    sub: 'DE PAULÍNIA',
    desc: 'Compromisso com o meio ambiente e ética, atendimento ágil e pontual para impulsionar suas obras.',
    cta: 'Saiba Mais',
    ctaLink: '/quem-somos',
    img: '/bunner3.jpg',
    mobilePos: 'center',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const navigate = useNavigate()
  const touchStartX = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [current])

  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 300)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goTo((current + 1) % slides.length)
      } else {
        goTo((current - 1 + slides.length) % slides.length)
      }
    }
    touchStartX.current = null
  }

  const s = slides[current]

  return (
    <section
      id="inicio"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Banner images — crossfade */}
      {slides.map((slide, i) => (
        <div key={i} className={`hero-bg-slide hero-bg-slide-${i}`} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${slide.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 0.8s ease',
          filter: 'blur(2px)',
          transform: 'scale(1.02)',
          zIndex: 0,
        }} />
      ))}

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.88) 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 0% 60%, rgba(245,193,0,0.06) 0%, transparent 55%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      <div className="hero-content" style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '120px 5% 80px',
        width: '100%',
        position: 'relative',
        zIndex: 2,
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(20px)' : 'translateY(0)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}>
        {/* Tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(245,193,0,0.15)', border: '1px solid rgba(245,193,0,0.3)',
          borderRadius: 100, padding: '6px 16px', marginBottom: 32,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--yellow)' }} />
          <span style={{ color: 'var(--yellow)', fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' }}>{s.tag}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px, 9vw, 110px)', lineHeight: 0.95, color: 'white', marginBottom: 8 }}>{s.title}</h1>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px, 9vw, 110px)', lineHeight: 0.95, color: 'var(--yellow)', marginBottom: 8 }}>{s.highlight}</h1>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>{s.sub}</h1>

        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(14px, 1.5vw, 18px)', maxWidth: 500, lineHeight: 1.7, marginBottom: 48 }}>{s.desc}</p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <button onClick={() => navigate(s.ctaLink)} style={{
            background: 'var(--yellow)', color: 'var(--black)',
            fontWeight: 700, fontSize: 15, padding: '16px 36px',
            borderRadius: 10, border: 'none', cursor: 'pointer', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--yellow-dark)'; e.target.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--yellow)'; e.target.style.transform = 'translateY(0)' }}
          >{s.cta}</button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 8, marginLeft: 8 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: i === current ? 32 : 8, height: 8,
                borderRadius: 4,
                background: i === current ? 'var(--yellow)' : 'rgba(255,255,255,0.25)',
                border: 'none', transition: 'all 0.3s ease', padding: 0, cursor: 'pointer',
              }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-bg-slide-0 { background-position: 70% center !important; }
          .hero-bg-slide-1 { background-position: 70% center !important; }
          .hero-bg-slide-2 { background-position: center center !important; }

          .hero-content {
            padding-top: 110px !important;
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </section>
  )
}
