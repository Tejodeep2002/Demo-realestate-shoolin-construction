import AboutSection from '@/Components/HomePage/AboutSection';
import HeroSection from '@/Components/HomePage/HeroSection';
import ProjectSection from '@/Components/HomePage/ProjectSection';

export default function Home(): JSX.Element {
	return (
		<main className="h-auto w-full">
			<HeroSection />
			<ProjectSection />
			<AboutSection />
		</main>
	);
}
