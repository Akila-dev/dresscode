/* eslint-disable react/no-unknown-property */

import { useGLTF, Float } from '@react-three/drei';

export default function W_Fashion(props) {
	const { nodes, materials } = useGLTF('w_fashion-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<Float
				speed={1}
				rotationIntensity={0.5}
				floatIntensity={0.5}
				floatingRange={[0, 0.1]}
			>
				<mesh
					geometry={
						nodes['FO_001_Oversized-sweater_FABRIC_1_FRONT_3915_010_0'].geometry
					}
					material={materials['Oversized-sweater_FABRIC_1_FRONT_3915_010']}
					position={[0.058, -7.823, 0.103]}
					rotation={[0, 0.676, 0]}
					scale={0.055}
				/>
			</Float>
			<Float
				speed={1}
				rotationIntensity={2}
				floatIntensity={1}
				floatingRange={[0, 0.1]}
			>
				<group position={[-0.75, 0, 0.25]}>
					<mesh
						geometry={nodes.Object_2.geometry}
						material={materials.wire_204204204_1}
						position={[-0.261, -1.439, 1.147]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={3.668}
					/>
					<mesh
						geometry={nodes.Object_4.geometry}
						material={materials.wire_204204204_2}
						position={[-0.261, -1.439, 1.147]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={3.668}
					/>
				</group>
			</Float>
			<Float
				speed={2}
				rotationIntensity={1}
				floatIntensity={1}
				floatingRange={[0, 0.1]}
			>
				<group position={[0.5, 0.5, 0.15]}>
					<mesh
						geometry={nodes.Object_10.geometry}
						material={materials.PaletteMaterial001}
						position={[1.365, -1.645, 0.098]}
						rotation={[-Math.PI / 2, 0, 0.413]}
						scale={0.045}
					/>
					<mesh
						geometry={nodes.Object_11.geometry}
						material={materials.SohleStoff}
						position={[1.365, -1.645, 0.098]}
						rotation={[-Math.PI / 2, 0, 0.413]}
						scale={0.045}
					/>
				</group>
			</Float>
		</group>
	);
}

useGLTF.preload('w_fashion-transformed.glb');
