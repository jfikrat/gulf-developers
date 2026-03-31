import '../styles/footer.css'

const BASE = '/gulf-developers'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer class="footer">
      <div class="footer__main">
        <div class="container">
          <div class="footer__grid">
            {/* Brand Column */}
            <div class="footer__brand">
              <div class="footer__brand-logo">
                <div class="navbar__monogram">GD</div>
                <span>Gulf Developers</span>
              </div>
              <p class="arabic-name">الخليج المطورة للمقاولات العامة</p>
              <p>
                Providing premium construction equipment, energy solutions, and general contracting
                services across Iraq and the Middle East since 2010.
              </p>
              <div class="footer__social">
                <a href="https://facebook.com/gulfdevelopersiq" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
                <a href="https://linkedin.com/company/gulf-developers-iq" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
                <a href="https://instagram.com/gulfdevelopersiq" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 class="footer__heading">Quick Links</h4>
              <div class="footer__links">
                <a href={`${BASE}/`}>Home</a>
                <a href={`${BASE}/about`}>About Us</a>
                <a href={`${BASE}/products`}>Products</a>
                <a href={`${BASE}/services`}>Services</a>
                <a href={`${BASE}/contact`}>Contact</a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 class="footer__heading">Products</h4>
              <div class="footer__links">
                <a href={`${BASE}/products`}>Tower Cranes</a>
                <a href={`${BASE}/products`}>Construction Hoists</a>
                <a href={`${BASE}/products`}>Power Generators</a>
                <a href={`${BASE}/products`}>Solar Energy Systems</a>
                <a href={`${BASE}/products`}>Electrical Equipment</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 class="footer__heading">Contact Us</h4>
              <div class="footer__contact-item">
                <div class="footer__contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div class="footer__contact-text">
                  <strong>Address</strong>
                  Baghdad, Al-Dawoody, Iraq
                </div>
              </div>
              <div class="footer__contact-item">
                <div class="footer__contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div class="footer__contact-text">
                  <strong>Phone</strong>
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
                  <strong>Email</strong>
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
            <span>&copy; {year} Gulf Developers General Contracting. All rights reserved.</span>
            <span class="footer__registration">Registered Contractor — Baghdad, Iraq | Est. 2010</span>
            <span class="footer__license">Licensed General Contractor — Republic of Iraq</span>
            <span>Gulf Developers General Contracting Co.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
