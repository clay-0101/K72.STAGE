import React from 'react'
import { Link } from 'react-router-dom'

const homeBottomText = () => {
  return (
    <div className='flex items justify-center gap-4  font-[fontBold] mb-2'>

      <div className=' h-[7vw] border-[3.5px] border-white rounded-full flex items-end hover:border-[#D3FD50] hover:text-[#D3FD50]'>
          <Link className=' text-[6.3vw] leading-[0.8] px-8 ' to='/projects'>PROJETS</Link>
      </div>
      <div className=' h-[7vw] border-[3.5px] border-white rounded-full flex items-end hover:border-[#D3FD50] hover:text-[#D3FD50]'>
          <Link className=' text-[6.3vw] leading-[0.8] px-8 ' to='/agence'>AGENCE</Link>
      </div>
      
      
    </div>
  )
}

export default homeBottomText