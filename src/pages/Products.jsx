import { useEffect, useRef, useState } from 'preact/hooks'
import { Hero } from '../components/Hero.jsx'
import { Lightbox } from '../components/Lightbox.jsx'
import { useLang } from '../context/LangContext.jsx'
import '../styles/products.css'

const BASE = '/gulf-developers'

const categories = [
  {
    titleKey: 'cat.cranes',
    descKey: 'pcat.cranes.desc',
    headerImage: 'crane1.jpg',
    products: [
      {
        name: 'Potain MCT 85 F5',
        badge: 'France',
        image: `${BASE}/images/products/crane-potain.jpg`,
        specs: [
          { labelKey: 'spec.maxCapacity', value: '5 Tonnes' },
          { labelKey: 'spec.jibLength', value: '52 m' },
          { labelKey: 'spec.maxHeight', value: '62 m' },
          { labelKey: 'spec.manufacturer', value: 'Manitowoc' },
        ],
      },
      {
        name: 'Zoomlion TCL5522-12',
        badge: 'China',
        image: `${BASE}/images/products/crane-zoomlion.jpg`,
        specs: [
          { labelKey: 'spec.maxCapacity', value: '12 Tonnes' },
          { labelKey: 'spec.jibLength', value: '55 m' },
          { labelKey: 'spec.maxHeight', value: '75 m' },
          { labelKey: 'spec.manufacturer', value: 'Zoomlion' },
        ],
      },
      {
        name: 'Liebherr 85 EC-B 5',
        badge: 'Germany',
        image: `${BASE}/images/products/crane-liebherr.jpg`,
        specs: [
          { labelKey: 'spec.maxCapacity', value: '5 Tonnes' },
          { labelKey: 'spec.type', value: 'Flat-Top' },
          { labelKey: 'spec.maxHeight', value: '58 m' },
          { labelKey: 'spec.manufacturer', value: 'Liebherr' },
        ],
      },
    ],
  },
  {
    titleKey: 'cat.hoists',
    descKey: 'pcat.hoists.desc',
    headerImage: 'construction.jpg',
    products: [
      {
        name: 'GD Scando 650',
        badge: 'Bestseller',
        image: `${BASE}/images/products/hoist-scando.jpg`,
        specs: [
          { labelKey: 'spec.capacity', value: '2,000 kg' },
          { labelKey: 'spec.maxHeight', value: '96 m' },
          { labelKey: 'spec.speed', value: '54 m/min' },
          { labelKey: 'spec.type', value: 'Personnel & Material' },
        ],
      },
      {
        name: 'GD Mammoth',
        badge: 'Heavy Duty',
        image: `${BASE}/images/products/hoist-mammoth.jpg`,
        specs: [
          { labelKey: 'spec.capacity', value: '3,200 kg' },
          { labelKey: 'spec.maxHeight', value: '150 m' },
          { labelKey: 'spec.speed', value: '72 m/min' },
          { labelKey: 'spec.type', value: 'Heavy Material' },
        ],
      },
      {
        name: 'GD SC Range',
        badge: 'Compact',
        image: `${BASE}/images/products/hoist-sc.jpg`,
        specs: [
          { labelKey: 'spec.capacity', value: '1,500 kg' },
          { labelKey: 'spec.maxHeight', value: '60 m' },
          { labelKey: 'spec.speed', value: '36 m/min' },
          { labelKey: 'spec.type', value: 'Compact Sites' },
        ],
      },
    ],
  },
  {
    titleKey: 'cat.generators',
    descKey: 'pcat.generators.desc',
    headerImage: 'generator.jpg',
    products: [
      {
        name: 'Cummins 500kVA Diesel Generator',
        badge: 'Premium',
        image: `${BASE}/images/products/gen-cummins.jpg`,
        specs: [
          { labelKey: 'spec.power', value: '500 kVA' },
          { labelKey: 'spec.engine', value: 'Cummins QSZ13' },
          { labelKey: 'spec.frequency', value: '50 Hz' },
          { labelKey: 'spec.type', value: 'Open / Silent' },
        ],
      },
      {
        name: 'Baudouin 350kVA Diesel Generator',
        badge: 'Efficient',
        image: `${BASE}/images/products/gen-baudouin.jpg`,
        specs: [
          { labelKey: 'spec.power', value: '350 kVA' },
          { labelKey: 'spec.engine', value: 'Baudouin 6M16' },
          { labelKey: 'spec.frequency', value: '50 Hz' },
          { labelKey: 'spec.type', value: 'Silent Canopy' },
        ],
      },
      {
        name: 'Green Power 1500rpm Silent',
        badge: 'Silent',
        image: `${BASE}/images/products/gen-greenpower.jpg`,
        specs: [
          { labelKey: 'spec.speed', value: '1500 RPM' },
          { labelKey: 'spec.noise', value: '<75 dB(A)' },
          { labelKey: 'spec.frequency', value: '50 Hz' },
          { labelKey: 'spec.type', value: 'Super Silent' },
        ],
      },
    ],
  },
  {
    titleKey: 'cat.solar',
    descKey: 'pcat.solar.desc',
    headerImage: 'solar2.jpg',
    products: [
      {
        name: 'LONGI Hi-MO 6 600W Panel',
        badge: 'Latest',
        image: `${BASE}/images/products/solar-himo6.jpg`,
        specs: [
          { labelKey: 'spec.power', value: '600 W' },
          { labelKey: 'spec.efficiency', value: '22.8%' },
          { labelKey: 'spec.type', value: 'Monocrystalline' },
          { labelKey: 'spec.manufacturer', value: 'LONGI Solar' },
        ],
      },
      {
        name: 'LONGI Hi-MO 5M 550W Panel',
        badge: 'Popular',
        image: `${BASE}/images/products/solar-himo5.jpg`,
        specs: [
          { labelKey: 'spec.power', value: '550 W' },
          { labelKey: 'spec.efficiency', value: '21.3%' },
          { labelKey: 'spec.type', value: 'Monocrystalline' },
          { labelKey: 'spec.manufacturer', value: 'LONGI Solar' },
        ],
      },
      {
        name: '12V 600AH Battery Storage',
        badge: 'Storage',
        image: `${BASE}/images/products/solar-battery.jpg`,
        specs: [
          { labelKey: 'spec.voltage', value: '12V' },
          { labelKey: 'spec.capacity', value: '600 AH' },
          { labelKey: 'spec.type', value: 'Rechargeable' },
          { labelKey: 'spec.cycleLife', value: '3000+' },
        ],
      },
    ],
  },
]

