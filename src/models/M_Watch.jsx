/* eslint-disable react/no-unknown-property */

// import React from 'react'
import { useGLTF, Float } from '@react-three/drei';

export default function Watch(props) {
	const { nodes, materials } = useGLTF('m_watch.glb');
	return (
		<group {...props} dispose={null}>
			<Float
				speed={5}
				rotationIntensity={0.5}
				floatIntensity={1}
				floatingRange={[0]}
			>
				<group
					scale={0.65}
					dispose={null}
					position={[-0.25, 0, 0]}
					rotation={[0, 0, 0]}
				>
					<mesh
						geometry={nodes.base001_base_color_0.geometry}
						material={materials.base_color}
						rotation={[1.498, 0, 0]}
						scale={0.01}
					/>
					<mesh
						geometry={nodes.base001_screen_0.geometry}
						material={materials.screen}
						rotation={[1.498, 0, 0]}
						scale={0.01}
					/>
					<mesh
						geometry={nodes.base001_back_0.geometry}
						material={materials.back}
						rotation={[1.498, 0, 0]}
						scale={0.01}
					/>
					<mesh
						geometry={nodes.base001_METAL_0.geometry}
						material={materials.METAL}
						rotation={[1.498, 0, 0]}
						scale={0.01}
					/>
					<mesh
						geometry={nodes.radiao_dial001_orange_0.geometry}
						material={materials.orange}
						position={[0.388, 0.232, -0.137]}
						rotation={[1.498, 0, -Math.PI / 2]}
						scale={0.01}
					/>
					<mesh
						geometry={nodes.wristband003_wristband_0.geometry}
						material={materials.wristband}
						position={[-0.205, 0.742, -0.199]}
						rotation={[1.498, 0, 0]}
						scale={0.01}
					/>
				</group>
			</Float>
		</group>
	);
}

useGLTF.preload('m_watch.glb');
