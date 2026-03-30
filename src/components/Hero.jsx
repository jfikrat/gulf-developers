export function Hero({ title, breadcrumb, description }) {
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
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}
