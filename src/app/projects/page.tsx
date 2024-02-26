import Footer from '@/components/Footer';
import HeroHeading from '@/components/HeroHeading';
import HeroSection from '@/components/Pages/Projects/HeroSection';
import React from 'react';

const Projects = () => {
	return (
		<main className="h-auto w-full">
			<HeroHeading heading={'Our Projects'} />
			<HeroSection />
			<Footer />
		</main>
	);
};

export default Projects;
