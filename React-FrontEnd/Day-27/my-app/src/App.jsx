import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Class_Comp from './Class_Comp.jsx'
import Functional_Comp from './Functional_Comp.jsx'


function App() {
 const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Class component example:</h1>
      <div>
        <p>Count:{count}</p>
        <button onClick={handleClick}>Show/Hide Index</button>
        {count < 5 ? <Functional_Comp/> : <div>Index Component Removed!!!</div>}
      </div>
    </>
  )
}

export default App
