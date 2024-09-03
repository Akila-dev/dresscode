import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion-3d';
import {} from 'framer-motion';

const StarCanvas = () => {
	const ref = useRef();
	const [sphere, setSphere] = useState(null);

	useEffect(() => {
		setSphere(() => random.inSphere(new Float32Array(3000), { radius: 20 }));
		console.log(sphere);
	}, []);

	//   *AUTOMATIC ROTATION
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<motion.group
			transition={{ type: 'spring', stiffness: 700, damping: 35 }}
			animate={{ scale: [0, 1] }}
		>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.05}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</motion.group>
	);
};

export default StarCanvas;
