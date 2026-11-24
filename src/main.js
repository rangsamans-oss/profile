import './style.css'
import { Navbar } from './navbar.js'
import { HomePage } from './pages/home.js'
import { AboutPage } from './pages/about.js'
import { ContactPage, setupContactForm } from './pages/contact.js'
import { AdminPage } from './pages/admin.js'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/admin': AdminPage,
}

function render() {
  const path = location.hash.slice(1) || '/'
  const page = routes[path] || HomePage
  const current = routes[path] ? path : '/'

  document.querySelector('#app').innerHTML = `
    <div class="min-h-screen bg-slate-50 text-slate-900">
      ${Navbar(current)}
      ${page()}
    </div>`

  setupContactForm()
}

window.addEventListener('hashchange', render)
render()