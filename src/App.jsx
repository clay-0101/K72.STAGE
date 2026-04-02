
import { Route, Routes, Link } from 'react-router-dom'
import Home from './PAGES/Home'
import Project from './PAGES/Project'
import Agence from './PAGES/Agence'



const App = () => {




  return (
    <div className='bg-white h-screen w-full'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App