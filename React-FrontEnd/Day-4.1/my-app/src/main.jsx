import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Post from './Post.jsx'
import Cart from './Cart.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Post/> */}
    {/* <Post name="Post 1" color="Red" flag="true"/> */}
    {/* <Post name="Post 2" color="Green" flag="false"/> */}
    <div className="container" >
      <div className="product" ><Cart name="Mysore Sandal" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart name="Gold" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart  name="Lux" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart  name="Santoor" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart name="Hamaam" description="I am mysore sandal soap"/></div>
      <div className="product"><Cart name="Pears" description="I am mysore sandal soap"/></div>

    </div>
  
  </React.StrictMode>,
)
