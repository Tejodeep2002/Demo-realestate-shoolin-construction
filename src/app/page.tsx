import React from 'react';
import AboutSection from '@/components/Pages/Home/AboutSection';
import HeroSection from '@/components/Pages/Home/HeroSection';
import ProjectSection from '@/components/Pages/Home/ProjectSection';

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
