import { useState } from 'react'

export const todosOsProdutos = [
  {
    name: 'Areia Fina',
    img: '/areiafina.png',
    categoria: 'Areia',
    specs: ['Diâmetro dos grãos: Até 0,2 mm.', 'Características: Textura fina e suave.'],
    aplicacoes: [
      'Acabamentos mais delicados, como rebocos lisos e argamassas finas.',
      'Produção de rejuntes e massas para assentamento.',
      'Projetos que exigem superfícies bem niveladas e lisas.',
    ],
  },
  {
    name: 'Areia Média',
    img: '/areiamedia.png',
    categoria: 'Areia',
    specs: ['Diâmetro dos grãos: Entre 0,2 mm e 0,6 mm.', 'Características: Equilíbrio entre resistência e facilidade de manuseio.'],
    aplicacoes: [
      'Assentamento de tijolos e blocos.',
      'Argamassas para reboco interno e externo.',
      'Concretos não estruturais: pisos, calçadas e contrapiso.',
    ],
  },
  {
    name: 'Areia Grossa',
    img: '/areiagrossa.png',
    categoria: 'Areia',
    specs: ['Diâmetro dos grãos: entre 0,6 mm e 2 mm.', 'Características: maior resistência mecânica.'],
    aplicacoes: [
      'Produção de concreto estrutural.',
      'Assentamento de pisos e revestimentos.',
      'Drenagem e filtragem.',
      'Lajes, vigas e pilares.',
    ],
  },
  {
    name: 'Areia para Quadras Esportivas',
    img: '/areiaquadra.png',
    categoria: 'Areia',
    specs: ['Diâmetro dos grãos: geralmente entre fina e média, com características específicas.', 'Características: livre de impurezas, com alta drenagem e sem compactação excessiva.'],
    aplicacoes: [
      'Quadras de beach tênis, futevôlei e vôlei de praia.',
      'Espaços recreativos com areia.',
      'Superfícies que exigem amortecimento.',
    ],
  },
  {
    name: 'Brita 1',
    img: '/brita1.png',
    categoria: 'Pedra',
    specs: ['Aplicações: Concretos estruturais (vigas, colunas, lajes e fundações), pisos de grande circulação.'],
    aplicacoes: [
      'Concretos estruturais: vigas, colunas, lajes e fundações.',
      'Pisos de grande circulação.',
      'Mistura padrão em centrais de concreto.',
    ],
  },
  {
    name: 'Brita 2',
    img: '/brita2.png',
    categoria: 'Pedra',
    specs: ['Tamanho médio: de 19 mm a 25 mm.', 'Características: pedra mais grossa, ideal para maior resistência e volume.'],
    aplicacoes: [
      'Fundações profundas e bases de pavimentação.',
      'Lastros de ferrovias.',
      'Obras de grande porte: barragens e rodovias.',
      'Sistemas de drenagem pesada.',
    ],
  },
  {
    name: 'Brita 3 e Maiores',
    img: '/brita3emaiores.png',
    categoria: 'Pedra',
    specs: ['Tamanho médio: acima de 25 mm.', 'Características: usada em obras de contenção e drenagem.'],
    aplicacoes: [
      'Base para aterros e grandes fundações.',
      'Drenagens profundas.',
      'Muros de arrimo, gabiões e obras de estabilização de solo.',
    ],
  },
  {
    name: 'Pó de Pedra',
    img: '/podepedra.png',
    categoria: 'Pedra',
    specs: ['Tamanho médio: abaixo de 4,8 mm, quase como um pó.', 'Características: material muito fino, semelhante à areia grossa.'],
    aplicacoes: [
      'Substituto da areia em algumas argamassas.',
      'Acabamentos, nivelamento e regularização de pisos.',
      'Base de pavers e áreas com tráfego leve.',
    ],
  },
  {
    name: 'Pedrisco',
    img: '/pedrisco.png',
    categoria: 'Pedra',
    specs: ['Aplicações: Concretos mais leves, lajes pré-moldadas, blocos, vigas e pisos intertravados.'],
    aplicacoes: [
      'Produção de concretos mais leves e resistentes.',
      'Lajes pré-moldadas, blocos e vigas.',
      'Calçadas e pisos intertravados.',
      'Drenagem.',
    ],
  },
  {
    name: 'BGS — Bica Granulada Simples',
    img: '/bgs.png',
    categoria: 'Pedra',
    specs: ['Tamanho: mistura de britas do pó de pedra até brita 1 ou 2.', 'Características: excelente compactação, alta estabilidade e resistência.'],
    aplicacoes: [
      'Base para pavimentações.',
      'Preparação de terrenos para fundações.',
      'Áreas que exigem elevada capacidade de suporte e uniformidade.',
    ],
  },
  {
    name: 'Bica Corrida',
    img: '/bicacorrida.png',
    categoria: 'Pedra',
    specs: ['Tamanho: mistura natural de pó de pedra, pedrisco e britas, sem peneiramento preciso.', 'Características: boa compactação e excelente custo-benefício.'],
    aplicacoes: [
      'Nivelamento e regularização de terrenos.',
      'Preenchimento de áreas de aterramento.',
      'Sub-base para estradas e acessos rurais.',
    ],
  },
]

