/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('w_fashion-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={
					nodes['FO_001_Oversized-sweater_FABRIC_1_FRONT_3915_010_0'].geometry
				}
				material={materials['Oversized-sweater_FABRIC_1_FRONT_3915_010']}
				position={[0.058, -7.823, 0.103]}
				rotation={[0, 0.676, 0]}
				scale={0.055}
			/>
			<mesh
				geometry={nodes.Object_2.geometry}
				material={materials.wire_204204204_1}
				position={[0, 0, 2.55]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={3}
			/>
			<mesh
				geometry={nodes.Object_4.geometry}
				material={materials.wire_204204204_2}
				position={[0, 0, 2.55]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={3}
			/>
			<mesh
				geometry={nodes.Object_10.geometry}
				material={materials.PaletteMaterial001}
				position={[2.558, -0.333, 0.058]}
				rotation={[-Math.PI / 2, 0, 0.413]}
				scale={0.035}
			/>
			<mesh
				geometry={nodes.Object_11.geometry}
				material={materials.SohleStoff}
				position={[2.558, -0.333, 0.058]}
				rotation={[-Math.PI / 2, 0, 0.413]}
				scale={0.035}
			/>
		</group>
	);
}

useGLTF.preload('w_fashion-transformed.glb');
