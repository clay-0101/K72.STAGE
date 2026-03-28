import React from 'react'
import { Link } from 'react-router-dom'

const homeBottomText = () => {
  return (
    <div className='flex items justify-center gap-4  font-[fontBold] mb-2'>

      <div className=' h-[7vw] border-[3.5px] border-white rounded-full flex items-end '>
          <Link className=' text-[6.3vw] leading-[0.8] px-8'>PROJETS</Link>
      </div>
      <div className=' h-[7vw] border-[3.5px] border-white rounded-full flex items-end '>
          <Link className=' text-[6.3vw] leading-[0.8] px-8'>AGENCE</Link>
      </div>
      
      
    </div>
  )
}

export default homeBottomText