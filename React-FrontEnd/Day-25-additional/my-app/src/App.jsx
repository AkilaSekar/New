import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent.jsx'
import ParentComponent from './ParentComponent.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Day 25- Additional</h1>
    <Parent/>
    <ParentComponent/>
    </>
  )
}

export default App
