import React from 'react';
import SectionHeading from './SectionHeading';

const Testimonial = (): React.JSX.Element => {
	return (
		<section className="h-auto w-full">
			<section className="mx-auto h-auto w-full max-w-7xl  py-20">
				<section className=" h-auto w-full ">
					<SectionHeading
						subTitle={'Testimonial'}
						mainTitle={'Client Review'}
					/>
				</section>
			</section>
		</section>
	);
};

export default Testimonial;
