import { useLang } from '../context/LangContext.jsx'

export function Hero({ title, description, breadcrumb }) {
  const { t } = useLang()

  return (
    <section class="page-hero">
      <div class="container">
        {breadcrumb && (
          <nav class="breadcrumb">
            <a href="/gulf-developers/">{t('breadcrumb.home')}</a>
            <span class="separator">/</span>
            <span>{breadcrumb}</span>
          </nav>
        )}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}
