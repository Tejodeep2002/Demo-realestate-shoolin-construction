import Image from 'next/image';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Projects = () => {
	return (
		<div className="relative h-auto w-[30rem] rounded border-2 border-black">
			<section className="h-auto w-full border-b-2 border-black">
				<Image
					src={'/picture/pic2.jpg'}
					width={1000}
					height={0}
					alt={''}
					className="h-[15rem] w-full rounded-t-lg bg-cover"
				/>
			</section>
			<section className=" items-centerborder absolute top-0 flex h-auto w-full justify-between border-black px-2 pt-2">
				<div className="h-fit w-fit content-center rounded-lg border-2 border-black bg-yellow-400 px-3 py-1 text-sm">
					Current
				</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-slate-400">
					<GoArrowUpRight className=" text-2xl" />
				</div>
			</section>
			<section className="h-auto w-full px-10 py-5">
				<div className="flex h-auto w-full flex-col">
					<span className=" text-base">Dum Dum/station</span>
					<span className=" text-2xl">Simon Pandal</span>
				</div>
			</section>
		</div>
	);
};

export default Projects;
