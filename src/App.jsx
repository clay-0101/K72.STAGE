
import { Route, Routes, Link } from 'react-router-dom'
import Home from './PAGES/Home'
import Project from './PAGES/Project'
import Agence from './PAGES/Agence'
import Navbar from './COMPONENTS/navigation/Navbar'
import FullScreenNav from './COMPONENTS/navigation/FullScreenNav'
import { useState } from 'react'


const App = () => {

const [navPresence, setNavPresence] = useState('none')
const [homePresence, setHomePresence] = useState('block')

// console.log(navPresence)
// console.log(homePresence)
  return (
    <div className='h-screen w-full'>
       
        <Navbar setNavPresence={setNavPresence} setHomePresence={setHomePresence}/>
        <FullScreenNav navPresence={navPresence}/>
      <Routes>
        <Route path='/' element={<Home homePresence={homePresence}/>} />
        <Route path='/projects' element={<Project />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App