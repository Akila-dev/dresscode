/* eslint-disable react/prop-types */
// import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowReturnRight } from 'react-icons/bs';

const coverText = [
	{
		header: "Men's Collection",
		text: 'Clothes, Shoes, Bags, Denims, Watches, Perfumes and other accessories for men',
		buttons: [
			{
				text: 'Shop Now',
				link: 'https://dresscodemarket.com/collections/all-men-collections',
			},
		],
	},
	{
		header: "Women's Collection",
		text: 'Clothes, Shoes, Bags, Denims, Watches, Perfumes and other accessories for women.',
		buttons: [
			{
				text: 'Shop Now',
				link: 'https://dresscodemarket.com/collections/all-women-collections',
			},
		],
	},
	{
		header: 'Accessories',
		text: 'Sunglasses, belts, head gear, scarves, neck ties and other accessories.',
		buttons: [
			{
				text: 'Shop for Men',
				link: 'https://dresscodemarket.com/collections/mens-accessories',
			},
			{
				text: 'Shop for Women',
				link: 'https://dresscodemarket.com/collections/womens-accessories-1',
			},
		],
	},
	{
		header: 'Jewelries',
		text: 'Necklaces, Bracelets, Earings, Rings, Wrist Watches and other jewelries.',
		buttons: [
			{
				text: 'Shop Now',
				link: 'https://dresscodemarket.com/collections/womens-jewelry-1',
			},
		],
	},
	{
		header: 'Shoe Store',
		text: 'Official, Casual and Sports, Slides, Sneakers, Sandals and more.',
		buttons: [
			{
				text: 'Shop for Men',
				link: 'https://dresscodemarket.com/collections/mens-shoes-1',
			},
			{
				text: 'Shop for Women',
				link: 'https://dresscodemarket.com/collections/womens-shoes-1',
			},
		],
	},
];

const Cover = ({ activeId }) => {
	const variants = {
		animate: (i) => ({
			opacity: [0, 1],
			y: [15, 0],
			// rotateX: [90, 0],

			transition: {
				type: 'spring',
				duration: 2,
				// ease: 'easeIn',
				delay: i * 0.1,
			},
		}),
		exit: (i) => ({
			opacity: [1, 0],
			y: [0, 15],
			// rotateX: [90, 0],

			transition: {
				type: 'spring',
				duration: 1.5,
				// ease: 'easeIn',
				delay: i * 0.1,
			},
		}),
	};
	return (
		<div className="w-full h-full absolute top-0 left-0 flex-bottom text-cente">
			{/* <div className="max-w-[500px] space-y-3">
				<h1 className="blend-text uppercase">{coverText[2].header}</h1>
				<p className="blend-text">{coverText[2].text}</p>
				<div className="pt-2 flex flex-wrap gap-3 justify-center">
					{coverText[2].buttons.map(({ text, link }, i) => (
						<a
							key={i}
							href={link}
							className={`btn ${i % 2 ? 'btn-2' : 'btn-1'}`}
						>
							{text}
						</a>
					))}
				</div>
			</div> */}
			<div className="container flex-between py-[7vh] lg:py-[7vh]">
				<div className="relative">
					<div className="max-w-none md:max-w-[500px] lg:max-w-[30vw] space-y-[2.5vh] lg:space-y-[3vh] opacity-0 pointer-events-none">
						<h1 className="blend-text uppercase">
							{coverText[activeId].header}
						</h1>
						<p className="blend-text">{coverText[activeId].text}</p>
						<div className="flex flex-wrap gap-[4vw] lg:gap-[1.5vw]">
							{coverText[activeId].buttons.map(({ text, link }, i) => (
								<div
									key={i}
									href={link}
									className={`a blend-text border-b border-gray-500 pb-[2px] uppercase`}
								>
									<BsArrowReturnRight className="text-white inline-block mr-[6px]" />
									{text}
								</div>
							))}
						</div>
					</div>

					{coverText.map((item, i) => (
						<AnimatePresence key={i}>
							{i === activeId && (
								<motion.div
									animate="animate"
									// exit="exit"
									transition={{ delay: 0.5 }}
									key={i}
									className="max-w-none md:max-w-[500px] lg:max-w-[30vw] space-y-[2.5vh] lg:space-y-[3vh]"
								>
									<motion.h1
										variants={variants}
										custom={0}
										className="blend-text uppercase"
									>
										{item.header}
									</motion.h1>
									<motion.p
										variants={variants}
										custom={1}
										className="blend-text"
									>
										{item.text}
									</motion.p>
									<div className="flex flex-wrap gap-[4vw] lg:gap-[1.5vw]">
										{item.buttons.map(({ text, link }, j) => (
											<motion.a
												variants={variants}
												custom={2 + j}
												whileHover={{ scale: 1.1, color: '#' }}
												whileTap={{ scale: 0.9 }}
												transition={{
													type: 'spring',
												}}
												key={j}
												href={link}
												className={`blend-text border-b border-gray-500 pb-[2px] uppercase`}
											>
												<BsArrowReturnRight className="text-white inline-block mr-[6px]" />
												{text}
											</motion.a>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					))}

					{/* Displayed */}
					{/* <div className="max-w-[30vw] lg:space-y-[3vh]">
					<h1 className="blend-text uppercase">{coverText[2].header}</h1>
					<p className="blend-text">{coverText[2].text}</p>
					<div className="flex flex-wrap gap-[1.5vw]">
						{coverText[2].buttons.map(({ text, link }, i) => (
							<motion.a
								whileHover={{ scale: 1.1, color: '#' }}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: 'spring',
								}}
								key={i}
								href={link}
								className={`blend-text border-b border-gray-500 pb-[2px] uppercase`}
							>
								<BsArrowReturnRight className="text-white inline-block mr-[6px]" />
								{text}
							</motion.a>
						))}
					</div>
				</div> */}
				</div>
			</div>
		</div>
	);
};

export default Cover;

{
	/* <div className="px-4 md:px-[3rem] xl:px-[4rem] max-w-[1240px] mx-auto flex flex-col text-center justify-center gap-5 py-2 pb-[50px]">
				<div className="relative">
					<motion.div className="space-y-4 opacity-0 relative pointer-events-none">
						<button className="text-[--fg] font-semibold capitalize">
							{textData[incrementFactor].heading}
						</button>
						<p className="text-[--fg] text-sm lg:text-base">
							{textData[incrementFactor].text}
						</p>
					</motion.div>
					{textData.map(
						(item: { heading: string; text: string }, i: number) => (
							<AnimatePresence key={i}>
								{i === incrementFactor && (
									<motion.div
										// initial={{ opacity: 0 }}
										animate={{ opacity: [0, 1], y: [5, 0] }}
										// exit={{ opacity: [1, 0], y: [0, 15] }}
										transition={{
											type: 'tween',
											duration: 1,
											ease: 'easeInOut',
											delay: 0.15,
										}}
										key={i}
										className={`space-y-4 absolute top-0 ${
											i === incrementFactor ? 'opacity-100' : 'opacity-0'
										}`}
									>
										<button className="text-[--fg] font-semibold capitalize">
											{item.heading}
										</button>
										<p className="text-[--fg] text-sm lg:text-base">
											{item.text}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						)
					)}
				</div>
				<div>
					<button className="bg-[--brand] rounded-lg py-2 px-4 min-w-[125px] text-[--bg] text-sm lg:text-base">
						Join Us
					</button>
				</div>
			</div> */
}
