import { useState } from 'preact/hooks'
import Home from './pages/Home/Home'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}
