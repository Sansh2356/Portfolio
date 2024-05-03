import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'
import { useRef } from 'react'

const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()

  useFrame((_ ,delta)=>{
      if(isRotating){
         skyRef.current.rotation.y += 0.25 * delta
      }
      else if(isRotating != false){
         skyRef.current.rotation.y += 0.25 * delta
      }
  })
  return (
     <mesh ref={skyRef}>
        <primitive object={sky.scene}></primitive>
     </mesh>
  )
}

export {Sky}
