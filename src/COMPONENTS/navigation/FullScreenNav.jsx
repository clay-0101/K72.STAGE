import React from 'react'

const FullScreenNav = () => {
  return (
    <div>
        <div className='border-y-2 font-[fontBold]'>

            <h1 className='text-[8.5vw] text-center leading-[8.5vw]'>PROJECT</h1>
            <div className='flex overflow-x-auto text-nowrap items-center bg-[#D3FD50]'>
                <h2 className='text-[8.5vw] leading-[8.5vw]'>POUR TOUT VOIR</h2>
                <div className='h-25 w-[17vw] flex-shrink-0 overflow-hidden rounded-full mx-5'>
                    <img className='h-full w-full ' src="/navimg1.png" alt="1" />
                </div>

                <h2 className='text-[8.5vw] leading-[8.5vw]'>POUR TOUT VOIR</h2>
                <div className='h-25 w-[17vw] flex-shrink-0 overflow-hidden rounded-full mx-5'>
                    <img className='h-full w-full ' src="/navimg2.jpg" alt="1" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullScreenNav