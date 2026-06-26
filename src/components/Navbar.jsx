import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Início',     to: '/' },
  { label: 'Produtos',   to: '/produtos' },
  { label: 'Quem Somos', to: '/quem-somos' },
  { label: 'Contato',    to: '/contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const goHome = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
    }
  }

  const handleNavClick = (to) => {
    setMenuOpen(false)
    navigate(to)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: 'var(--yellow)',
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.35)' : '0 4px 16px rgba(0,0,0,0.2)',
      transition: 'box-shadow 0.3s ease',
    }}>
      {/* Main bar */}
      <div style={{ padding: '0 5%' }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}>
          {/* Logo */}
          <a href="/" onClick={goHome} style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/logoRDAdeitada.png"
              alt="Rei da Areia"
              style={{ height: 62, width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="nav-links">
            {navLinks.map(({ label, to }) => {
              const active = location.pathname === to
              const isHome = to === '/'
              return (
                <a
                  key={label}
                  href={to}
                  onClick={isHome ? goHome : undefined}
                  style={{
                    color: 'var(--black)',
                    fontWeight: active ? 700 : 600,
                    fontSize: 14,
                    padding: '8px 16px',
                    borderRadius: 8,
                    background: active ? 'rgba(0,0,0,0.12)' : 'transparent',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { if (!active) e.target.style.background = 'rgba(0,0,0,0.08)' }}
                  onMouseLeave={e => { if (!active) e.target.style.background = 'transparent' }}
                >{label}</a>
              )
            })}
            <a
              href="https://wa.me/5519994382629"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--black)',
                color: 'var(--yellow)',
                fontWeight: 700,
                fontSize: 13,
                padding: '10px 22px',
                borderRadius: 8,
                marginLeft: 12,
                transition: 'all 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.target.style.background = '#222'; e.target.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.target.style.background = 'var(--black)'; e.target.style.transform = 'translateY(0)' }}
            >Solicitar Orçamento</a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'transparent', color: 'var(--black)', fontSize: 26, padding: 8, lineHeight: 1 }}
            className="hamburger"
          >{menuOpen ? '✕' : '☰'}</button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(({ label, to }) => {
          const isHome = to === '/'
          return (
            <a
              key={label}
              href={to}
              onClick={isHome ? goHome : (e) => { e.preventDefault(); handleNavClick(to) }}
              style={{ fontWeight: location.pathname === to ? 700 : 600 }}
            >{label}</a>
          )
        })}
        <a
          href="https://wa.me/5519994382629"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >Solicitar Orçamento</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
