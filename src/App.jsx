import React from 'react'
import { Route, Routes , Link } from 'react-router-dom'
import Home from './PAGES/Home'
import Project from './PAGES/Project'
import Agence from './PAGES/Agence'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  useGSAP(()=>{
    // const tl = gsap.timeline()
    gsap.from('.stair',{
      height : 0,
      duration:5,
      stagger : {
        amount:1
      }
    })
  })
  return (
    <div >
      <div className='h-screen w-full flex fixed top-0 z-10'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/agence' element={<Agence/>} />
      </Routes>
    </div>
  )
}

export default App