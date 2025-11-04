import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
	return (
		<>
			<Header />
			<main className="pt-16 container mx-auto">
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<ExperienceSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
