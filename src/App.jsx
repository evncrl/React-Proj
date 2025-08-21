import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './title.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Title name = "EVAN"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Title subtitle = "This is a subtitle"/>

    </>
  )
}

export default App
