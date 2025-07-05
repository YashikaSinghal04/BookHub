import React from 'react'
import Home from './Home/home'
import Courses from './courses/Courses'
import {Route,Routes} from 'react-router-dom'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
function App() {
  return (
   <>
  {/* <home/>
  <Course/> */}


  <Routes>
    <Route path="/" element={<Home/>} />
     <Route path="/course" element={<Courses/>} />
          <Route path="/signup" element={<SignUp/>} />
           <Route path="/contact" element={<Contact/>} />

  </Routes>
   </>
  )
}

export default App
