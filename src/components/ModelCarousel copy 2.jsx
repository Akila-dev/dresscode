/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	useGLTF,
	useTexture,
	AccumulativeShadows,
	RandomizedLight,
	Decal,
	Environment,
	Center,
	Float,
} from '@react-three/drei';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { state } from '../store';
import { motion } from 'framer-motion-3d';

import Cover from './Cover';

// import Scene from '../../Scene';

import {
	M_Canvas,
	M_Shirt,
	M_Watch,
	W_Ring,
	W_Casual,
	W_Heels,
} from '../models';

function Backdrop() {
	const shadows = useRef();
	useFrame((state, delta) =>
		easing.dampC(
			shadows.current.getMesh().material.color,
			state.color,
			0.25,
			delta
		)
	);
	return (
		<AccumulativeShadows
			ref={shadows}
			temporal
			frames={60}
			alphaTest={0.85}
			scale={10}
			rotation={[Math.PI / 2, 0, 0]}
			position={[-2, 0, -1.64]}
		>
			<RandomizedLight
				amount={4}
				radius={9}
				intensity={0.55}
				ambient={0.25}
				position={[6, 5, -9.5]}
			/>
			<RandomizedLight
				amount={4}
				radius={5}
				intensity={0.25}
				ambient={0.55}
				position={[-4, 5, -8.5]}
			/>
		</AccumulativeShadows>
	);
}

const ModelContainer = ({
	children,
	positions,
	initial,
	incrementFactor,
	id,
}) => {
	const [pos, setPos] = useState(id);
	const [nextPos, setNextPos] = useState(id);

	useEffect(() => {
		setNextPos(
			id + incrementFactor < positions.length
				? id + incrementFactor
				: id + incrementFactor - positions.length
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [incrementFactor]);

	return (
		// <Float
		// 	speed={1} // Animation speed, defaults to 1
		// 	rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
		// 	floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
		// 	floatingRange={[0]}
		// >
		<motion.group
			initial={{
				x: initial.x,
				y: initial.y,
				scale: initial.scale,
				z: initial.z,
			}}
			animate={{
				x: positions[nextPos].x,
				y: positions[nextPos].y,
				scale: positions[nextPos].scale,
				z: positions[nextPos].z,
			}}
			transition={{
				type: 'spring',
				duration: 2,
				bounce: 0.25,
			}}
		>
			{children}
		</motion.group>
		// </Float>
	);
};

const ModelCarousel = () => {
	const [incrementFactor, setIncrementFactor] = useState(0);
	const positions = [
		{ x: 0, y: 0, z: 0, scale: 1.2 },
		{ x: 1.25, y: 0, z: -0.5, scale: 0.65 },
		{ x: 0.35, y: 0, z: -10, scale: 0 },
		// { x: -0.5, y: 0, z: -10, scale: 0 },
		{ x: -1.75, y: 0, z: -10, scale: 0 },
		{ x: -2.5, y: 0, z: -0.5, scale: 0.85 },
	];
	useEffect(() => {
		const interval = setInterval(() => {
			if (incrementFactor + 1 < positions.length) {
				setIncrementFactor(incrementFactor + 1);
			} else {
				setIncrementFactor(0);
			}
		}, 5000);
		return () => clearInterval(interval);
	}, [incrementFactor, positions.length]);
	return (
		<div className="w-full h-screen overflow-hidden relative">
			<div className="w-full h-full overflow-hidden bg-black relative">
				<Cover activeId={incrementFactor} />
				<Canvas
					shadows
					dpr={[1, 2]}
					gl={{ preserveDrawingBuffer: true }}
					camera={{
						fov: 45,
						near: 0.1,
						far: 200,
						position: [1, 0, 2.5],
					}}
				>
					<Suspense>
						<ambientLight intensity={0.5} />
						{/* <pointLight
						intensity={200}
						decay={2}
						position={[4.076, 5.904, -1.005]}
						rotation={[-1.839, 0.602, 1.932]}
					/> */}
						<Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
						<Backdrop />
						<group position={[0, -0.1, 0]}>
							<ModelContainer
								positions={positions}
								initial={positions[0]}
								incrementFactor={incrementFactor}
								id={0}
							>
								<M_Shirt />
							</ModelContainer>
							<ModelContainer
								positions={positions}
								initial={positions[1]}
								incrementFactor={incrementFactor}
								id={1}
							>
								<W_Casual />
							</ModelContainer>
							<ModelContainer
								positions={positions}
								initial={positions[2]}
								incrementFactor={incrementFactor}
								id={2}
							>
								<M_Watch />
							</ModelContainer>
							<ModelContainer
								positions={positions}
								initial={positions[3]}
								incrementFactor={incrementFactor}
								id={3}
							>
								<W_Ring />
							</ModelContainer>
							<ModelContainer
								positions={positions}
								initial={positions[4]}
								incrementFactor={incrementFactor}
								id={4}
							>
								<M_Canvas />
							</ModelContainer>
							{/* <ModelContainer
								positions={positions}
								initial={positions[5]}
								incrementFactor={incrementFactor}
								id={5}
							>
								<W_Heels />
							</ModelContainer> */}
						</group>
					</Suspense>
				</Canvas>
			</div>
			<Cover activeId={incrementFactor} />
		</div>
	);
};

export default ModelCarousel;