export function Products() {
  const observerRef = useRef(null)
  const { t } = useLang()
  const [lightboxItem, setLightboxItem] = useState(null)

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
    <div class="products-page page-transition">
      <Hero
        title={t('productsPage.heroTitle')}
        breadcrumb={t('productsPage.breadcrumb')}
        description={t('productsPage.heroDesc')}
      />

      {categories.map((cat, catIdx) => (
        <section class="product-category" key={catIdx}>
          {cat.headerImage && (
            <div class="product-category__banner fade-in">
              <img
                src={`${BASE}/images/${cat.headerImage}`}
                alt={t(cat.titleKey)}
                loading="lazy"
                class="product-category__banner-img"
              />
              <div class="product-category__banner-overlay" />
            </div>
          )}
          <div class="container">
            <div class="product-category__header fade-in">
              <div class="gold-line" />
              <h2>{t(cat.titleKey)}</h2>
              <p>{t(cat.descKey)}</p>
            </div>
            <div class="product-category__grid">
              {cat.products.map((product, i) => (
                <div class="product-item fade-in" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                  <div
                    class="product-item__image"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setLightboxItem({
                      image: product.image,
                      name: product.name,
                      specs: product.specs.map(s => ({ label: t(s.labelKey), value: s.value })),
                    })}
                  >
                    <img src={product.image} alt={product.name} loading="lazy" />
                    {product.badge && (
                      <span class="product-item__badge">{product.badge}</span>
                    )}
                  </div>
                  <div class="product-item__body">
                    <h3>{product.name}</h3>
                    <div class="product-item__specs">
                      {product.specs.map((spec, si) => (
                        <div class="product-item__spec" key={si}>
                          <span class="product-item__spec-label">{t(spec.labelKey)}</span>
                          <span class="product-item__spec-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <a href={`${BASE}/contact`} class="product-item__cta">
                      {t('productsPage.requestQuote')}
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

      {/* Why Gulf Developers */}
      <section class="why-gd">
        <div class="container">
          <div class="why-gd__inner fade-in">
            <h3>{t('productsPage.whyGD')}</h3>
            <p>{t('productsPage.whyGDdesc')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-section__inner fade-in">
            <h2>{t('productsPage.customTitle')}</h2>
            <p>{t('productsPage.customDesc')}</p>
            <div class="cta-section__actions">
              <a href={`${BASE}/contact`} class="btn btn--primary">
                {t('productsPage.contactTeam')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxItem && (
        <Lightbox
          image={lightboxItem.image}
          title={lightboxItem.name}
          specs={lightboxItem.specs}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </div>
  )
}
