import { useState, useEffect } from 'preact/hooks'
import '../styles/preloader.css'

export function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 800)
    const removeTimer = setTimeout(() => setHidden(true), 1300)
    return () => { clearTimeout(timer); clearTimeout(removeTimer) }
  }, [])

  if (hidden) return null

  return (
    <div class={`preloader ${fadeOut ? 'preloader--fade' : ''}`}>
      <div class="preloader__content">
        <img src="/gulf-developers/images/logo.png" alt="" class="preloader__logo" />
        <div class="preloader__bar">
          <div class="preloader__bar-fill" />
        </div>
      </div>
    </div>
  )
}
