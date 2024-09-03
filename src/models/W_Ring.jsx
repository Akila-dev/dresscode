/* eslint-disable react/no-unknown-property */

// import React from 'react'
import { useGLTF, Float } from '@react-three/drei';

export default function Ring(props) {
	const { nodes, materials } = useGLTF('w_ring.glb');
	return (
		<group {...props} dispose={null}>
			<Float
				speed={5} // Animation speed, defaults to 1
				rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
				floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
				floatingRange={[0]}
			>
				<group
					scale={5}
					position={[0, -0.45, 0]}
					rotation={[0.25, 0, 0]}
					dispose={null}
				>
					<mesh
						geometry={nodes.Object_4.geometry}
						material={materials.material}
						position={[-0.002, 0.103, -0.007]}
					/>
					<Float
						speed={2} // Animation speed, defaults to 1
						rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
						floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
						floatingRange={[0]}
					>
						<mesh
							geometry={nodes.Object_7.geometry}
							material={materials.glass}
							position={[-0.001, 0.083, 0.003]}
						/>
						<mesh
							geometry={nodes.Object_9.geometry}
							material={materials.Ring}
							position={[-0.001, 0.075, 0.003]}
						/>
					</Float>
					<mesh
						geometry={nodes.Object_11.geometry}
						material={materials['Leather.001']}
						position={[-0.001, 0.068, 0.003]}
					/>
				</group>
			</Float>
		</group>
	);
}

useGLTF.preload('w_ring.glb');
