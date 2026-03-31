import { createContext } from 'preact'
import { useContext, useState, useEffect } from 'preact/hooks'
import { translations } from '../i18n/translations.js'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gd-lang') || 'en'
    }
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('gd-lang', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang(l => l === 'en' ? 'ar' : 'en')
  const t = (key) => (translations[key] || {})[lang] || key

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