const homeDestaques = ['Areia para Quadras Esportivas', 'Areia Fina', 'Pó de Pedra']
const destaques = todosOsProdutos.filter(p => homeDestaques.includes(p.name))

function ProdutoCard({ p, showOverlay = false }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        background: 'var(--dark-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        position: 'relative',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(245,193,0,0.3)'; setHovered(true) }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; setHovered(false) }}
    >
      <div style={{ height: 160, position: 'relative', overflow: 'hidden', background: '#111' }}>
        <img src={p.img} alt={p.name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.4s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }} />
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(0,0,0,0.65)',
          color: 'var(--yellow)',
          fontSize: 9, fontWeight: 700, letterSpacing: 1.5,
          padding: '3px 10px', borderRadius: 100, textTransform: 'uppercase',
        }}>{p.categoria}</div>
      </div>

      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{ width: 20, height: 2, background: 'var(--yellow)', borderRadius: 1, marginBottom: 10 }} />
        <h3 style={{ color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 12, lineHeight: 1.3 }}>{p.name}</h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {p.specs.map((spec, j) => (
            <li key={j} style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, lineHeight: 1.6, paddingLeft: 10, borderLeft: '2px solid rgba(245,193,0,0.25)' }}>{spec}</li>
          ))}
        </ul>
      </div>

      {/* Hover overlay — always active, shows aplicações only on products page */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '28px 24px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: hovered ? 'auto' : 'none',
      }}>
        <div style={{ width: 20, height: 2, background: 'var(--yellow)', borderRadius: 1, marginBottom: 12 }} />
        <h3 style={{ color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 14, lineHeight: 1.3 }}>{p.name}</h3>

        {showOverlay && p.aplicacoes && (
          <>
            <p style={{ color: 'var(--yellow)', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>Aplicações</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              {p.aplicacoes.map((ap, j) => (
                <li key={j} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, lineHeight: 1.6, paddingLeft: 10, borderLeft: '2px solid var(--yellow)' }}>{ap}</li>
              ))}
            </ul>
          </>
        )}

        <a
          href="https://wa.me/5519994382629"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--yellow)', color: 'var(--black)',
            fontWeight: 700, fontSize: 13, padding: '12px 20px',
            borderRadius: 8, letterSpacing: 0.5,
            alignSelf: 'flex-start', marginTop: showOverlay ? 0 : 8,
          }}
        >Solicitar Orçamento →</a>
      </div>
    </div>
  )
}

export { ProdutoCard }

export default function Produtos() {
  return (
    <section id="produtos" style={{ background: 'var(--black)', padding: '100px 5%', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'linear-gradient(to right, transparent, var(--yellow), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(44px, 6vw, 76px)', color: 'white', lineHeight: 1 }}>NOSSOS PRODUTOS</h2>
          </div>
          <a href="/produtos"
            style={{ border: '1px solid rgba(245,193,0,0.4)', color: 'var(--yellow)', fontWeight: 600, fontSize: 13, padding: '12px 24px', borderRadius: 8, display: 'inline-block', letterSpacing: 0.5, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.target.style.background = 'var(--yellow)'; e.target.style.color = 'var(--black)' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--yellow)' }}
          >Ver Mais →</a>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 24, height: 1, background: 'var(--yellow)' }} />
          CONFIRA ALGUNS DE NOSSOS PRODUTOS
        </div>

        <div className="grid-products-3">
          {destaques.map((p) => <ProdutoCard key={p.name} p={p} showOverlay={true} />)}
        </div>
      </div>
    </section>
  )
}
