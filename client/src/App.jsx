import './App.css'
import Rotate from './components/Rotate'
import Slide from './components/Slide'
import Scale from './components/Scale'
import Drag from './components/Drag'
import Pages from './components/Pages'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation()

  return (
    <>
      <Rotate />
      <Slide />
      <Scale />
      <Drag />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Pages />} />
          <Route path='/left' element={<Pages />} />
          <Route path='/right' element={<Pages />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
