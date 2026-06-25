// src/main.jsx
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRoutes from '../../spotify/src/app/routes/AppRoutes.jsx'
import { store } from '../src/app/store/store.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)