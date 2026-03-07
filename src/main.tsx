import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "next-themes"

import "./index.css"
import { ErrorBoundary } from "./components/error-boundary"
import { App } from "./App"

// --- Captura de Erros do Vite (HMR) ---
// Ouve erros de compilação vindos do servidor Vite via WebSocket
if (import.meta.hot) {
  import.meta.hot.on('vite:error', (data: any) => {
    // Dispara um evento customizado que o ErrorBoundary pode ouvir
    window.dispatchEvent(new CustomEvent('vite:error', { detail: data.err }))
  })
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
