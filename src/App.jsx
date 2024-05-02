// import { useState } from 'react'
import { NavBar } from './components/NavBar'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <div>
    <div className='bg-slate-900'>
      <NavBar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
   </div>

   </>
  )
}

export default App
