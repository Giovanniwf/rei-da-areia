import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'

export default function ContatoPage() {
  return (
    <>
      <Navbar />

      <div style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: 76 }}>

        {/* Hero mini */}
        <div style={{
          background: 'var(--yellow)',
          padding: '48px 5% 52px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -60, right: -60,
            width: 280, height: 280, borderRadius: '50%',
            background: 'rgba(0,0,0,0.06)',
          }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 7vw, 84px)',
              color: 'var(--black)', lineHeight: 0.95, marginBottom: 12,
            }}>FALE COM<br />A GENTE</h1>
            <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: 16, fontWeight: 500 }}>
              Estamos prontos para atender você com agilidade e transparência.
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 5% 100px' }}>
          <div className="grid-2col" style={{ gap: 56 }}>

            {/* Coluna esquerda — info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

              {/* Endereço */}
              <div>
                <h3 style={{ color: 'var(--yellow)', fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 2, marginBottom: 12 }}>ENDEREÇO</h3>
                <a
                  href="https://maps.google.com/?q=R.+São+Bento,+1039,+Paulínia,+SP"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--yellow)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                >
                  R. São Bento, 1039 — Vila Jose Paulino Nogueira<br />
                  Paulínia — SP, 13140-421
                </a>
              </div>

              {/* Contato */}
              <div>
                <h3 style={{ color: 'var(--yellow)', fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 2, marginBottom: 12 }}>CONTATO</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { icon: '📞', label: '+55 (19) 99438-2629', href: 'tel:+5519994382629' },
                    { icon: '✉️', label: 'reidaareia@reidaareia.com', href: 'mailto:reidaareia@reidaareia.com' },
                    { icon: '📷', label: '@rei_da_areia', href: 'https://instagram.com/rei_da_areia' },
                  ].map(({ icon, label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      color: 'rgba(255,255,255,0.7)', fontSize: 15,
                      textDecoration: 'none', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--yellow)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                    >
                      <span style={{ fontSize: 16 }}>{icon}</span>
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Horários */}
              <div>
                <h3 style={{ color: 'var(--yellow)', fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 2, marginBottom: 12 }}>HORÁRIOS</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    ['Segundas à Sextas', '07:00 – 17:00'],
                    ['Sábados', '07:00 – 12:00'],
                    ['Domingos e Feriados', 'Fechado'],
                  ].map(([dia, hora]) => (
                    <div key={dia} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 320 }}>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>{dia}</span>
                      <span style={{ color: hora === 'Fechado' ? 'rgba(255,80,80,0.8)' : 'white', fontSize: 14, fontWeight: 600 }}>{hora}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA WhatsApp */}
              <a
                href="https://wa.me/5519994382629"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  background: '#25D366', color: 'white',
                  fontWeight: 700, fontSize: 15,
                  padding: '14px 28px', borderRadius: 10,
                  width: 'fit-content', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1fb858'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>

            {/* Coluna direita — mapa */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ color: 'var(--yellow)', fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 2 }}>LOCALIZAÇÃO</h3>
              <div style={{
                borderRadius: 16, overflow: 'hidden',
                border: '1px solid rgba(245,193,0,0.2)',
                flex: 1, minHeight: 400,
              }}>
                <iframe
                  src="https://maps.google.com/maps?q=R.+S%C3%A3o+Bento%2C+1039%2C+Vila+Jose+Paulino+Nogueira%2C+Paul%C3%ADnia%2C+SP%2C+13140-421&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: 400 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}