/* eslint-disable react/no-unknown-property */

// import React from 'react'
import { useGLTF, PerspectiveCamera, Float } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('w_casual.glb');
	return (
		<group {...props} dispose={null}>
			<Float
				speed={5} // Animation speed, defaults to 1
				rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
				floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
				floatingRange={[0]}
			>
				<group rotation={[0, -0.2, 0]} scale={0.65} dispose={null}>
					<PerspectiveCamera
						makeDefault={false}
						far={100}
						near={0.1}
						fov={22.895}
						position={[7.359, 4.958, 6.926]}
						rotation={[-0.627, 0.71, 0.441]}
					/>
					<mesh
						geometry={nodes.Object_2.geometry}
						material={materials.FABRIC_3_FRONT_3403757}
						position={[0, -2.876, 0]}
						rotation={[-Math.PI / 2, 0, 0.781]}
						scale={[0.028, 0.026, 0.024]}
					/>
					<mesh
						geometry={nodes.Object_3.geometry}
						material={materials.FABRIC_6_FRONT_3403936}
						position={[0, -2.876, 0]}
						rotation={[-Math.PI / 2, 0, 0.781]}
						scale={[0.028, 0.026, 0.024]}
					/>
					<mesh
						geometry={nodes.Object_4.geometry}
						material={materials.FABRIC_7_FRONT_3403962}
						position={[0, -2.876, 0]}
						rotation={[-Math.PI / 2, 0, 0.781]}
						scale={[0.028, 0.026, 0.024]}
					/>
				</group>
			</Float>
		</group>
	);
}

useGLTF.preload('w_casual.glb');
