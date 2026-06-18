// src/main.jsx
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRoutes from './app/routes/AppRoutes.jsx'
import { store } from './app/store/store.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)