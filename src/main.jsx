import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// 👇 Service Worker’ni unregister qilish (cache’ni oldini olish)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}

// 👇 React ilovani render qilish
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)