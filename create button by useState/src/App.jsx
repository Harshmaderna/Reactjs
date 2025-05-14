import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  
  const updat = () => {
    setCount((prev) => prev + 1)
   
  }
  const incr = () => {
    setCount((prev) => prev - 1)
  }
  const rst = () => {
    setCount(0)
   
  }
    return (
    <>
      <h1>App {count}</h1>
      <button onClick={updat}>click & update app</button>
      <button onClick={rst}>click & reset app</button>
      <button onClick={incr}>click & increase app</button>
      
    </>
  )
}

export default App
