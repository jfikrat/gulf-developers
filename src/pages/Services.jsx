import { useEffect, useRef, useState } from 'preact/hooks'
import { Hero } from '../components/Hero.jsx'
import '../styles/services.css'

const BASE = '/gulf-developers'

const services = [
  {
    number: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: 'Equipment Supply',
    titleAr: 'توريد المعدات',
    desc: 'We supply premium construction equipment from globally recognized manufacturers including Potain, Liebherr, Zoomlion, Cummins, and LONGI Solar. Every piece of equipment undergoes rigorous quality inspection before delivery.',
    features: [
      'Tower cranes, hoists, and lifting equipment',
      'Diesel generators from 100kVA to 2000kVA',
      'Solar panels, inverters, and battery storage',
      'Full manufacturer warranty included',
      'Competitive pricing with flexible payment terms',
    ],
  },
  {
    number: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Installation & Setup',
    titleAr: 'التركيب والتشغيل',
    desc: 'Our certified engineering teams handle complete on-site installation of all equipment. From foundation preparation to final commissioning, we ensure every installation meets manufacturer specifications and local safety regulations.',
    features: [
      'Site survey and foundation design',
      'Professional crane erection and dismantling',
      'Electrical connections and load testing',
      'Safety system configuration and testing',
      'Handover documentation and certification',
    ],
  },
  {
    number: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Maintenance & Repair',
    titleAr: 'الصيانة والإصلاح',
    desc: 'Maximize equipment uptime with our comprehensive maintenance programs. Our technicians provide scheduled preventive maintenance, emergency repair services, and genuine spare parts to keep your operations running smoothly.',
    features: [
      'Scheduled preventive maintenance plans',
      '24/7 emergency repair response',
      'Genuine manufacturer spare parts',
      'Equipment condition monitoring',
      'Detailed maintenance reports and records',
    ],
  },
  {
    number: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    title: 'Energy & Solar Solutions',
    titleAr: 'حلول الطاقة والطاقة الشمسية',
    desc: 'Complete energy solutions from diesel generators to full solar installations. We design, supply, and install hybrid energy systems that reduce operational costs while providing reliable power for construction sites and facilities.',
    features: [
      'Solar panel system design and installation',
      'Hybrid diesel-solar power systems',
      'Battery storage solutions',
      'Grid-tie and off-grid configurations',
      'Energy efficiency consultation',
    ],
  },
  {
    number: '05',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Technical Consultation',
    titleAr: 'الاستشارات الفنية',
    desc: 'Leverage our expertise before and during your project. Our engineers provide detailed technical analysis, equipment recommendations, and project planning to ensure you select the right solutions for your specific requirements.',
    features: [
      'Equipment selection and specification review',
      'Site analysis and feasibility studies',
      'Load planning and lifting studies',
      'Cost-benefit analysis',
      'Regulatory compliance guidance',
    ],
  },
  {
    number: '06',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Training Programs',
    titleAr: 'برامج التدريب',
    desc: 'Equip your workforce with the skills they need. Our comprehensive training programs cover equipment operation, safety protocols, and maintenance procedures, delivered by certified instructors with real-world experience.',
    features: [
      'Crane and hoist operator certification',
      'Safety awareness and emergency procedures',
      'Equipment maintenance training',
      'Site supervisor qualification programs',
      'Customized training for your team',
    ],
  },
]

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'Gulf Developers operates across all major Iraqi cities including Baghdad, Basra, Erbil, Sulaymaniyah, Najaf, and Karbala. Our Baghdad headquarters coordinates logistics nationwide, with regional teams in the Kurdistan Region. We have completed over 200 projects across Iraq and 4 countries in the Middle East.',
  },
  {
    q: 'Do you provide after-sales support and warranty?',
    a: 'Yes, all equipment — including Potain tower cranes, Cummins generators, and LONGI solar panels — comes with full manufacturer warranty. Our Baghdad-based service team provides scheduled maintenance, 24/7 emergency repairs, genuine spare parts, and on-site technical assistance throughout the equipment lifecycle.',
  },
  {
    q: 'Can you customize equipment specifications for our project?',
    a: 'Absolutely. Our engineering team has configured tower cranes for high-rise projects in Baghdad, heavy-lift solutions for oil & gas sites in Basra, and hybrid solar-diesel systems for remote construction camps in Kurdistan. We work directly with manufacturers like Zoomlion, Liebherr, and Baudouin to meet exact specifications.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We offer flexible payment options tailored to each project. Standard terms include advance payment, irrevocable letter of credit (L/C), and installment plans for qualified Iraqi and regional clients. For government and institutional projects, we accept official purchase orders with agreed payment schedules.',
  },
  {
    q: 'How long does delivery and installation take?',
    a: 'For equipment in our Iraq warehouse, delivery takes 3-7 days. Internationally sourced equipment (tower cranes, large generators) typically arrives within 4-8 weeks via Umm Qasr Port. Tower crane erection takes 3-5 days on-site, generators are commissioned within 1-2 days, and solar system installations depend on capacity (typically 1-3 weeks for commercial scale).',
  },
]

export function Services() {
  const [openFaq, setOpenFaq] = useState(-1)
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
    <div class="services-page">
      <Hero
        title="Our Services"
        subtitle="خدماتنا"
        breadcrumb="Services"
        description="End-to-end construction equipment and energy solutions, from supply to installation, maintenance, and training."
      />

      {/* Service Details */}
      <section class="services-detail">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>Comprehensive Solutions</h2>
            <p>
              From initial consultation to ongoing support, we provide everything you need
              to keep your projects moving forward.
            </p>
          </div>
          <div class="services-detail__grid">
            {services.map((service, i) => (
              <div class="service-detail-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }} key={i}>
                <div class="service-detail-card__header">
                  <div class="service-detail-card__icon">{service.icon}</div>
                  <div>
                    <div class="service-detail-card__number">{service.number}</div>
                  </div>
                </div>
                <h3>{service.title}</h3>
                {service.titleAr && <p class="arabic-sub">{service.titleAr}</p>}
                <p>{service.desc}</p>
                <div class="service-detail-card__features">
                  {service.features.map((f, fi) => (
                    <div class="service-detail-card__feature" key={fi}>
                      <span class="service-detail-card__check">&#10003;</span>
                      <span>{f}</span>
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
            <p class="arabic-sub">الأسئلة الشائعة</p>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to the most common questions about our services.</p>
          </div>
          <div class="faq__list">
            {faqs.map((faq, i) => (
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
                  <span>{faq.q}</span>
                  <span class="faq__toggle">+</span>
                </button>
                <div
                  class="faq__answer"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div class="faq__answer-inner">{faq.a}</div>
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
            <p class="arabic-sub">تغطية الخدمات</p>
            <h3>Service Coverage</h3>
            <p>We serve all major Iraqi cities: Baghdad, Basra, Erbil, Sulaymaniyah, Najaf, and Karbala.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-section__inner fade-in">
            <h2>Let's Discuss Your Project</h2>
            <p>
              Every project is unique. Get in touch with our team to find the perfect
              solution for your construction and energy needs.
            </p>
            <div class="cta-section__actions">
              <a href={`${BASE}/contact`} class="btn btn--primary">
                Get in Touch
              </a>
              <a href={`${BASE}/products`} class="btn btn--outline">
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
