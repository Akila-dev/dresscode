/* eslint-disable react/no-unknown-property */

// import React from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import { easing } from 'maath';

export default function Shirt(props) {
	const { nodes, materials } = useGLTF('m_shirt.glb');
	useFrame((state, delta) =>
		easing.dampC(materials.lambert1.color, 0xffffff, 0.25, delta)
	);
	return (
		<group {...props} dispose={null}>
			<group scale={2.2} position={[0, -0.5, 0]} dispose={null}>
				<Float
					speed={5} // Animation speed, defaults to 1
					rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
					floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
					floatingRange={[0]}
				>
					<mesh
						castShadow
						geometry={nodes.T_Shirt_male.geometry}
						material={materials.lambert1}
						position={[0.419, 0, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
				</Float>
			</group>
		</group>
	);
}

useGLTF.preload('m_shirt.glb');
