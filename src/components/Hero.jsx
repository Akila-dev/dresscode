// /* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from 'react';

// import { motion } from 'framer-motion';

import Cover from '../components/Cover';

import mobileHeroVideo from '../assets/videos/hero-sm.mov';
import desktopHeroVideo from '../assets/videos/hero-lg.mp4';

const Hero = () => {
	const videoRef = useRef();
	const [isLoading, setIsLoading] = useState(true);
	const [incrementFactor, setIncrementFactor] = useState(0);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	useEffect(() => {
		if (!isLoading) {
			const interval = setInterval(() => {
				console.log(videoRef.current.currentTime);
				if (videoRef.current.currentTime < 4.5) {
					setIncrementFactor(0);
				} else if (
					videoRef.current.currentTime >= 4.5 &&
					videoRef.current.currentTime < 9.5
				) {
					setIncrementFactor(1);
				} else if (
					videoRef.current.currentTime >= 9.5 &&
					videoRef.current.currentTime < 14.5
				) {
					setIncrementFactor(2);
				} else if (
					videoRef.current.currentTime >= 14.5 &&
					videoRef.current.currentTime < 19.5
				) {
					setIncrementFactor(3);
				} else if (
					videoRef.current.currentTime >= 19.5 &&
					videoRef.current.currentTime < 23.5
				) {
					setIncrementFactor(4);
				} else {
					setIncrementFactor(0);
				}
			}, 500);
			return () => clearInterval(interval);
		}
	}, []);

	return isLoading ? (
		<div className="flex-center bg-black w-full h-screen">
			<div className="flex space-x-2 justify-center items-center h-screen ">
				<span className="sr-only">Loading...</span>
				<div className="h-5 w-5 bg-white/90 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
				<div className="h-5 w-5 bg-white/90 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
				<div className="h-5 w-5 bg-white/90 rounded-full animate-bounce"></div>
			</div>
		</div>
	) : (
		<div className="w-full h-screen bg-black overflow-hidden relative">
			<div className="w-full h-screen overflow-hidden relative">
				<div className="absolute top-0 w-full h-full left-0 lg:opacity-0 pointer-events-none">
					<video
						ref={videoRef}
						autoPlay
						muted
						loop
						className="w-full h-screen object-cover"
					>
						<source src={mobileHeroVideo} type="video/mp4" />
						Your browser does not support videos.
					</video>
				</div>
				<div className="absolute top-0 w-full h-full left-0 opacity-0 lg:opacity-100 pointer-events-none">
					<video
						ref={videoRef}
						autoPlay
						muted
						loop
						className="w-full h-screen object-cover"
					>
						<source src={desktopHeroVideo} type="video/mp4" />
						Your browser does not support videos.
					</video>
				</div>
			</div>
			<Cover activeId={incrementFactor} />
		</div>
	);
};

export default Hero;
