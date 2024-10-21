import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="counter-container">
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count => count * 2)}>Double</button>
        <button onClick={() => setCount(count => count *3)}>Tripple</button>
      </div>
    </>
  )
}

export default App
