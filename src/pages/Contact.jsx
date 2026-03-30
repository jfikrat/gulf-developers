import { useEffect, useRef } from 'preact/hooks'
import { Hero } from '../components/Hero.jsx'
import '../styles/contact.css'

export function Contact() {
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

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div class="contact-page">
      <Hero
        title="Contact Us"
        breadcrumb="Contact"
        description="Get in touch with our team for quotations, technical support, or general inquiries."
      />

      <section class="contact-main">
        <div class="container">
          <div class="contact-main__grid">
            {/* Contact Info */}
            <div class="contact-info fade-in-left">
              <div class="contact-info__card">
                <div class="contact-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div class="contact-info__text">
                  <h3>Our Office</h3>
                  <p>Baghdad, Al-Dawoody<br />Iraq</p>
                </div>
              </div>

              <div class="contact-info__card">
                <div class="contact-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div class="contact-info__text">
                  <h3>Phone</h3>
                  <p><a href="tel:+9647860000018">+964 786 000 0018</a></p>
                </div>
              </div>

              <div class="contact-info__card">
                <div class="contact-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div class="contact-info__text">
                  <h3>Email</h3>
                  <p><a href="mailto:info@gulfdevelopersiq.com">info@gulfdevelopersiq.com</a></p>
                </div>
              </div>

              <div class="contact-info__card">
                <div class="contact-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div class="contact-info__text">
                  <h3>Working Hours</h3>
                  <p>Saturday - Thursday<br />8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div class="contact-form fade-in-right">
              <h2>Send Us a Message</h2>
              <div class="gold-line" />
              <form action="https://formspree.io/f/info@gulfdevelopersiq.com" method="POST">
                <div class="contact-form__grid">
                  <div class="contact-form__group">
                    <label class="contact-form__label" for="name">Full Name *</label>
                    <input
                      class="contact-form__input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div class="contact-form__group">
                    <label class="contact-form__label" for="email">Email Address *</label>
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
                    <label class="contact-form__label" for="phone">Phone Number</label>
                    <input
                      class="contact-form__input"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+964 xxx xxx xxxx"
                    />
                  </div>
                  <div class="contact-form__group">
                    <label class="contact-form__label" for="company">Company Name</label>
                    <input
                      class="contact-form__input"
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your company"
                    />
                  </div>
                  <div class="contact-form__group contact-form__group--full">
                    <label class="contact-form__label" for="message">Your Message *</label>
                    <textarea
                      class="contact-form__textarea"
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements, equipment needs, or any questions you have..."
                      required
                    />
                  </div>
                </div>
                <div class="contact-form__submit">
                  <button type="submit" class="btn btn--primary">
                    Send Message
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
