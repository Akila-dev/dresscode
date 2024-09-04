import { useEffect, useState } from 'react';
import { ModelCarousel } from './components';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [isLoading]);

	return (
		<>
			{isLoading ? (
				<div className="h-screen bg-black flex-center">
					<p className="text-white">Loading</p>
				</div>
			) : (
				<div className="">
					<ModelCarousel />
				</div>
			)}
		</>
	);
}

export default App;
