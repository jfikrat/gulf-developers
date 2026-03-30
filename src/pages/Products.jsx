import { useEffect, useRef } from 'preact/hooks'
import { Hero } from '../components/Hero.jsx'
import '../styles/products.css'

const BASE = '/gulf-developers'

const categories = [
  {
    title: 'Tower Cranes',
    description:
      'High-performance tower cranes from world-leading manufacturers, designed for projects of every scale. Our range covers flat-top and hammerhead configurations with capacities from 5 to 12 tonnes.',
    products: [
      {
        name: 'Potain MCT 85 F5',
        badge: 'France',
        gradient: 'linear-gradient(135deg, #0d1b2f 0%, #162c4a 60%, rgba(200, 164, 92, 0.12) 100%)',
        specs: [
          { label: 'Max Capacity', value: '5 Tonnes' },
          { label: 'Jib Length', value: '52 m' },
          { label: 'Max Height', value: '62 m' },
          { label: 'Manufacturer', value: 'Manitowoc' },
        ],
      },
      {
        name: 'Zoomlion TCL5522-12',
        badge: 'China',
        gradient: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 60%, rgba(200, 164, 92, 0.1) 100%)',
        specs: [
          { label: 'Max Capacity', value: '12 Tonnes' },
          { label: 'Jib Length', value: '55 m' },
          { label: 'Max Height', value: '75 m' },
          { label: 'Manufacturer', value: 'Zoomlion' },
        ],
      },
      {
        name: 'Liebherr 85 EC-B 5',
        badge: 'Germany',
        gradient: 'linear-gradient(135deg, #0f1f3a 0%, #142445 60%, rgba(200, 164, 92, 0.15) 100%)',
        specs: [
          { label: 'Max Capacity', value: '5 Tonnes' },
          { label: 'Type', value: 'Flat-Top' },
          { label: 'Max Height', value: '58 m' },
          { label: 'Manufacturer', value: 'Liebherr' },
        ],
      },
    ],
  },
  {
    title: 'Construction Hoists',
    description:
      'Safe and efficient vertical transportation solutions for personnel and materials. Our construction hoists are engineered for reliability, offering capacities from 1,500 kg to 3,200 kg with heights up to 96 meters.',
    products: [
      {
        name: 'GD Scando 650',
        badge: 'Bestseller',
        gradient: 'linear-gradient(135deg, #142445 0%, #1a2a4a 60%, rgba(200, 164, 92, 0.12) 100%)',
        specs: [
          { label: 'Capacity', value: '2,000 kg' },
          { label: 'Max Height', value: '96 m' },
          { label: 'Speed', value: '54 m/min' },
          { label: 'Type', value: 'Personnel & Material' },
        ],
      },
      {
        name: 'GD Mammoth',
        badge: 'Heavy Duty',
        gradient: 'linear-gradient(135deg, #0d1b2f 0%, #162c4a 60%, rgba(200, 164, 92, 0.1) 100%)',
        specs: [
          { label: 'Capacity', value: '3,200 kg' },
          { label: 'Max Height', value: '150 m' },
          { label: 'Speed', value: '72 m/min' },
          { label: 'Type', value: 'Heavy Material' },
        ],
      },
      {
        name: 'GD SC Range',
        badge: 'Compact',
        gradient: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 60%, rgba(200, 164, 92, 0.08) 100%)',
        specs: [
          { label: 'Capacity', value: '1,500 kg' },
          { label: 'Max Height', value: '60 m' },
          { label: 'Speed', value: '36 m/min' },
          { label: 'Type', value: 'Compact Sites' },
        ],
      },
    ],
  },
  {
    title: 'Power Generators',
    description:
      'Reliable diesel generator sets from leading engine manufacturers for continuous and standby power. Silent-type enclosures available for noise-sensitive environments. Ideal for construction sites, industrial facilities, and emergency backup.',
    products: [
      {
        name: 'Cummins 500kVA Diesel Generator',
        badge: 'Premium',
        gradient: 'linear-gradient(135deg, #0f1f3a 0%, #1a2a4a 60%, rgba(200, 164, 92, 0.12) 100%)',
        specs: [
          { label: 'Power', value: '500 kVA' },
          { label: 'Engine', value: 'Cummins QSZ13' },
          { label: 'Frequency', value: '50 Hz' },
          { label: 'Type', value: 'Open / Silent' },
        ],
      },
      {
        name: 'Baudouin 350kVA Diesel Generator',
        badge: 'Efficient',
        gradient: 'linear-gradient(135deg, #142445 0%, #0d1b2f 60%, rgba(200, 164, 92, 0.1) 100%)',
        specs: [
          { label: 'Power', value: '350 kVA' },
          { label: 'Engine', value: 'Baudouin 6M16' },
          { label: 'Frequency', value: '50 Hz' },
          { label: 'Type', value: 'Silent Canopy' },
        ],
      },
      {
        name: 'Green Power 1500rpm Silent',
        badge: 'Silent',
        gradient: 'linear-gradient(135deg, #0a1628 0%, #162c4a 60%, rgba(200, 164, 92, 0.15) 100%)',
        specs: [
          { label: 'Speed', value: '1500 RPM' },
          { label: 'Noise', value: '<75 dB(A)' },
          { label: 'Frequency', value: '50 Hz' },
          { label: 'Type', value: 'Super Silent' },
        ],
      },
    ],
  },
  {
    title: 'Solar Energy Systems',
    description:
      'Complete solar energy solutions including high-efficiency monocrystalline panels, energy storage batteries, and system accessories. Designed for both on-grid and off-grid applications, reducing energy costs and environmental impact.',
    products: [
      {
        name: 'LONGI Hi-MO 6 600W Panel',
        badge: 'Latest',
        gradient: 'linear-gradient(135deg, #0d1b2f 0%, #0a1628 60%, rgba(200, 164, 92, 0.12) 100%)',
        specs: [
          { label: 'Power', value: '600 W' },
          { label: 'Efficiency', value: '22.8%' },
          { label: 'Type', value: 'Monocrystalline' },
          { label: 'Manufacturer', value: 'LONGI Solar' },
        ],
      },
      {
        name: 'LONGI Hi-MO 5M 550W Panel',
        badge: 'Popular',
        gradient: 'linear-gradient(135deg, #142445 0%, #1a2a4a 60%, rgba(200, 164, 92, 0.1) 100%)',
        specs: [
          { label: 'Power', value: '550 W' },
          { label: 'Efficiency', value: '21.3%' },
          { label: 'Type', value: 'Monocrystalline' },
          { label: 'Manufacturer', value: 'LONGI Solar' },
        ],
      },
      {
        name: '12V 600AH Battery Storage',
        badge: 'Storage',
        gradient: 'linear-gradient(135deg, #0a1628 0%, #0f1f3a 60%, rgba(200, 164, 92, 0.08) 100%)',
        specs: [
          { label: 'Voltage', value: '12V' },
          { label: 'Capacity', value: '600 AH' },
          { label: 'Type', value: 'Rechargeable' },
          { label: 'Cycle Life', value: '3000+' },
        ],
      },
    ],
  },
]

