import { useEffect, useRef } from 'preact/hooks'
import { Counter } from '../components/Counter.jsx'
import { useLang } from '../context/LangContext.jsx'
import '../styles/home.css'

const BASE = '/gulf-developers'

const serviceIcons = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
]

const serviceKeys = [
  { title: 'svc.supply.title', desc: 'svc.supply.desc' },
  { title: 'svc.install.title', desc: 'svc.install.desc' },
  { title: 'svc.maintain.title', desc: 'svc.maintain.desc' },
  { title: 'svc.energy.title', desc: 'svc.energy.desc' },
  { title: 'svc.consult.title', desc: 'svc.consult.desc' },
  { title: 'svc.train.title', desc: 'svc.train.desc' },
]

const productKeys = [
  { title: 'cat.cranes', desc: 'cat.cranes.desc', image: 'crane2.jpg' },
  { title: 'cat.hoists', desc: 'cat.hoists.desc', image: 'hoist.jpg' },
  { title: 'cat.generators', desc: 'cat.generators.desc', image: 'generator.jpg' },
  { title: 'cat.solar', desc: 'cat.solar.desc', image: 'solar.jpg' },
]

export function Home() {
  const observerRef = useRef(null)
  const statsRef = useRef(null)
  const { t, lang } = useLang()

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
        if (rect.bottom < 0 || rect.top > viewH) return
        const progress = (viewH - rect.top) / (viewH + rect.height)
        const items = statsSection.querySelectorAll('.stats__item')
        items.forEach((item, i) => {
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
    <div class="page-transition">
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
              {t('hero.tag')}
            </div>
            <h1>
              {t('hero.title1')} <span class="gold">{t('hero.title2')}</span>
              <br />
              {t('hero.title3')} <span class="gold">{t('hero.title4')}</span>
            </h1>
            {lang === 'en' && <p class="hero__arabic">الخليج المطورة للمقاولات العامة</p>}
            <p class="hero__desc">
              {t('hero.desc')}
            </p>
            <div class="hero__actions">
              <a href={`${BASE}/products`} class="btn btn--primary">
                {t('hero.cta1')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href={`${BASE}/contact`} class="btn btn--outline">
                {t('hero.cta2')}
              </a>
            </div>
            <a href={`${BASE}/company-profile.html`} class="hero__profile-link" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t('hero.download')}
            </a>
          </div>
        </div>
        <div class="hero__scroll">
          <span>{t('hero.scroll')}</span>
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
              <div class="stats__label">{t('stats.years')}</div>
            </div>
            <div class="stats__item fade-in" style={{ transitionDelay: '0.1s' }}>
              <div class="stats__number">
                <Counter end={200} suffix="+" />
              </div>
              <div class="stats__label">{t('stats.projects')}</div>
            </div>
            <div class="stats__item fade-in" style={{ transitionDelay: '0.2s' }}>
              <div class="stats__number">
                <Counter end={50} suffix="+" />
              </div>
              <div class="stats__label">{t('stats.team')}</div>
            </div>
            <div class="stats__item fade-in" style={{ transitionDelay: '0.3s' }}>
              <div class="stats__number">
                <Counter end={4} suffix="" />
              </div>
              <div class="stats__label">{t('stats.countries')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section class="trust-bar">
        <div class="container">
          <p class="trust-bar__label">{t('trust.label')}</p>
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
            <h2>{t('services.title')}</h2>
            <p>{t('services.desc')}</p>
          </div>
          <div class="services-preview__grid">
            {serviceKeys.map((s, i) => (
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
                <div class="service-card__icon">{serviceIcons[i]}</div>
                <h3>{t(s.title)}</h3>
                <p>{t(s.desc)}</p>
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
            <h2>{t('products.title')}</h2>
            <p>{t('products.desc')}</p>
          </div>
          <div class="products-overview__grid">
            {productKeys.map((p, i) => (
              <a href={`${BASE}/products`} class="product-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                <div class="product-card__bg" style={{ backgroundImage: `url('${BASE}/images/${p.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div class="product-card__overlay" />
                <div class="product-card__content">
                  <div class="product-card__count">3 {t('products.models')}</div>
                  <h3>{t(p.title)}</h3>
                  <p>{t(p.desc)}</p>
                  <span class="product-card__arrow">
                    {t('products.viewAll')}
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

      {/* Testimonials */}
      <section class="section testimonials">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>{t('testimonials.title')}</h2>
            <p>{t('testimonials.desc')}</p>
          </div>
          <div class="testimonials__grid">
            {[1, 2, 3].map((n) => (
              <div class="testimonial-card fade-in" key={n} style={{ transitionDelay: `${(n - 1) * 0.15}s` }}>
                <div class="testimonial-card__quote">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="1.5" opacity="0.4">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 .5.25 1 1 1z" />
                  </svg>
                </div>
                <p class="testimonial-card__text">{t(`testimonial.${n}.text`)}</p>
                <div class="testimonial-card__author">
                  <div class="testimonial-card__avatar">{t(`testimonial.${n}.name`).charAt(0)}</div>
                  <div>
                    <div class="testimonial-card__name">{t(`testimonial.${n}.name`)}</div>
                    <div class="testimonial-card__role">{t(`testimonial.${n}.role`)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-section cta-section--bg">
        <div class="cta__bg-image" />
        <div class="container">
          <div class="cta-section__inner fade-in">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.desc')}</p>
            <div class="cta-section__actions">
              <a href={`${BASE}/contact`} class="btn btn--primary">
                {t('cta.quote')}
              </a>
              <a href={`${BASE}/services`} class="btn btn--outline">
                {t('cta.services')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
