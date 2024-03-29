import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Shoolin Construction',
	description: 'Generated by create next app',
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