export function Products() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div class="products-page">
      <Hero
        title="Our Products"
        breadcrumb="Products"
        description="World-class construction equipment and energy systems sourced from leading global manufacturers."
      />

      {categories.map((cat, catIdx) => (
        <section class="product-category" key={catIdx}>
          <div class="container">
            <div class="product-category__header fade-in">
              <div class="gold-line" />
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
            </div>
            <div class="product-category__grid">
              {cat.products.map((product, i) => (
                <div class="product-item fade-in" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                  <div class="product-item__image" style={{ background: product.gradient }}>
                    <span class="product-label">{product.name}</span>
                    {product.badge && (
                      <span class="product-item__badge">{product.badge}</span>
                    )}
                  </div>
                  <div class="product-item__body">
                    <h3>{product.name}</h3>
                    <div class="product-item__specs">
                      {product.specs.map((spec, si) => (
                        <div class="product-item__spec" key={si}>
                          <span class="product-item__spec-label">{spec.label}</span>
                          <span class="product-item__spec-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <a href={`${BASE}/contact`} class="product-item__cta">
                      Request Quote
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-section__inner fade-in">
            <h2>Need Custom Specifications?</h2>
            <p>
              Our team can source equipment tailored to your exact project requirements.
              Contact us for a personalized consultation.
            </p>
            <div class="cta-section__actions">
              <a href={`${BASE}/contact`} class="btn btn--primary">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
