import React from 'react';

const AboutSection = () => {
	return (
		<section className="h-auto w-full ">
			<div className="h-auto w-full  bg-slate-200 px-20 py-20">
				<section className="mx-auto w-full max-w-7xl space-y-10">
					<section className="h-auto w-full">
						<div className="mx-auto w-fit ">
							<h2>"We are expertise in making dream houses"</h2>
						</div>
					</section>
					<section>
						<div className="mx-auto w-full max-w-7xl text-center leading-5">
							<p>
								Welcome to Shoolin Construction Developers! Discover your dream
								home with our user-friendly interface and extensive property
								listings. Whether buying, selling, or renting, our platform
								offers tailored solutions to match your needs. Explore top-notch
								properties and seamless navigation for a hassle-free real estate
								experience. Start your journey today!
							</p>
						</div>
					</section>
					<section>
						<div className="grid w-full grid-cols-3 gap-x-5">
							<section className=" h-auto w-full border border-black drop-shadow-md flex flex-col items-center">
								<section></section>
								<section>50+</section>
								<section>Happy customers</section>
							</section>
							
						</div>
					</section>
				</section>
			</div>
		</section>
	);
};

export default AboutSection;
