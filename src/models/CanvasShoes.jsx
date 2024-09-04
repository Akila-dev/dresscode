/* eslint-disable react/no-unknown-property */

import { useGLTF, Float } from '@react-three/drei';

export default function CanvasShoes(props) {
	const { nodes, materials } = useGLTF('canvas-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<group
				scale={1.65}
				rotation={[0.2, -1, 0.65]}
				position={[-0.4, -0.4, 0]}
				dispose={null}
			>
				<Float
					speed={2}
					rotationIntensity={1}
					floatIntensity={1}
					floatingRange={[0, 0.1]}
				>
					<mesh
						geometry={nodes.defaultMaterial.geometry}
						material={materials.NikeShoe}
						position={[-0.067, 0.109, -0.673]}
						rotation={[-1.468, 0.25, 1.878]}
					/>
				</Float>
			</group>
		</group>
	);
}

useGLTF.preload('canvas-transformed.glb');
