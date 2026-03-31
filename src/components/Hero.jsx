export function Hero({ title, subtitle, breadcrumb, description }) {
  return (
    <section class="page-hero">
      <div class="container">
        {breadcrumb && (
          <nav class="breadcrumb">
            <a href="/gulf-developers/">Home</a>
            <span class="separator">/</span>
            <span>{breadcrumb}</span>
          </nav>
        )}
        <h1>{title}</h1>
        {subtitle && <p class="arabic-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>{subtitle}</p>}
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}
