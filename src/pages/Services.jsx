import { useEffect, useRef, useState } from 'preact/hooks'
import { Hero } from '../components/Hero.jsx'
import { useLang } from '../context/LangContext.jsx'
import '../styles/services.css'

const BASE = '/gulf-developers'

const serviceIcons = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
]

const serviceData = [
  {
    number: '01',
    titleKey: 'svc.supply.title',
    descKey: 'svcDetail.supply.desc',
    featureKeys: ['svcFeat.supply1', 'svcFeat.supply2', 'svcFeat.supply3', 'svcFeat.supply4', 'svcFeat.supply5'],
  },
  {
    number: '02',
    titleKey: 'svc.install.title',
    descKey: 'svcDetail.install.desc',
    featureKeys: ['svcFeat.install1', 'svcFeat.install2', 'svcFeat.install3', 'svcFeat.install4', 'svcFeat.install5'],
  },
  {
    number: '03',
    titleKey: 'svc.maintain.title',
    descKey: 'svcDetail.maintain.desc',
    featureKeys: ['svcFeat.maintain1', 'svcFeat.maintain2', 'svcFeat.maintain3', 'svcFeat.maintain4', 'svcFeat.maintain5'],
  },
  {
    number: '04',
    titleKey: 'svcDetail.energy.title',
    descKey: 'svcDetail.energy.desc',
    featureKeys: ['svcFeat.energy1', 'svcFeat.energy2', 'svcFeat.energy3', 'svcFeat.energy4', 'svcFeat.energy5'],
  },
  {
    number: '05',
    titleKey: 'svc.consult.title',
    descKey: 'svcDetail.consult.desc',
    featureKeys: ['svcFeat.consult1', 'svcFeat.consult2', 'svcFeat.consult3', 'svcFeat.consult4', 'svcFeat.consult5'],
  },
  {
    number: '06',
    titleKey: 'svc.train.title',
    descKey: 'svcDetail.train.desc',
    featureKeys: ['svcFeat.train1', 'svcFeat.train2', 'svcFeat.train3', 'svcFeat.train4', 'svcFeat.train5'],
  },
]

const faqKeys = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
]

export function Services() {
  const [openFaq, setOpenFaq] = useState(-1)
  const observerRef = useRef(null)
  const { t } = useLang()

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
    <div class="services-page">
      <Hero
        title={t('servicesPage.heroTitle')}
        breadcrumb={t('servicesPage.breadcrumb')}
        description={t('servicesPage.heroDesc')}
      />

      {/* Service Details */}
      <section class="services-detail">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>{t('servicesPage.compTitle')}</h2>
            <p>{t('servicesPage.compDesc')}</p>
          </div>
          <div class="services-detail__grid">
            {serviceData.map((service, i) => (
              <div class="service-detail-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }} key={i}>
                <div class="service-detail-card__header">
                  <div class="service-detail-card__icon">{serviceIcons[i]}</div>
                  <div>
                    <div class="service-detail-card__number">{service.number}</div>
                  </div>
                </div>
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descKey)}</p>
                <div class="service-detail-card__features">
                  {service.featureKeys.map((fk, fi) => (
                    <div class="service-detail-card__feature" key={fi}>
                      <span class="service-detail-card__check">&#10003;</span>
                      <span>{t(fk)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="faq-section">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>{t('servicesPage.faqTitle')}</h2>
            <p>{t('servicesPage.faqDesc')}</p>
          </div>
          <div class="faq__list">
            {faqKeys.map((faq, i) => (
              <div
                class={`faq__item ${openFaq === i ? 'faq__item--open' : ''}`}
                key={i}
              >
                <button
                  class="faq__question"
                  id={`faq-btn-${i}`}
                  aria-expanded={openFaq === i ? 'true' : 'false'}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{t(faq.q)}</span>
                  <span class="faq__toggle">+</span>
                </button>
                <div
                  class="faq__answer"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div class="faq__answer-inner">{t(faq.a)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section class="service-coverage">
        <div class="container">
          <div class="service-coverage__inner fade-in">
            <h3>{t('servicesPage.coverage')}</h3>
            <p>{t('servicesPage.coverageDesc')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-section__inner fade-in">
            <h2>{t('servicesPage.ctaTitle')}</h2>
            <p>{t('servicesPage.ctaDesc')}</p>
            <div class="cta-section__actions">
              <a href={`${BASE}/contact`} class="btn btn--primary">
                {t('servicesPage.getInTouch')}
              </a>
              <a href={`${BASE}/products`} class="btn btn--outline">
                {t('servicesPage.browseProducts')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
