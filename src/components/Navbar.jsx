import { useState, useEffect } from 'preact/hooks'
import { useRouter } from 'preact-router'
import '../styles/navbar.css'

const BASE = '/gulf-developers'

const links = [
  { href: `${BASE}/`, label: 'Home' },
  { href: `${BASE}/about`, label: 'About' },
  { href: `${BASE}/products`, label: 'Products' },
  { href: `${BASE}/services`, label: 'Services' },
  { href: `${BASE}/contact`, label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [result] = useRouter()
  const currentPath = result?.url || '/'

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
          <div class="navbar__monogram">GD</div>
          <div class="navbar__brand">
            <span class="navbar__brand-name">Gulf Developers</span>
            <span class="navbar__brand-sub">General Contracting</span>
          </div>
        </a>

        <div class="navbar__links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
              {...(isActive(link.href) ? { 'aria-current': 'page' } : {})}
            >
              {link.label}
            </a>
          ))}
          <a href={`${BASE}/contact`} class="btn btn--primary navbar__cta">
            Get Quote
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
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            class={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
            {...(isActive(link.href) ? { 'aria-current': 'page' } : {})}
          >
            {link.label}
          </a>
        ))}
        <a href={`${BASE}/contact`} class="btn btn--primary" style={{ marginTop: '16px' }}>
          Get Quote
        </a>
      </div>
    </nav>
  )
}
