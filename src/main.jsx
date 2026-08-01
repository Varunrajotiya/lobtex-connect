import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import App from './App.jsx'
import './index.css'

// HashRouter (not BrowserRouter) is used so this app works out of the box on
// static hosts with no server-side rewrite rules — like GitHub Pages —
// without any extra 404.html fallback trickery. URLs look like /#/section.
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    updateSW(true)
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </HelmetProvider>
  </StrictMode>
)
