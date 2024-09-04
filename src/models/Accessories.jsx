/* eslint-disable react/no-unknown-property */

import { useGLTF, PerspectiveCamera } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('accessories-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.15, 0]} dispose={null}>
				{/* <PerspectiveCamera
					makeDefault={false}
					far={100}
					near={0.1}
					fov={22.895}
					position={[7.359, 4.958, 6.926]}
					rotation={[-0.627, 0.71, 0.441]}
				/> */}
				<mesh
					geometry={
						nodes.pasted__pasted__pTorus1_pasted__pasted__blinn3_0.geometry
					}
					material={materials.pasted__pasted__blinn3}
					position={[0.237, 1.149, 0]}
					scale={0.609}
				/>
				<mesh
					geometry={nodes.pasted__pasted__pTorus2_pasted__blinn5_0.geometry}
					material={materials.pasted__blinn5}
					position={[0.277, 1.068, 0.703]}
					rotation={[-1.746, -0.022, Math.PI]}
					scale={[0.006, 0.006, 0.008]}
				/>
				<mesh
					geometry={nodes.pasted__pCone1_blinn5_0.geometry}
					material={materials.blinn5}
					position={[0.237, 2.168, 0]}
					scale={1.15}
				/>
				<mesh
					geometry={nodes.Object_4.geometry}
					material={materials.GlassShade3}
					position={[1.128, 0.432, 0.848]}
					rotation={[-0.103, 0.808, 0.071]}
					scale={0.916}
				/>
				<mesh
					geometry={nodes.Cube002_Material001_0.geometry}
					material={materials['Material.002']}
					position={[-0.421, -0.728, -0.519]}
					rotation={[Math.PI / 2, 0, -2.622]}
					scale={0.3}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('accessories-transformed.glb');
