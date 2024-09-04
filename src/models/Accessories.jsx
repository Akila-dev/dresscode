/* eslint-disable react/no-unknown-property */

import { useGLTF, Float } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('accessories-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, -0.5, 0]} dispose={null}>
				<Float
					speed={2}
					rotationIntensity={1}
					floatIntensity={1}
					floatingRange={[0, 0.1]}
				>
					<group>
						<mesh
							geometry={
								nodes.pasted__pasted__pTorus1_pasted__pasted__blinn3_0.geometry
							}
							material={materials.pasted__pasted__blinn3}
							position={[0.335, 1.017, 0]}
							scale={0.861}
						/>
						<mesh
							geometry={nodes.pasted__pasted__pTorus2_pasted__blinn5_0.geometry}
							material={materials.pasted__blinn5}
							position={[0.392, 0.902, 0.995]}
							rotation={[-1.746, -0.022, Math.PI]}
							scale={[0.009, 0.009, 0.011]}
						/>
						<mesh
							geometry={nodes.pasted__pCone1_blinn5_0.geometry}
							material={materials.blinn5}
							position={[0.335, 2.457, 0]}
							scale={1.626}
						/>
					</group>
				</Float>
				<Float
					speed={2}
					rotationIntensity={1}
					floatIntensity={1}
					floatingRange={[0, 0.1]}
				>
					<mesh
						geometry={nodes.Object_4.geometry}
						material={materials.GlassShade3}
						position={[0.641, -0.112, 0.421]}
						rotation={[-0.477, 0.731, 0.334]}
						scale={1.296}
					/>
				</Float>
			</group>
		</group>
	);
}

useGLTF.preload('accessories-transformed.glb');
