import react from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
function App() {
  return (
    <>
    <Router>
      <div>
        <nav>
                <Link to="/">Home</Link>           
                <Link to="/contact">Contact</Link>          
                <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
