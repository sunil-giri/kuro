import React, { Suspense, useEffect } from 'react'
import {Canvas} from '@react-three/fiber'
import { Model } from '../../../CF_CubeV3'
import { useNavigation } from 'react-router-dom'
import { OrbitControls } from '@react-three/drei'
import './Menu.css'
function Menu() {
  const navigation=useNavigation()
  useEffect(()=>{
console.log("Navigation",navigation)
  },[navigation])
  return (
    
    <div className='menu-wrapper'>
      
      <div className="menu-items">
        <header>
          <p>
            #Unlock Creativity
          </p>
          <div className='contact-us'>Contact Us</div>
        </header>
        <div className="main-content">
        <div className='left'>
    <img src='/contact-us-default.svg'/>
    <img src='/showreel-default.svg'/>
        </div>
        <div className='right'>
        <Canvas
      camera={{position:[0,0,10],zoom:100}}
      raycaster={false}
      dpr={[0.5,1]}
      // style={{position:"fixed",top:0}}
      orthographic
      shadows>
        <Suspense fallback={null}>
        <ambientLight intensity={1}/>
        <OrbitControls makeDefault/>
        <Model/>
        </Suspense>
      </Canvas>
        </div>
        </div>
        <footer>
          <div className='cta-btn'>
            <div className='gallery-btn'>Gallery</div>
            <div className='audio-btn'> Audio</div>
          </div>
          <div className='hover-on-cube'>Hover</div>
        </footer>
      </div>
      
    </div>
  )
}

export default Menu