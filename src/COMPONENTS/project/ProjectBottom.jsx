import React from 'react'
import { Link } from 'react-router-dom'
import MontrealClock from '../home/MontRealClock'

const ProjectBottom = () => {
    return (

        <div className='h-[30vw] w-full bg-black relative flex flex-col justify-between'>
            <div className='flex justify-between px-2 py-1'>
                <div >
                    <Link className='font-[fontBold] text-[5vw] mr-2 text-white border-2 border-white rounded-full px-7 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50]'>FB</Link>
                    <Link className='font-[fontBold] text-[5vw] mr-2 text-white border-2 border-white rounded-full px-7 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50]'>FB</Link>
                    <Link className='font-[fontBold] text-[5vw] mr-2 text-white border-2 border-white rounded-full px-7 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50]'>FB</Link>
                    <Link className='font-[fontBold] text-[5vw] mr-2 text-white border-2 border-white rounded-full px-7 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50]'>FB</Link>
                </div>
                <div className='h-[6vw] flex items-center gap-3 mt-1 text-white border-2 border-white rounded-full px-7 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50]'>
                    <Link className='font-[fontBold]  text-[5vw] '>CONTACT</Link>
                    <img className='h-[90%] w-15 mb-2' src="./whiteHeart.png" alt="0" />
                </div>
            </div>
            <div>
                <MontrealClock />
                <div className='flex items-center justify-end gap-10 mb-3 font-[fontBold] text-[14px]'>
                    <h2 className='uppercase hover:text-[#D3FD50] text-white'>Politique de confidentialité</h2>
                    <h2 className='uppercase hover:text-[#D3FD50] text-white'>Avis de confidentialité</h2>
                    <h2 className='uppercase hover:text-[#D3FD50] text-white'>Rapport éthique</h2>
                    <h2 className='uppercase hover:text-[#D3FD50] text-white'>OPTIONS DE CONSENTMENT</h2>
                    <h2 className='uppercase hover:text-[#D3FD50] text-white ml-0 text-[18px] ml-30'>RETOUR EN HAUT</h2>
                </div>
            </div>
        </div>

    )
}

export default ProjectBottom