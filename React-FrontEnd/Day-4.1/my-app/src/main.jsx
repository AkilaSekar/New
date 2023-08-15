import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './Cart.jsx'
import Test from './Test.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Cart/> */}
    <Cart/>
  </React.StrictMode>,
)
