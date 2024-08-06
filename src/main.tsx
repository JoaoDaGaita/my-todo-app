import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { TodosContextProvider } from "./contexts/TodosContextProvider.tsx"
import { KindeProvider } from "@kinde-oss/kinde-auth-react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="835b30ac00044e5a9ccd59789b6bc3ee"
      domain="https://jvgs.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>,
)
