import { Fragment } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import { Hero } from '../components/Hero.jsx'
import { useLang } from '../context/LangContext.jsx'
import '../styles/contact.css'

export function Contact() {
  const observerRef = useRef(null)
  const { t, lang } = useLang()
  const isRTL = lang === 'ar'

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
    <div class="contact-page page-transition">
      <Hero
        title={t('contactPage.heroTitle')}
        breadcrumb={t('contactPage.breadcrumb')}
        description={t('contactPage.heroDesc')}
      />

      <section class="contact-main">
        <div class="container">
          <div class="contact-main__grid" style={isRTL ? { gridTemplateColumns: '1.5fr 1fr' } : {}}>
            {/* Contact Info — in RTL rendered second via order */}
            <div class="contact-info fade-in-left" style={isRTL ? { order: 1 } : {}}>
              {[
                {
                  icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />,
                  icon2: <circle cx="12" cy="10" r="3" />,
                  title: t('contactPage.office'),
                  content: <p style={isRTL ? { textAlign: 'center' } : {}}>{t('contactPage.officeAddr')}<br />{t('contactPage.iraq')}</p>,
                },
                {
                  icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
                  title: t('contactPage.phone'),
                  content: <p style={{ direction: 'ltr', textAlign: 'center' }}><a href="tel:+9647860000018">+964 786 000 0018</a></p>,
                },
                {
                  icon: <Fragment><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></Fragment>,
                  title: t('contactPage.email'),
                  content: <p style={{ direction: 'ltr', textAlign: 'center' }}><a href="mailto:info@gulfdevelopersiq.com">info@gulfdevelopersiq.com</a></p>,
                },
                {
                  icon: <Fragment><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Fragment>,
                  title: t('contactPage.hours'),
                  content: <p style={isRTL ? { textAlign: 'center' } : {}}>{t('contactPage.hoursLine1')}<br />{t('contactPage.hoursLine2')}</p>,
                },
              ].map((item, i) => (
                <div class="contact-info__card" key={i} style={isRTL ? { flexDirection: 'column', alignItems: 'center', textAlign: 'center' } : {}}>
                  <div class="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a07d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      {item.icon}{item.icon2}
                    </svg>
                  </div>
                  <div class="contact-info__text" style={isRTL ? { textAlign: 'center' } : {}}>
                    <h3>{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div class="contact-form fade-in-right" style={isRTL ? { order: 0, textAlign: 'right' } : {}}>
              <h2>{t('contactPage.formTitle')}</h2>
              <div class="gold-line" />
              <form action="https://formspree.io/f/xgegkpwl" method="POST">
                <div class="contact-form__grid">
                  <div class="contact-form__group">
                    <label class="contact-form__label" for="name">{t('contactPage.name')} *</label>
                    <input
                      class="contact-form__input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t('contactPage.namePlaceholder')}
                      required
                    />
                  </div>
                  <div class="contact-form__group">
                    <label class="contact-form__label" for="email">{t('contactPage.emailField')} *</label>
                    <input
                      class="contact-form__input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div class="contact-form__group">
                    <label class="contact-form__label" for="phone">{t('contactPage.phoneField')}</label>
                    <input
                      class="contact-form__input"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+964 xxx xxx xxxx"
                    />
                  </div>
                  <div class="contact-form__group">
                    <label class="contact-form__label" for="company">{t('contactPage.company')}</label>
                    <input
                      class="contact-form__input"
                      type="text"
                      id="company"
                      name="company"
                      placeholder={t('contactPage.companyPlaceholder')}
                    />
                  </div>
                  <div class="contact-form__group contact-form__group--full">
                    <label class="contact-form__label" for="message">{t('contactPage.message')} *</label>
                    <textarea
                      class="contact-form__textarea"
                      id="message"
                      name="message"
                      placeholder={t('contactPage.messagePlaceholder')}
                      required
                    />
                  </div>
                </div>
                <div class="contact-form__submit">
                  <button type="submit" class="btn btn--primary">
                    {t('contactPage.send')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section class="contact-map">
        <div class="container">
          <div class="contact-map__wrapper fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13338.074095612844!2d44.385!3d33.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f0a4bf0e299%3A0x7abce038f84a5c4!2sAl-Dawoody%2C%20Baghdad%2C%20Iraq!5e0!3m2!1sen!2s!4v1711806000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Gulf Developers Location - Baghdad, Al-Dawoody"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
