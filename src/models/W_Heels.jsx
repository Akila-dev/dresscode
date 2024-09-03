/* eslint-disable react/no-unknown-property */

// import React from 'react'
import { useGLTF, Float } from '@react-three/drei';

export default function Heels(props) {
	const { nodes, materials } = useGLTF('w_heels.glb');
	return (
		<group {...props} dispose={null}>
			<group
				scale={0.2}
				position={[-0.25, -0.45, 0]}
				rotation={[0, 1.25, 0]}
				dispose={null}
			>
				<Float
					speed={2} // Animation speed, defaults to 1
					rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
					floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
					floatingRange={[0]}
				>
					<mesh
						geometry={nodes.lambert1.geometry}
						material={materials.lambert1}
					/>
				</Float>
			</group>
		</group>
	);
}

useGLTF.preload('w_heels.glb');
