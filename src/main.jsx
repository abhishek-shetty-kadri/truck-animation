import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Order from './Orders/Orders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Order />
  </StrictMode>,
)
