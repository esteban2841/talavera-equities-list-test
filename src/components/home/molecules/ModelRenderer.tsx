import { Canvas } from '@react-three/fiber/native'
import React, { Suspense, useRef } from 'react'
import { View } from 'react-native'
import {  OrbitControls, Stage } from "@react-three/drei/native";
import { Loader } from '../atoms/Loader';


interface Object3DRendererProps {
    children: React.ReactNode
}

const ModelRenderer = ({children}: Object3DRendererProps) => {
	console.log("TCL: ModelRenderer -> children", children)
    const ref = useRef()
  return (
    <View style={{
        height: 50,
        width: 50,
        backgroundColor: 'rgb(22, 22, 22)',
    }} >
        <Canvas dpr={[1, 10]} camera={{ fov: 1 }} frameloop={'always'}	>
            <Suspense fallback={<Loader/>}>
                <Stage
                preset="upfront" intensity={10}  
                environment="city">
                    {children}
                </Stage>
            </Suspense>
            <OrbitControls ref={ref as any} autoRotate  autoRotateSpeed={6}/>
        </Canvas>
    </View>
  )
}

export default ModelRenderer
