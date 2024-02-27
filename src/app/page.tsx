import React from 'react';
import FAQ from '@/components/FAQ';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import HeroSection from '@/components/pages/home/HeroSection';
import ProjectSection from '@/components/pages/home/ProjectSection';
import AboutSection from '@/components/pages/home/AboutSection';

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
