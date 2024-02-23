import SectionHeading from '@/Components/SectionHeading';
import Image from 'next/image';
import React from 'react';

const AboutSection2 = (): React.JSX.Element => {
	return (
		<section className="h-auto w-full">
			<section className="mx-auto h-auto w-full max-w-7xl  py-20">
				<section className="to h-auto w-full ">
					<SectionHeading
						subTitle={'any Query'}
						mainTitle={'Frequently Asked Questions'}
					/>
					{/* section1 */}
					<section className="h-auto w-full">
						<section className="flex">
							<section className="h-auto w-[40%] ">
								<Image
									src={'/picture/pic4.jpg'}
									width={1000}
									height={0}
									alt={''}
									className=" aspect-[3/4] w-full rounded-lg"
								/>
							</section>
							<section className="h-auto w-1/2  p-20">
								<h3></h3>
								<ul className="list-decimal">
									<li> What service does your company offer?</li>
									<li>How long does a typical projects take to complete?</li>
									<li>Do you work with specific types of client or project?</li>
									<li>What service does your company offer?</li>
									<li>What service does your company offer?</li>
									<li>What service does your company offer?</li>
								</ul>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default AboutSection2;
