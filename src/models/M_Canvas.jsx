/* eslint-disable react/no-unknown-property */

// import React from 'react'
import { useGLTF, Float } from '@react-three/drei';

export default function Canvas(props) {
	const { nodes, materials } = useGLTF('m_canvas.glb');
	return (
		<group {...props} dispose={null}>
			<group
				scale={0.75}
				rotation={[2, 2, -2]}
				dispose={null}
				position={[-0.1, 0, 0]}
			>
				<Float
					speed={5} // Animation speed, defaults to 1
					rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
					floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
					floatingRange={[0]}
				>
					<mesh
						geometry={nodes.defaultMaterial.geometry}
						material={materials.NikeShoe}
					/>
				</Float>
			</group>
		</group>
	);
}

useGLTF.preload('m_canvas.glb');
