/* eslint-disable react/no-unknown-property */

import { useGLTF, Float } from '@react-three/drei';

export default function Jewelries(props) {
	const { nodes, materials } = useGLTF('jewelries-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0.3, 0, 0]} scale={0.85} dispose={null}>
				<Float
					speed={0.75}
					rotationIntensity={0.25}
					floatIntensity={0.1}
					floatingRange={[0]}
					autoInvalidate
				>
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
						position={[1.87, 1.044, 3.008]}
						rotation={[-2.468, 1.294, 1.918]}
						scale={[0.014, 0.013, 0.014]}
					/>
					<mesh
						geometry={nodes.pSphere1_blinn5_0.geometry}
						material={materials['blinn5.002']}
						position={[1.87, 1.044, 3.008]}
						rotation={[-2.468, 1.294, 1.918]}
						scale={[0.014, 0.013, 0.014]}
					/>
				</Float>
			</group>
		</group>
	);
}

useGLTF.preload('jewelries-transformed.glb');
