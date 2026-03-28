import React from 'react'

const Video = ({className}) => {
  return (
    <div className={`h-full w-full overflow-hidden  ${className}`}>
        <video 
        className='h-full w-full object-cover'
        autoPlay 
        muted
        loop 
        src="../public/bgF.mp4"
        ></video>
    </div>
  )
}

export default Video