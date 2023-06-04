// !Components
import './App.css'
import Rotate from './components/Rotate'
import Slide from './components/Slide'
import Scale from './components/Scale'
import Drag from './components/Drag'
import Pages from './components/Pages'
import Hover from './components/Hover'
import Scroll from './components/Scroll'

// !Packages and Dependencies
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {

// *used for route page change animation (animate presence)
  const location = useLocation() 

  // *scroll is a self closing div that has fixed positioning
  // *rotate is a click event that rotates an item
  // *slide is a translate animation on an item
  // *scale makes things bigger
  // *drag allows you to drag and drop items
  // *hover is an animation built off hover gesture
  // *animate presence is a page fade/ease-in-out animation

  return (
    <>
      <Scroll /> 
      <Rotate />
      <Slide />
      <Scale />
      <Drag />
      <Hover />

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
