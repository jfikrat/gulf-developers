import Router from 'preact-router'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Products } from './pages/Products.jsx'
import { Services } from './pages/Services.jsx'
import { Contact } from './pages/Contact.jsx'

export function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Router>
          <Home path="/gulf-developers/" />
          <Home path="/gulf-developers/index.html" />
          <About path="/gulf-developers/about" />
          <Products path="/gulf-developers/products" />
          <Services path="/gulf-developers/services" />
          <Contact path="/gulf-developers/contact" />
        </Router>
      </main>
      <Footer />
    </>
  )
}
