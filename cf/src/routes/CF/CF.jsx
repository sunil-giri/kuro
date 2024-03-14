import React from 'react'
import { Model } from '../../../Room_Set_010'
import { Canvas } from '@react-three/fiber'

function CF() {
  return (
    <div>
      <Canvas 
      camera={{fov:50}}
      raycaster={false}
      dpr={[0.5,1]}
      style={{position:"fixed",top:0}}
      
      shadows>
        <ambientLight intensity={1}/>
        <Model/>
      </Canvas>
    </div>
  )
}

export default CF