/* eslint-disable react/no-unknown-property */

import { useGLTF, PerspectiveCamera } from '@react-three/drei';

export default function Jewelries(props) {
	const { nodes, materials } = useGLTF('jewelries-transformed.glb');
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
			<mesh
				geometry={nodes.pasted__pasted__pPlatonic7854_BLACK_0.geometry}
				material={materials.PaletteMaterial001}
				position={[3.683, 3.842, 1.621]}
				rotation={[1.571, 0, -0.811]}
				scale={0.093}
			/>
			<mesh
				geometry={nodes.pSphere1_blinn1_0.geometry}
				material={materials['blinn1.001']}
				position={[1.246, 0.658, 2.558]}
				rotation={[-2.468, 1.294, 1.918]}
				scale={[0.014, 0.013, 0.014]}
			/>
			<mesh
				geometry={nodes.pSphere1_blinn5_0.geometry}
				material={materials['blinn5.002']}
				position={[1.246, 0.658, 2.558]}
				rotation={[-2.468, 1.294, 1.918]}
				scale={[0.014, 0.013, 0.014]}
			/>
			<mesh
				geometry={nodes.Box_jewelry_Box_2_0.geometry}
				material={materials['jewelry_Box_2.001']}
				position={[2.266, 0, 0.237]}
				rotation={[-Math.PI / 2, 0, -0.49]}
				scale={0.5}
			/>
			<mesh
				geometry={nodes.Pearls_Pearl_Necklace_0.geometry}
				material={materials['Pearl_Necklace.001']}
				position={[2.254, -0.019, 0.261]}
				rotation={[-Math.PI / 2, 0, -0.49]}
				scale={0.5}
			/>
		</group>
	);
}

useGLTF.preload('jewelries-transformed.glb');
