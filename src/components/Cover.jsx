// import React from 'react';

const coverText = [
	{
		header: '',
		text: '',
		buttons: [
			{
				text: '',
				link: '',
			},
		],
	},
];

const Cover = () => {
	return (
		<div className="w-full h-full absolute top-0 left-0 flex-center">
			<div>
				<h1 className="blend-text">{coverText[0].header}</h1>
				<p className="blend-text">{coverText[0].text}</p>
				<div>
					{coverText[0].buttons.map(({ text, link }, i) => (
						<a key={i} href={link} className="blend-text">
							{text}
						</a>
					))}
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
