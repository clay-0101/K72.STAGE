
import { Route, Routes, Link } from 'react-router-dom'
import Home from './PAGES/Home'
import Project from './PAGES/Project'
import Agence from './PAGES/Agence'
import Navbar from './COMPONENTS/navigation/Navbar'
import FullScreenNav from './COMPONENTS/navigation/FullScreenNav'
import { useState } from 'react'



const App = () => {

const [navPresence, setNavPresence] = useState('hidden')
const [homePresence, setHomePresence] = useState('block')
    const [navibarH, setNavibarH] = useState('md:w-[9vw]')

// console.log(navPresence)
// console.log(homePresence)
  return (
    <div className='h-screen w-full'>
       {/* <Project /> */}
        <Navbar setNavPresence={setNavPresence} navPresence={navPresence} navibarH = {navibarH}/>
        <FullScreenNav navPresence={navPresence} setNavPresence={setNavPresence}/>
      <Routes>
        <Route path='/' element={<Home homePresence={homePresence}/>} />
        <Route path='/projects' element={<Project setNavibarH={setNavibarH}/>} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App