import Image from 'next/image';
import React from 'react';

const HeroSection = (): React.JSX.Element => {
	return (
		<section className="relative h-[90vh] w-full">
			<div className="absolute left-0 top-0 z-0 h-full w-full">
				<div className="relative z-0 h-full w-full">
					<div className="absolute  h-full w-full bg-black opacity-50" />
					<Image
						src={'/picture/pic1.jpg'}
						width={1000}
						height={0}
						alt=""
						className="h-full w-full"
					/>
				</div>
			</div>
			<section className="relative z-30 h-full w-full border border-black">
				{/* <section className="h-full w-1/2 border border-white text-white">
					<div>dwqdq</div>
					<div>dwa</div>
					<div></div>
				</section> */}
				<section className="flex h-full w-full flex-col items-center justify-center gap-5 text-7xl font-extrabold text-white">
					<span>Modern, Sleek, Sustainable</span>
					<span>High-Rise Living</span>
					<span>In Responsibly Priced</span>
				</section>
			</section>
		</section>
	);
};

export default HeroSection;
