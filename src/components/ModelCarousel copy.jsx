/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// import Scene from '../../Scene';

import {
	M_Canvas,
	M_Shirt,
	M_Watch,
	W_Ring,
	W_Casual,
	W_Heels,
} from '../models';

const ModelCarousel = () => {
	return (
		<div className="w-full h-screen overflow-hidden">
			<Canvas
				shadows
				dpr={[1, 2]}
				// gl={{ preserveDrawingBuffer: true }}
				camera={{
					fov: 45,
					near: 0.1,
					far: 200,
					position: [1, 0, 2.5],
				}}
			>
				<Suspense>
					<OrbitControls
						autoRotate={false}
						enableZoom={false}
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={Math.PI / 2}
					/>
					<ambientLight />
					<pointLight
						intensity={200}
						decay={2}
						position={[4.076, 5.904, -1.005]}
						rotation={[-1.839, 0.602, 1.932]}
					/>
					<pointLight
						intensity={200}
						decay={2}
						position={[-8.076, 5.904, -1.005]}
						rotation={[-1.839, 0.602, 1.932]}
					/>
					<group>
						{/* <M_Canvas scale={0.7} rotation={[2, 2, -2]} /> */}
						{/* <M_Shirt scale={2.2} position={[0, -0.55, 0]} /> */}
						{/* <M_Watch scale={0.65}  /> */}
						{/* <W_Casual rotation={[0, -0.2, 0]} scale={0.65} /> */}
						{/* <W_Heels
							scale={0.2}
							position={[0, -0.45, 0]}
							rotation={[0, 1.25, 0]}
						/> */}
						{/* <W_Ring
							scale={5}
							position={[0, -0.45, 0]}
							rotation={[0.25, 0, 0]}
						/> */}
					</group>
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ModelCarousel;
