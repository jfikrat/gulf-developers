import { useEffect, useRef } from 'preact/hooks'
import { Hero } from '../components/Hero.jsx'
import '../styles/about.css'

export function About() {
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
    <div>
      <Hero
        title="About Us"
        breadcrumb="About"
        description="Over 15 years of delivering excellence in construction equipment and energy solutions across Iraq and the region."
      />

      {/* Company Story */}
      <section class="section about-story">
        <div class="container">
          <div class="about-story__grid">
            <div class="about-story__image fade-in-left">
              <div class="about-story__image-inner">
                <div class="about-story__image-year">2010</div>
                <div class="about-story__image-text">Established in Baghdad</div>
              </div>
            </div>
            <div class="about-story__content fade-in-right">
              <h2>Our Story</h2>
              <div class="gold-line" />
              <p>
                Founded in 2010, Gulf Developers General Contracting has grown from a
                specialized equipment supplier into one of Iraq's most respected construction
                and energy solutions providers. Our journey began with a clear vision: to bring
                world-class construction technology to the Iraqi market.
              </p>
              <p>
                Over the years, we have built strong partnerships with global manufacturers
                including Potain, Liebherr, Zoomlion, Cummins, and LONGI Solar. These
                relationships enable us to offer cutting-edge equipment backed by comprehensive
                after-sales support.
              </p>
              <p>
                Today, we serve clients across Iraq, Kurdistan, and neighboring countries,
                providing end-to-end solutions from equipment supply and installation to
                maintenance and operator training. Our track record of over 200 successfully
                completed projects speaks to our commitment to quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section class="section vmv">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>Vision, Mission & Values</h2>
            <p>The principles that guide everything we do.</p>
          </div>
          <div class="vmv__grid">
            <div class="vmv__card fade-in">
              <div class="vmv__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Vision</h3>
              <p>
                To be the leading construction equipment and energy solutions provider in Iraq
                and the broader Middle East, setting the standard for quality, innovation,
                and reliability in every project we undertake.
              </p>
            </div>
            <div class="vmv__card fade-in" style={{ transitionDelay: '0.1s' }}>
              <div class="vmv__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Mission</h3>
              <p>
                To empower Iraq's construction and infrastructure sectors by providing
                world-class equipment, expert technical services, and sustainable energy
                solutions that drive progress and economic development.
              </p>
            </div>
            <div class="vmv__card fade-in" style={{ transitionDelay: '0.2s' }}>
              <div class="vmv__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Values</h3>
              <p>
                Integrity in every transaction. Excellence in every delivery. Safety as a
                non-negotiable standard. Innovation in solutions. Partnership with our clients,
                building lasting relationships based on trust and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section class="section why-us">
        <div class="container">
          <div class="section-header fade-in">
            <div class="gold-line" />
            <h2>Why Choose Us</h2>
            <p>What sets Gulf Developers apart from the competition.</p>
          </div>
          <div class="why-us__grid">
            <div class="why-us__card fade-in">
              <div class="why-us__number">01</div>
              <h3>Expertise</h3>
              <p>
                Our team brings over 15 years of specialized experience in construction
                equipment and energy systems, with deep knowledge of the Iraqi market's
                unique requirements and challenges.
              </p>
            </div>
            <div class="why-us__card fade-in" style={{ transitionDelay: '0.1s' }}>
              <div class="why-us__number">02</div>
              <h3>Quality</h3>
              <p>
                We partner exclusively with globally recognized manufacturers. Every piece
                of equipment we supply meets international safety standards and comes with
                full manufacturer warranty.
              </p>
            </div>
            <div class="why-us__card fade-in" style={{ transitionDelay: '0.2s' }}>
              <div class="why-us__number">03</div>
              <h3>Support</h3>
              <p>
                From initial consultation through installation, training, and ongoing
                maintenance, we provide comprehensive support throughout the entire
                equipment lifecycle.
              </p>
            </div>
            <div class="why-us__card fade-in" style={{ transitionDelay: '0.3s' }}>
              <div class="why-us__number">04</div>
              <h3>Innovation</h3>
              <p>
                We continuously invest in the latest technology and sustainable energy
                solutions, helping our clients reduce costs while minimizing environmental
                impact on their projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="section team-section">
        <div class="container">
          <div class="team-section__inner">
            <div class="team-section__content fade-in-left">
              <h2>Our Team</h2>
              <div class="gold-line" />
              <p>
                Gulf Developers is powered by a team of over 50 dedicated professionals,
                including certified engineers, equipment specialists, and project managers
                with extensive experience in the construction and energy sectors.
              </p>
              <p>
                Our leadership team combines decades of industry expertise with a deep
                understanding of the regional market, ensuring every project receives
                the strategic oversight it deserves.
              </p>
              <div class="team-section__roles">
                <div class="team-section__role">
                  <div class="team-section__role-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div class="team-section__role-info">
                    <h4>General Manager</h4>
                    <p>Strategic leadership and business development</p>
                  </div>
                </div>
                <div class="team-section__role">
                  <div class="team-section__role-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div class="team-section__role-info">
                    <h4>Chief Engineer</h4>
                    <p>Technical operations and equipment management</p>
                  </div>
                </div>
                <div class="team-section__role">
                  <div class="team-section__role-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" stroke-width="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div class="team-section__role-info">
                    <h4>Project Managers</h4>
                    <p>On-site coordination and client relations</p>
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
