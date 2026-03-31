import Router from 'preact-router'
import { LangProvider } from './context/LangContext.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'
import { WhatsApp } from './components/WhatsApp.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Products } from './pages/Products.jsx'
import { Services } from './pages/Services.jsx'
import { Contact } from './pages/Contact.jsx'

export function App() {
  return (
    <LangProvider>
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
      <WhatsApp />
    </LangProvider>
  )
}
