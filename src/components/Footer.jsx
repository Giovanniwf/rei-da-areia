export default function Footer() {
  return (
    <footer id="contato" style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Top strip */}
      <div style={{
        background: 'var(--yellow)',
        padding: '20px 5%',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ color: 'var(--black)', fontWeight: 700, fontSize: 15 }}>
            Precisa de um orçamento? Fale com a gente agora!
          </p>
          <a href="https://wa.me/5519994382629" target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--black)',
            color: 'var(--yellow)',
            fontWeight: 700,
            fontSize: 13,
            padding: '12px 28px',
            borderRadius: 8,
            display: 'inline-block',
            letterSpacing: 0.5,
          }}>WhatsApp →</a>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 5% 48px' }} className="footer-grid">
        {/* Left - Info */}
        <div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ color: 'white', fontWeight: 800, fontSize: 20 }}>Rei da Areia</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, letterSpacing: 1, textTransform: 'uppercase' }}>Comércio de Areia e Pedra</div>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.8, marginBottom: 32, maxWidth: 320 }}>
            Especialistas no fornecimento de areia e brita com qualidade, agilidade e confiança para impulsionar suas obras.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '📞', label: '+55 (19) 99438-2629', href: 'tel:+5519994382629' },
              { icon: '✉️', label: 'reidaareia@reidaareia.com', href: 'mailto:reidaareia@reidaareia.com' },
              { icon: '📍', label: 'R. São Bento, 1039 - Vila Jose Paulino Nogueira, Paulínia - SP, 13140-421', href: '#' },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                color: 'rgba(255,255,255,0.6)',
                fontSize: 13,
                lineHeight: 1.6,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--yellow)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <span style={{ fontSize: 14, flexShrink: 0 }}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <a href="https://www.instagram.com/rei_da_areia_/" target="_blank" rel="noopener noreferrer" style={{
              width: 44, height: 44,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,193,0,0.15)'; e.currentTarget.style.borderColor = 'rgba(245,193,0,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            >
              <img src="/instagramlogo.png" alt="Instagram" style={{ width: 24, height: 24, objectFit: 'contain' }} />
            </a>
            <a href="https://wa.me/5519994382629" target="_blank" rel="noopener noreferrer" style={{
              width: 44, height: 44,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,193,0,0.15)'; e.currentTarget.style.borderColor = 'rgba(245,193,0,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            >
              <img src="/whatsapplogo.png" alt="WhatsApp" style={{ width: 24, height: 24, objectFit: 'contain' }} />
            </a>
          </div>
        </div>

        {/* Right - Map */}
        <div>
          <h3 style={{ color: 'white', fontWeight: 700, marginBottom: 20, fontSize: 15 }}>Nossa Localização</h3>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            height: 280,
          }}>
            <iframe
              src="https://maps.google.com/maps?q=R.+S%C3%A3o+Bento%2C+1039%2C+Vila+Jose+Paulino+Nogueira%2C+Paul%C3%ADnia%2C+SP%2C+13140-421&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(30%) invert(5%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>
          feito por{' '}
          <a href="https://zeoxy.com.br/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--yellow)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >Zeoxy</a>
        </p>
      </div>
    </footer>
  )
}
