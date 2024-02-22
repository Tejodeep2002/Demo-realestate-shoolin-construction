import React from 'react';
import Projects from '../Projects';

const ProjectSection = () => {
	return (
		<section className="h-auto w-full">
			<div className="min-h-screen w-full border border-black py-20">
				<section className="h-auto w-full ">
					<div className="mx-auto h-auto w-fit ">
						<h2>Our Projects</h2>
					</div>
				</section>
				<section className="flex min-h-fit  w-full flex-wrap justify-center gap-10 p-10 px-40">
					<Projects />
					<Projects />
					<Projects />
				</section>
			</div>
		</section>
	);
};

export default ProjectSection;
