import { useState } from 'react'
import Home from './routes/Home'
import DashBoard from './routes/Dashboard'
import Onboarding from './routes/Onboarding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/dashboard' element={<DashBoard />} />
        <Route  path='/onboarding' element={<Onboarding />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
