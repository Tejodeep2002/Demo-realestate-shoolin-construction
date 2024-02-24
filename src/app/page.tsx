import React from 'react';
import AboutSection from '@/Components/Pages/HomePage/AboutSection';
import HeroSection from '@/Components/Pages/HomePage/HeroSection';
import ProjectSection from '@/Components/Pages/HomePage/ProjectSection';

import FAQ from '@/Components/FAQ';
import Testimonial from '@/Components/Testimonial';

export default function Home(): JSX.Element {
	return (
		<main className="h-auto w-full">
			<HeroSection />
			<ProjectSection />
			<AboutSection />
			<FAQ />
			<Testimonial />
		</main>
	);
}
