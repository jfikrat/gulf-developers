import { useEffect, useRef } from 'preact/hooks'
import { Counter } from '../components/Counter.jsx'
import '../styles/home.css'

const BASE = '/gulf-developers'

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: 'Equipment Supply',
    desc: 'Premium tower cranes, construction hoists, and heavy machinery from world-leading manufacturers.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Installation & Setup',
    desc: 'Professional on-site installation with certified engineers ensuring safe and efficient deployment.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Maintenance & Repair',
    desc: 'Scheduled maintenance programs and emergency repair services to maximize equipment uptime.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    title: 'Energy Solutions',
    desc: 'Complete solar panel installations, generator systems, and hybrid energy solutions for construction sites.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Technical Consultation',
    desc: 'Expert guidance on equipment selection, project planning, and site safety optimization.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Training Programs',
    desc: 'Comprehensive operator training and safety certification programs for your workforce.',
  },
]

const products = [
  {
    title: 'Tower Cranes',
    desc: 'Heavy-lift solutions up to 12T',
    count: '3 Models',
    image: 'crane2.jpg',
  },
  {
    title: 'Construction Hoists',
    desc: 'Personnel & material transport',
    count: '3 Models',
    image: 'hoist.jpg',
  },
  {
    title: 'Power Generators',
    desc: '350kVA to 1500kVA diesel units',
    count: '3 Models',
    image: 'generator.jpg',
  },
  {
    title: 'Solar Energy',
    desc: 'Panels, inverters & storage',
    count: '3 Models',
    image: 'solar.jpg',
  },
]

export function Home() {
  const observerRef = useRef(null)
  const statsRef = useRef(null)

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

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el) => {
      observerRef.current.observe(el)
    })

    // Parallax scroll effect on stats items
    const statsSection = statsRef.current
    let rafId = null

    function handleScroll() {
      if (!statsSection) return
      rafId = requestAnimationFrame(() => {
        const rect = statsSection.getBoundingClientRect()
        const viewH = window.innerHeight
        // Only apply when section is in viewport
        if (rect.bottom < 0 || rect.top > viewH) return
        const progress = (viewH - rect.top) / (viewH + rect.height)
        const items = statsSection.querySelectorAll('.stats__item')
        items.forEach((item, i) => {
          // Alternate direction for variety, subtle offset
          const direction = i % 2 === 0 ? 1 : -1
          const offset = direction * (1 - progress) * 12
          item.style.transform = `translateY(${offset}px)`
        })
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observerRef.current?.disconnect()
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div>
      {/* Hero */}
      <section class="hero">
        <div class="hero__bg-image" />
        <div class="hero__bg">
          <div class="hero__pattern" />
          <div class="hero__glow" />
        </div>
        <div class="container">
          <div class="hero__content">
            <div class="hero__tag">
              <span class="dot" />
              Construction & Energy Solutions
            </div>
            <h1>
              Powering <span class="gold">Progress.</span>
              <br />
              Building the <span class="gold">Future.</span>
            </h1>
            <p class="hero__arabic">الخليج المطورة للمقاولات العامة</p>
            <p class="hero__desc">
              Iraq's trusted partner for premium construction equipment, power generation,
              and solar energy systems. Engineering excellence for projects that define skylines.
            </p>
            <div class="hero__actions">
              <a href={`${BASE}/products`} class="btn btn--primary">
                Explore Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href={`${BASE}/contact`} class="btn btn--outline">
                Contact Us
              </a>
            </div>
            <a href={`${BASE}/company-profile.html`} class="hero__profile-link" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Company Profile
            </a>
          </div>
        </div>
        <div class="hero__scroll">
          <span>Scroll</span>
          <div class="hero__scroll-line" />
        </div>
      </section>

      {/* Stats */}
      <section class="stats" ref={statsRef}>
        <div class="container">
          <div class="stats__grid">
            <div class="stats__item fade-in">
              <div class="stats__number">
                <Counter end={15} suffix="+" />
              </div>
              <div class="stats__label">Years Experience</div>
            </div>
            <div class="stats__item fade-in" style={{ transitionDelay: '0.1s' }}>
              <div class="stats__number">
                <Counter end={200} suffix="+" />
              </div>
              <div class="stats__label">Projects Completed</div>
            </div>
            <div class="stats__item fade-in" style={{ transitionDelay: '0.2s' }}>
              <div class="stats__number">
                <Counter end={50} suffix="+" />
              </div>
              <div class="stats__label">Team Members</div>
            </div>
            <div class="stats__item fade-in" style={{ transitionDelay: '0.3s' }}>
              <div class="stats__number">
                <Counter end={4} suffix="" />
              </div>
              <div class="stats__label">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section class="trust-bar">
        <div class="container">
          <p class="trust-bar__label">AUTHORIZED DEALER & PARTNER</p>
          <div class="trust-bar__logos">
            <span class="trust-badge">POTAIN</span>
            <span class="trust-badge">ZOOMLION</span>
            <span class="trust-badge">CUMMINS</span>
            <span class="trust-badge">LONGI SOLAR</span>
            <span class="trust-badge">BAUDOUIN</span>
            <span class="trust-badge">LIEBHERR</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section class="section services-preview">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>What We Do</h2>
            <p class="arabic-sub">ما نقدمه من خدمات</p>
            <p>
              Comprehensive construction and energy solutions tailored to the demands of
              modern infrastructure development.
            </p>
          </div>
          <div class="services-preview__grid">
            {services.map((s, i) => (
              <div
                class="service-card fade-in"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  '--breathe-dur': `${5 + Math.random() * 4}s`,
                  '--breathe-delay': `${Math.random() * 3}s`,
                  '--breathe-y': `${-(2 + Math.random() * 2)}px`,
                }}
                key={i}
              >
                <div class="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section class="section products-overview">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>Our Products</h2>
            <p class="arabic-sub">منتجاتنا</p>
            <p>
              World-class construction equipment and energy systems from leading global manufacturers.
            </p>
          </div>
          <div class="products-overview__grid">
            {products.map((p, i) => (
              <a href={`${BASE}/products`} class="product-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                <div class="product-card__bg" style={{ backgroundImage: `url('${BASE}/images/${p.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div class="product-card__overlay" />
                <div class="product-card__content">
                  <div class="product-card__count">{p.count}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span class="product-card__arrow">
                    View All
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-section cta-section--bg">
        <div class="cta__bg-image" />
        <div class="container">
          <div class="cta-section__inner fade-in">
            <h2>Ready to Build with Us?</h2>
            <p class="arabic-sub dark-section__arabic">هل أنت مستعد للبناء معنا؟</p>
            <p>
              Let us power your next project with the right equipment and expertise.
              Get in touch for a consultation today.
            </p>
            <div class="cta-section__actions">
              <a href={`${BASE}/contact`} class="btn btn--primary">
                Get a Free Quote
              </a>
              <a href={`${BASE}/services`} class="btn btn--outline">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
