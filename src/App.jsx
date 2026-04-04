
import { Route, Routes, Link } from 'react-router-dom'
import Home from './PAGES/Home'
import Project from './PAGES/Project'
import Agence from './PAGES/Agence'
import Navbar from './COMPONENTS/navigation/Navbar'
import FullScreenNav from './COMPONENTS/navigation/FullScreenNav'



const App = () => {




  return (
    <div className='h-screen w-full'>
        <FullScreenNav/>
        {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/agence' element={<Agence />} />
      </Routes> */}
    </div>
  )
}

export default App