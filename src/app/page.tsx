import React from 'react';
import AboutSection from '@/Components/Pages/HomePage/AboutSection';
import HeroSection from '@/Components/Pages/HomePage/HeroSection';
import ProjectSection from '@/Components/Pages/HomePage/ProjectSection';
import AboutSection2 from '@/Components/Pages/HomePage/AboutSection2';

export default function Home(): JSX.Element {
	return (
		<main className="h-auto w-full">
			<HeroSection />
			<ProjectSection />
			<AboutSection />
			<AboutSection2 />
		</main>
	);
}
