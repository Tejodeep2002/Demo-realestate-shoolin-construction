import React, { type FC } from 'react';
import { Separator } from './ui/separator';

interface HeroHeadingProps {
	heading: string;
}
const HeroHeading: FC<HeroHeadingProps> = ({ heading }) => {
	return (
		<section className="h-auto w-full  ">
			<div className="mx-auto h-auto w-full max-w-7xl space-y-4  pb-16 pt-10">
				<span className="text-5xl font-light leading-[62.4px]">{heading}</span>
				<Separator />
				<div className="w-full text-sm font-medium ">The Works</div>
			</div>
		</section>

		// <section className="relative h-[15rem] w-full ">
		// 	<section className="h-full w-full">
		// 		<div className="absolute top-0 h-full w-full bg-black opacity-70 "></div>
		// 		<Image
		// 			src={'/picture/pic6.jpg'}
		// 			width={1000}
		// 			height={0}
		// 			className="h-full w-full object-cover"
		// 			alt={''}
		// 		/>
		// 	</section>
		// 	<section className="absolute top-0 flex h-full w-full items-center justify-center ">
		// 		<div className="flex  w-fit flex-col items-center text-white">
		// 			<h1>About</h1>
		// 			<span className=" text-lg">
		// 				For each project we establish relationships with partners.
		// 			</span>
		// 		</div>
		// 	</section>
		// </section>
	);
};

export default HeroHeading;
