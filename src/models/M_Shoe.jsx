/* eslint-disable react/no-unknown-property */

// import React from 'react'
import { useGLTF } from '@react-three/drei';

export default function Shoe(props) {
	const { nodes, materials } = useGLTF('m_shoe.glb');
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.shoe.geometry} material={materials.mesh} />
			<mesh geometry={nodes.shoe_1.geometry} material={materials.caps} />
			<mesh geometry={nodes.shoe_2.geometry} material={materials.laces} />
		</group>
	);
}

useGLTF.preload('m_shoe.glb');
