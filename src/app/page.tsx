import React from 'react';
import AboutSection from '@/components/Pages/HomePage/AboutSection';
import HeroSection from '@/components/Pages/HomePage/HeroSection';
import ProjectSection from '@/components/Pages/HomePage/ProjectSection';

import FAQ from '@/components/FAQ';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';

export default function Home(): JSX.Element {
	return (
		<main className="h-auto w-full">
			<HeroSection />
			<ProjectSection />
			<AboutSection />
			<Testimonial />
			<FAQ />
			<Footer />
		</main>
	);
}
