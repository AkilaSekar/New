import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Like from './Like.jsx'
import Cart from './Cart.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    <button count="0">Cart</button>
    <div className="container" >
      <div className="product" ><Cart name="Mysore Sandal" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart name="Gold" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart  name="Lux" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart  name="Santoor" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart name="Hamaam" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart name="Pears" description="I am mysore sandal soap"/></div>

    </div>
    <Like/>
  </React.StrictMode>,
)
