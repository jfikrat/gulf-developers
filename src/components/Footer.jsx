import { useLang } from '../context/LangContext.jsx'
import '../styles/footer.css'

const BASE = '/gulf-developers'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()

  return (
    <footer class="footer">
      <div class="footer__main">
        <div class="container">
          <div class="footer__grid">
            {/* Brand Column */}
            <div class="footer__brand">
              <div class="footer__brand-logo">
                <div class="navbar__monogram">GD</div>
                <span>{t('nav.brandName')}</span>
              </div>
              <p class="arabic-name">{t('footer.arabicName')}</p>
              <p>{t('footer.desc')}</p>
              <div class="footer__social">
                <a href="https://facebook.com/gulfdevelopersiq" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
                <a href="https://linkedin.com/company/gulf-developers-iq" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
                <a href="https://instagram.com/gulfdevelopersiq" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 class="footer__heading">{t('footer.quickLinks')}</h4>
              <div class="footer__links">
                <a href={`${BASE}/`}>{t('nav.home')}</a>
                <a href={`${BASE}/about`}>{t('footer.aboutUs')}</a>
                <a href={`${BASE}/products`}>{t('footer.products')}</a>
                <a href={`${BASE}/services`}>{t('nav.services')}</a>
                <a href={`${BASE}/contact`}>{t('nav.contact')}</a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 class="footer__heading">{t('footer.products')}</h4>
              <div class="footer__links">
                <a href={`${BASE}/products`}>{t('footer.towerCranes')}</a>
                <a href={`${BASE}/products`}>{t('footer.hoists')}</a>
                <a href={`${BASE}/products`}>{t('footer.generators')}</a>
                <a href={`${BASE}/products`}>{t('footer.solarSystems')}</a>
                <a href={`${BASE}/products`}>{t('footer.electrical')}</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 class="footer__heading">{t('footer.contactUs')}</h4>
              <div class="footer__contact-item">
                <div class="footer__contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div class="footer__contact-text">
                  <strong>{t('footer.address')}</strong>
                  {t('footer.addressVal')}
                </div>
              </div>
              <div class="footer__contact-item">
                <div class="footer__contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div class="footer__contact-text">
                  <strong>{t('footer.phone')}</strong>
                  <a href="tel:+9647860000018">+964 786 000 0018</a>
                </div>
              </div>
              <div class="footer__contact-item">
                <div class="footer__contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div class="footer__contact-text">
                  <strong>{t('footer.email')}</strong>
                  <a href="mailto:info@gulfdevelopersiq.com">info@gulfdevelopersiq.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div class="footer__bottom">
        <div class="container">
          <div class="footer__bottom-inner">
            <span>&copy; {year} {t('footer.companyFull')} {t('footer.rights')}</span>
            <span class="footer__registration">{t('footer.registered')}</span>
            <span class="footer__license">{t('footer.licensed')}</span>
            <span>{t('footer.companyFull')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
