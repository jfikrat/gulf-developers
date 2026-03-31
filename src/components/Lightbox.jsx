import { useEffect } from 'preact/hooks'
import '../styles/lightbox.css'

export function Lightbox({ image, title, specs, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div class="lightbox" onClick={onClose}>
      <div class="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <button class="lightbox__close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div class="lightbox__image">
          <img src={image} alt={title} />
        </div>
        <div class="lightbox__info">
          <h3>{title}</h3>
          {specs && (
            <div class="lightbox__specs">
              {specs.map((spec, i) => (
                <div class="lightbox__spec" key={i}>
                  <span class="lightbox__spec-label">{spec.label}</span>
                  <span class="lightbox__spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
