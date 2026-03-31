import { useEffect, useRef } from 'preact/hooks'
import { Hero } from '../components/Hero.jsx'
import { useLang } from '../context/LangContext.jsx'
import '../styles/about.css'

const BASE = '/gulf-developers'

export function About() {
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

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div class="page-transition">
      <Hero
        title={t('about.heroTitle')}
        breadcrumb={t('about.breadcrumb')}
        description={t('about.heroDesc')}
      />

      {/* Company Story */}
      <section class="section about-story">
        <div class="container">
          <div class="about-story__grid">
            <div class="about-story__image fade-in-left">
              <img
                src={`${BASE}/images/about.jpg`}
                alt="Gulf Developers construction site"
                loading="lazy"
                class="about-story__photo"
              />
              <div class="about-story__image-inner">
                <div class="about-story__image-year">2010</div>
                <div class="about-story__image-text">{t('about.established')}</div>
              </div>
            </div>
            <div class="about-story__content fade-in-right">
              <h2>{t('about.storyTitle')}</h2>
              <div class="gold-line" />
              <p>{t('about.storyP1')}</p>
              <p>{t('about.storyP2')}</p>
              <p>{t('about.storyP3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section class="section vmv">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>{t('vmv.title')}</h2>
            <p>{t('vmv.desc')}</p>
          </div>
          <div class="vmv__grid">
            <div class="vmv__card fade-in">
              <div class="vmv__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>{t('vmv.vision')}</h3>
              <p>{t('vmv.visionDesc')}</p>
            </div>
            <div class="vmv__card fade-in" style={{ transitionDelay: '0.1s' }}>
              <div class="vmv__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>{t('vmv.mission')}</h3>
              <p>{t('vmv.missionDesc')}</p>
            </div>
            <div class="vmv__card fade-in" style={{ transitionDelay: '0.2s' }}>
              <div class="vmv__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>{t('vmv.values')}</h3>
              <p>{t('vmv.valuesDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section class="section why-us">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>{t('why.title')}</h2>
            <p>{t('why.desc')}</p>
          </div>
          <div class="why-us__grid">
            <div class="why-us__card fade-in">
              <div class="why-us__number">01</div>
              <h3>{t('why.expertise')}</h3>
              <p>{t('why.expertiseDesc')}</p>
            </div>
            <div class="why-us__card fade-in" style={{ transitionDelay: '0.1s' }}>
              <div class="why-us__number">02</div>
              <h3>{t('why.quality')}</h3>
              <p>{t('why.qualityDesc')}</p>
            </div>
            <div class="why-us__card fade-in" style={{ transitionDelay: '0.2s' }}>
              <div class="why-us__number">03</div>
              <h3>{t('why.support')}</h3>
              <p>{t('why.supportDesc')}</p>
            </div>
            <div class="why-us__card fade-in" style={{ transitionDelay: '0.3s' }}>
              <div class="why-us__number">04</div>
              <h3>{t('why.innovation')}</h3>
              <p>{t('why.innovationDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Registration */}
      <section class="section company-reg">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>{t('reg.title')}</h2>
            <p>{t('reg.desc')}</p>
          </div>
          <div class="company-reg__grid">
            <div class="company-reg__item fade-in">
              <strong>{t('reg.registration')}</strong>
              <span>{t('reg.registrationVal')}</span>
            </div>
            <div class="company-reg__item fade-in" style={{ transitionDelay: '0.1s' }}>
              <strong>{t('reg.license')}</strong>
              <span>{t('reg.licenseVal')}</span>
            </div>
            <div class="company-reg__item fade-in" style={{ transitionDelay: '0.2s' }}>
              <strong>{t('reg.established')}</strong>
              <span>2010</span>
            </div>
            <div class="company-reg__item fade-in" style={{ transitionDelay: '0.3s' }}>
              <strong>{t('reg.management')}</strong>
              <span>{t('reg.managementVal')}</span>
            </div>
            <div class="company-reg__item fade-in" style={{ transitionDelay: '0.4s' }}>
              <strong>{t('reg.quality')}</strong>
              <span>ISO 9001:2015</span>
            </div>
          </div>

          {/* Certificate Badges */}
          <div class="cert-badges fade-in">
            <div class="cert-badge">
              <div class="cert-badge__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h4 class="cert-badge__title">{t('cert.iso')}</h4>
              <span class="cert-badge__sub">{t('cert.isoSub')}</span>
            </div>
            <div class="cert-badge">
              <div class="cert-badge__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <polyline points="9 14 11 16 15 12" />
                </svg>
              </div>
              <h4 class="cert-badge__title">{t('cert.contractor')}</h4>
              <span class="cert-badge__sub">{t('cert.contractorSub')}</span>
            </div>
            <div class="cert-badge">
              <div class="cert-badge__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 20h20M5 20V10l7-7 7 7v10M9 20v-6h6v6" />
                </svg>
              </div>
              <h4 class="cert-badge__title">{t('cert.chamber')}</h4>
              <span class="cert-badge__sub">{t('cert.chamberSub')}</span>
            </div>
            <div class="cert-badge">
              <div class="cert-badge__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 class="cert-badge__title">{t('cert.safety')}</h4>
              <span class="cert-badge__sub">{t('cert.safetySub')}</span>
            </div>
          </div>

          {/* Download Company Profile */}
          <div class="company-reg__download fade-in" style={{ marginTop: '36px', textAlign: 'center' }}>
            <a href={`${BASE}/company-profile.html`} class="btn btn--outline btn--download" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t('reg.download')}
            </a>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section class="section our-clients">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>{t('clients.title')}</h2>
            <p>{t('clients.desc')}</p>
          </div>
          <div class="our-clients__grid">
            <div class="our-clients__card fade-in">Al-Hilal Construction Group</div>
            <div class="our-clients__card fade-in" style={{ transitionDelay: '0.1s' }}>Basra Oil Company (subcontractor)</div>
            <div class="our-clients__card fade-in" style={{ transitionDelay: '0.2s' }}>Kurdistan Investment Board Projects</div>
            <div class="our-clients__card fade-in" style={{ transitionDelay: '0.3s' }}>Baghdad Municipality Infrastructure</div>
            <div class="our-clients__card fade-in" style={{ transitionDelay: '0.4s' }}>Al-Fao General Engineering Company</div>
          </div>
        </div>
      </section>

      {/* Projects Completed */}
      <section class="section projects-highlights">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>{t('highlights.title')}</h2>
            <p>{t('highlights.desc')}</p>
          </div>
          <div class="projects-highlights__grid">
            <div class="projects-highlights__card fade-in">
              <div class="projects-highlights__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 20h20M5 20V10l7-7 7 7v10M9 20v-6h6v6" />
                </svg>
              </div>
              <h3>{t('highlights.cranes')}</h3>
              <p>{t('highlights.cranesDesc')}</p>
            </div>
            <div class="projects-highlights__card fade-in" style={{ transitionDelay: '0.1s' }}>
              <div class="projects-highlights__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <h3>{t('highlights.solar')}</h3>
              <p>{t('highlights.solarDesc')}</p>
            </div>
            <div class="projects-highlights__card fade-in" style={{ transitionDelay: '0.2s' }}>
              <div class="projects-highlights__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3" />
                </svg>
              </div>
              <h3>{t('highlights.airport')}</h3>
              <p>{t('highlights.airportDesc')}</p>
            </div>
            <div class="projects-highlights__card fade-in" style={{ transitionDelay: '0.3s' }}>
              <div class="projects-highlights__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <h3>{t('highlights.basra')}</h3>
              <p>{t('highlights.basraDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="section team-section">
        <div class="container">
          <div class="team-section__inner">
            <div class="team-section__content fade-in-left">
              <h2>{t('team.title')}</h2>
              <div class="gold-line" />
              <p>{t('team.desc1')}</p>
              <p>{t('team.desc2')}</p>
              <div class="team-section__roles">
                <div class="team-section__role">
                  <div class="team-section__role-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div class="team-section__role-info">
                    <h4>{t('team.gm')}</h4>
                    <p>{t('team.gmDesc')}</p>
                  </div>
                </div>
                <div class="team-section__role">
                  <div class="team-section__role-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div class="team-section__role-info">
                    <h4>{t('team.ce')}</h4>
                    <p>{t('team.ceDesc')}</p>
                  </div>
                </div>
                <div class="team-section__role">
                  <div class="team-section__role-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div class="team-section__role-info">
                    <h4>{t('team.pm')}</h4>
                    <p>{t('team.pmDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="team-section__image fade-in-right">
              <div class="team-section__image-inner">50+</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
