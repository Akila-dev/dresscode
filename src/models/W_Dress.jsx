/* eslint-disable react/no-unknown-property */

// import React from 'react'
import { useGLTF } from '@react-three/drei';

export default function Dress(props) {
	const { nodes, materials } = useGLTF('w_dress.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Object_2.geometry}
				material={materials.FABRIC_6_FRONT_2225972}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Object_3.geometry}
				material={materials.FABRIC_7_FRONT_2225986}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}

useGLTF.preload('w_dress.glb');
