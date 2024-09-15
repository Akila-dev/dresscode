/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	useGLTF,
	Environment,
	MeshReflectorMaterial,
	PerformanceMonitor,
	Html,
	useProgress,
} from '@react-three/drei';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { state } from '../store';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

import useDeviceSize from '../utils/useDeviceSize';
import Cover from './Cover';
import StarsCanvas from './StarsCanvas';

import bgImage from '../assets/hero-bg.jpg';
// import bgImage from '../assets/hero-bg.jpg';

// import Jewelries from '../../Jewelries';

import {
	M_Fashion,
	W_Fashion,
	Accessories,
	CanvasShoes,
	Jewelries,
} from '../models';

function Loader() {
	const { progress } = useProgress();
	return (
		<Html center>
			<div className="flex-center a">{progress} % loaded</div>
		</Html>
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
				bounce: 0,
			}}
		>
			{children}
		</motion.group>
	);
};

const Floor = () => (
	<mesh rotation={[-Math.PI / 2, 0, 0]} scale={2}>
		<planeGeometry args={[50, 50]} />
		<MeshReflectorMaterial
			blur={[300, 100]}
			resolution={2048}
			mixBlur={1}
			mixStrength={80}
			roughness={1}
			depthScale={1.2}
			minDepthThreshold={0.4}
			maxDepthThreshold={1.4}
			color="#010101"
			side={THREE.DoubleSide}
			// color="#050505"
			metalness={0.5}
		/>
	</mesh>
);

const ModelCarousel = () => {
	const { progress } = useProgress();
	const [incrementFactor, setIncrementFactor] = useState(0);
	const positions = [
		{ x: -0.2, y: 0, z: 0, scale: 1 },
		{ x: -8, y: -2, z: -1.1, scale: 0.55 },
		{ x: -7, y: -1.8, z: -3, scale: 0.3 },
		{ x: -1, y: -0.1, z: -3, scale: 0.2 },
		{ x: 2.5, y: 1.1, z: -1, scale: 0.35 },
	];
	const { width, height } = useDeviceSize();
	useEffect(() => {
		if (progress >= 100) {
			const interval = setInterval(() => {
				if (incrementFactor + 1 < positions.length) {
					setIncrementFactor(incrementFactor + 1);
				} else {
					setIncrementFactor(0);
				}
			}, 5000);
			return () => clearInterval(interval);
		}
	}, [progress, incrementFactor, positions.length]);

	const [dpr, setDpr] = useState(1.5);

	return (
		<div className="w-full h-screen overflow-hidden relative bg-black">
			<div className="w-full h-full overflow-hidden bg-black relative">
				<Canvas
					shadows
					dpr={dpr}
					gl={{ preserveDrawingBuffer: true }}
					camera={{
						fov: 22.9,
						near: 0.1,
						far: 100,
						position: [7.359, 4.958, 6.926],
						// rotation: [-35.94, 40.66, 25.28],
					}}
				>
					{/* <PerformanceMonitor
						onIncline={() => setDpr(2)}
						onDecline={() => setDpr(1)}
					> */}
					<Suspense>
						<ambientLight intensity={0.5} />
						<pointLight
							intensity={100}
							decay={2}
							position={[4.076, 5.904, -1.005]}
							rotation={[-1.839, 0.602, 1.932]}
						/>
						<pointLight
							intensity={200}
							decay={2}
							position={[5.082, 3.76, 1.074]}
							rotation={[-1.839, 0.602, 1.932]}
						/>
						<Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
						{/* <StarsCanvas /> */}
						{/* <Background /> */}
						<fog attach="fog" args={['#000', 0, 45]} />
						<group
							position={
								width >= 700
									? [0.1, 0.1, 0]
									: width >= 1024
									? [0.1, 0.1, 0]
									: [-0.4, 0.2, -0.3]
							}
							scale={width >= 700 ? 0.75 : width >= 1024 ? 1 : 0.6}
						>
							<group
								position={[7.359, 3.5 - 4.958, 15 - 6.926]}
								rotation={[0.1, 0.1, 0.2]}
							>
								<Floor />
							</group>
							<ModelContainer
								positions={positions}
								initial={positions[0]}
								incrementFactor={incrementFactor}
								id={0}
							>
								<M_Fashion />
							</ModelContainer>
							<ModelContainer
								positions={positions}
								initial={positions[4]}
								incrementFactor={incrementFactor}
								id={4}
							>
								<W_Fashion />
							</ModelContainer>
							<ModelContainer
								positions={positions}
								initial={positions[3]}
								incrementFactor={incrementFactor}
								id={3}
							>
								<Accessories />
							</ModelContainer>
							<ModelContainer
								positions={positions}
								initial={positions[2]}
								incrementFactor={incrementFactor}
								id={2}
							>
								<Jewelries />
							</ModelContainer>
							<ModelContainer
								positions={positions}
								initial={positions[1]}
								incrementFactor={incrementFactor}
								id={1}
							>
								<CanvasShoes />
							</ModelContainer>

							{/* <M_Fashion position={[0, 0, 0]} scale={1} />
							<M_Fashion position={[-6.5, -1.5, -1]} scale={0.5} />
							<M_Fashion position={[-3.5, -0.5, -2]} scale={0.5} />
							<M_Fashion position={[-0.2, 0.4, -2]} scale={0.4} />
							<M_Fashion position={[2.5, 1.1, -1]} scale={0.35} /> */}

							{/* <M_Fashion /> */}
							{/* <W_Fashion /> */}
							{/* <Accessories /> */}
							{/* <Jewelries /> */}
							{/* <CanvasShoes /> */}
						</group>
						{/* <Html
								as="div" // Wrapping element (default: 'div')
								// wrapperClass
								fullscreen
							>
								<Cover activeId={incrementFactor} />
							</Html> */}
					</Suspense>
					{/* </PerformanceMonitor> */}
				</Canvas>
			</div>
			{/* <Cover activeId={incrementFactor} /> */}
		</div>
	);
};

export default ModelCarousel;
