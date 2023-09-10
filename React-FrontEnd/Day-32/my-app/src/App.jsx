import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  const apiURL='http://localhost:4000/profile';
  axios.get(apiURL)
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    })
  return (
    <>
      <p></p>
    </>
  )
}

export default App
