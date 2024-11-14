import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient=new QueryClient();

createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>
  </StoreContextProvider>
)
