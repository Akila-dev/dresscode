/* eslint-disable react/no-unknown-property */

import React from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export default function Model(props) {
	const { scene } = useGLTF('m_fashion-transformed.glb');
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);
	return (
		<group {...props} dispose={null}>
			{/* <PerspectiveCamera
				makeDefault={false}
				far={100}
				near={0.1}
				fov={22.895}
				position={[7.359, 4.958, 6.926]}
				rotation={[-0.627, 0.71, 0.441]}
			/> */}
			<spotLight
				intensity={100}
				angle={0.725}
				penumbra={0.15}
				decay={2}
				position={[3.184, 0.721, 7.183]}
				rotation={[-0.174, 0.56, 1.062]}
				target={nodes.Spot.target}
			>
				<primitive object={nodes.Spot.target} position={[0, 0, -1]} />
			</spotLight>
			<mesh
				geometry={nodes.T_Shirt_male.geometry}
				material={materials.lambert1}
				position={[2.081, -0.856, -0.849]}
				rotation={[Math.PI / 2, 0, -0.738]}
				scale={5}
			/>
			<mesh
				geometry={nodes.Object_2.geometry}
				material={materials.lambert2SG}
				position={[-0.869, -0.811, 1.357]}
				rotation={[-Math.PI / 2, 0, 0.51]}
				scale={0.08}
			/>
			<mesh
				geometry={nodes.Object_6.geometry}
				material={materials.PaletteMaterial001}
				position={[1.913, 0.176, -0.049]}
				rotation={[1.93, 0.731, -1.261]}
				scale={[0.144, 0.125, 0.168]}
			/>
			<mesh
				geometry={nodes.Object_14.geometry}
				material={materials.Clavder_Gold_bevel}
				position={[1.62, 0.026, -0.402]}
				rotation={[1.879, 0.701, 2.135]}
				scale={[0.009, 0.008, 0.013]}
			/>
			<mesh
				geometry={nodes.Object_79.geometry}
				material={materials.PaletteMaterial002}
				position={[1.956, 0.206, -0.017]}
				rotation={[-2.572, 0.229, -2.326]}
				scale={[0.084, 0.064, 0.072]}
			/>
		</group>
	);
}

useGLTF.preload('m_fashion-transformed.glb');
