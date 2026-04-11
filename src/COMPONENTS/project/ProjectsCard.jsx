import React from 'react'

const ProjectsCard = (props) => {
    return (
        <>
            <div className='group h-full w-1/2 overflow-hidden hover:rounded-[50px] transition-all duration-300 relative'>
                <img className='h-full w-full object-cover' src={props.img1} alt="" />
                <div className='h-full w-full opacity-0 group-hover:opacity-100 bg-black/30 absolute top-0 flex justify-center items-center'>
                    <h2 className='text-white font-[fontBold] text-[4vw] border-2 rounded-full px-5 pt-2 leading-[0.9] uppercase'>voir le projet</h2>
                </div>
            </div>
            <div className='group h-full w-1/2 overflow-hidden hover:rounded-[50px] transition-all duration-300 relative'>
                <img className='h-full w-full object-cover' src={props.img2} alt="" />
                <div className='h-full w-full opacity-0 group-hover:opacity-100 bg-black/30 absolute top-0 flex justify-center items-center'>
                    <h2 className='text-white font-[fontBold] text-[4vw] border-2 rounded-full px-5 pt-2 leading-[0.9] uppercase'>voir le projet</h2>
                </div>
            </div>

        </>

    )
}

export default ProjectsCard