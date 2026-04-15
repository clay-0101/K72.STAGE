import React from 'react'
import ProjectsCard from '../COMPONENTS/project/ProjectsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectBottom from '../COMPONENTS/project/ProjectBottom';

const Project = () => {
  let imgObj = [
    {
      image1: './projets1.png',
      image2: './projets2.png'
    },
    {
      image1: './projets3.jpg',
      image2: './projets4.jpg'
    },
    {
      image1: './projets5.jpg',
      image2: './projets6.jpg'
    },
    {
      image1: './projets7.jpg',
      image2: './projets8.jpg'
    },
    {
      image1: './projets9.jpg',
      image2: './projets10.jpg'
    },
    {
      image1: './projets11.jpg',
      image2: './projets12.jpg'
    },
    {
      image1: './projets13.jpg',
      image2: './projets14.jpg'
    },
    {
      image1: './projets15.jpg',
      image2: './projets16.jpg'
    },
    {
      image1: './projets17.jpg',
      image2: ''
    },

  ]
 gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from('.hero',{
      height : '50px',
      stagger : {
        amount : 0.1
      },
      scrollTrigger:{
        trigger : '.mainHero',
   
        start : 'top 100%',
        end : 'top -150%',
        scrub : true
      }

    })
  })
  return (
    <div>
      <div className='p-[10px] '>
        <h1 className='uppercase font-[fontBold] text-[13vw] mt-[42vh] '>Projets<sup className='text-[2.5vw] align-super relative -top-[3vw] '>17</sup></h1>
      </div>
      <div className='mainHero -mt-20 mb-3'>
        {imgObj.map((elem) => {
          return <div className='hero h-[600px] w-full flex gap-[0.7vw] pt-[0.5vw] px-[0.5vw]'>
            <ProjectsCard img1={elem.image1} img2={elem.image2}/>
          </div>
        })}

      </div>
      <ProjectBottom/>

    </div>
  )
}

export default Project