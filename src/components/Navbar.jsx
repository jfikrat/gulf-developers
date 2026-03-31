import { useState, useEffect } from 'preact/hooks'
import { useRouter } from 'preact-router'
import { useLang } from '../context/LangContext.jsx'
import '../styles/navbar.css'

const BASE = '/gulf-developers'

const linkKeys = [
  { href: `${BASE}/`, key: 'nav.home' },
  { href: `${BASE}/about`, key: 'nav.about' },
  { href: `${BASE}/products`, key: 'nav.products' },
  { href: `${BASE}/services`, key: 'nav.services' },
  { href: `${BASE}/contact`, key: 'nav.contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [result] = useRouter()
  const currentPath = result?.url || '/'
  const { lang, toggle, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [currentPath])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = menuOpen ? '' : 'hidden'
  }

  const isActive = (href) => {
    if (href === `${BASE}/` || href === `${BASE}/index.html`) {
      return currentPath === `${BASE}/` || currentPath === `${BASE}/index.html`
    }
    return currentPath.startsWith(href)
  }

  return (
    <nav class={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div class="navbar__inner">
        <a href={`${BASE}/`} class="navbar__logo">
          <img src={`${BASE}/images/logo.png`} alt="Gulf Developers" class="navbar__logo-img" />
          <div class="navbar__brand">
            <span class="navbar__brand-name">{t('nav.brandName')}</span>
            <span class="navbar__brand-sub">{t('nav.brandSub')}</span>
          </div>
        </a>

        <div class="navbar__links">
          {linkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
              {...(isActive(link.href) ? { 'aria-current': 'page' } : {})}
            >
              {t(link.key)}
            </a>
          ))}
          <div class="lang-toggle">
            <button
              class={lang === 'en' ? 'active' : ''}
              onClick={lang !== 'en' ? toggle : undefined}
              aria-label="English"
            >
              EN
            </button>
            <button
              class={lang === 'ar' ? 'active' : ''}
              onClick={lang !== 'ar' ? toggle : undefined}
              aria-label="العربية"
            >
              عربي
            </button>
          </div>
          <a href={`${BASE}/contact`} class="btn btn--primary navbar__cta">
            {t('nav.getQuote')}
          </a>
        </div>

        <button
          class={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div class={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {linkKeys.map((link) => (
          <a
            key={link.href}
            href={link.href}
            class={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
            {...(isActive(link.href) ? { 'aria-current': 'page' } : {})}
          >
            {t(link.key)}
          </a>
        ))}
        <div class="lang-toggle" style={{ marginTop: '8px' }}>
          <button
            class={lang === 'en' ? 'active' : ''}
            onClick={lang !== 'en' ? toggle : undefined}
            aria-label="English"
          >
            EN
          </button>
          <button
            class={lang === 'ar' ? 'active' : ''}
            onClick={lang !== 'ar' ? toggle : undefined}
            aria-label="العربية"
          >
            عربي
          </button>
        </div>
        <a href={`${BASE}/contact`} class="btn btn--primary" style={{ marginTop: '16px' }}>
          {t('nav.getQuote')}
        </a>
      </div>
    </nav>
  )
}
