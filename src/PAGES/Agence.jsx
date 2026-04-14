import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    '/img1.jpg',
    '/img1.jpg',
    '/img2.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img4.jpg',
    '/img5.jpg',
    '/img5.jpg',
    '/img6.jpg',
    '/img6.jpg',
    '/img7.jpg',
    '/img7.jpg',
    '/img8.jpg',
    '/img8.jpg',
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 27.8%',
        end: 'top -100%',
        scrub: true,
        pin: true,

        onUpdate: (elem) => {
          const imgIndex = Math.min(
            Math.floor(elem.progress * imageArray.length),
            imageArray.length - 1
          )
          imageRef.current.src = imageArray[imgIndex]
        }
      }
    })
  })
  return (
    <div className='h-screen'>
      <div className='section1 py-1'>

        <div ref={imageDivRef} className='h-[20vw] w-[15vw]  absolute top-[15vw] left-[30vw]'>
          <div className='h-full w-full rounded-3xl overflow-hidden'>
            <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="img1" />
          </div>
        </div>

        <div className='font-[fontBold] relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw]  uppercase leading-[17.5vw] text-center'>Soixan7e Douze</h1>
          </div>
          <div className='pl-[36%] pr-5'>
            <p className='text-[3.5rem] leading-[1]'>
              &emsp;&emsp;&emsp;&emsp;&emsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen w-full'>
        <div className='w-full h-[25vw] font-[fontBold] text-lg flex justify-center gap-[5vw] mt-[10vw] '>
          <div className='w-[25%] h-full flex flex-col justify-between '>
            <h2>Expertise</h2>
            <h2>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</h2>
          </div>
          <div className='w-[25%] h-full flex flex-col justify-between '>
            <ul>
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Contenu</li>
            </ul>
            <h2>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</h2>
          </div>
          <div className='w-[25%] h-full flex flex-col justify-end '>
            <h2>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. </h2>
          </div>
        </div>
      </div>
 
    </div>
  )
}

export default Agence