import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { todosOsProdutos, ProdutoCard } from '../components/Produtos'

const areias = todosOsProdutos.filter(p => p.categoria === 'Areia')
const pedras = todosOsProdutos.filter(p => p.categoria === 'Pedra')


export default function ProdutosPage() {
  return (
    <>
      <Navbar />

      {/* Banner topo */}
      <section className="page-hero" style={{
        background: 'var(--black)',
        paddingTop: 70,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/BunnerProdutos.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)',
          transform: 'scale(1.2)',
          opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)',
        }} />

        <div className="grid-2col produtos-banner-grid" style={{
          maxWidth: 1200, margin: '0 auto', padding: '80px 5% 90px',
          position: 'relative', zIndex: 1,
          gap: 48,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(245,193,0,0.15)', border: '1px solid rgba(245,193,0,0.3)',
              borderRadius: 100, padding: '6px 16px', marginBottom: 24,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--yellow)' }} />
              <span style={{ color: 'var(--yellow)', fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' }}>Catálogo Completo</span>
            </div>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 7vw, 88px)',
              lineHeight: 0.95, color: 'white', marginBottom: 24,
            }}>NOSSOS<br /><span style={{ color: 'var(--yellow)' }}>PRODUTOS</span></h1>
            <a href="/#contato" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--yellow)', color: 'var(--black)',
              fontWeight: 700, fontSize: 14, padding: '14px 32px',
              borderRadius: 10, transition: 'all 0.2s',
            }}>Solicitar Orçamento</a>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(245,193,0,0.15)',
            borderRadius: 20, padding: '32px 36px',
          }}>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.9 }}>
              No <strong style={{ color: 'var(--yellow)' }}>Rei da Areia</strong>, oferecemos materiais de alta qualidade
              para construção, com <strong style={{ color: 'white' }}>4 tipos de areias</strong> diferentes para obras e quadras esportivas.
              Além de <strong style={{ color: 'white' }}>7 tipos de pedras</strong> para diferentes aplicações na construção civil.
              Garantimos variedade e excelência para atender suas necessidades.
            </p>
            <div style={{ display: 'flex', gap: 32, marginTop: 24 }}>
              {[['4', 'Tipos de Areia'], ['7', 'Tipos de Pedra'], ['11', 'Produtos']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: 'var(--yellow)', lineHeight: 1 }}>{n}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section style={{ background: 'var(--black)', padding: '80px 5% 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Areias */}
          <div style={{ marginBottom: 72 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--yellow)' }} />
                <span style={{ color: 'var(--yellow)', fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 3 }}>AREIAS</span>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--yellow)' }} />
              </div>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            </div>
            <div className="grid-products-4">
              {areias.map(p => <ProdutoCard key={p.name} p={p} showOverlay={true} />)}
            </div>
          </div>

          {/* Pedras */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--yellow)' }} />
                <span style={{ color: 'var(--yellow)', fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 3 }}>PEDRAS</span>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--yellow)' }} />
              </div>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            </div>
            <div className="grid-products-4">
              {pedras.map(p => <ProdutoCard key={p.name} p={p} showOverlay={true} />)}
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}