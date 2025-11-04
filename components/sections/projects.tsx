"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
	{
		title: "Insider",
		description: "Task management system using Django + React",
		tags: ["Django", "Next.js", "PostgreSQL"],
		githubUrl: "#",
	},
	{
		title: "SmartFit",
		description:
			"LMS with encrypted video streaming, Payme payment integration, full backend/frontend stack with FastAPI & React",
		tags: ["Django", "Next.js", "PostgreSQL", "Payments", "Video Streaming"],
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "11Tutors",
		description:
			"University course platform from students for students, built with performance in mind",
		tags: ["Next.js", "Django", "PostgreSQL", "Tailwind"],
		liveUrl: "https://11-tutors.com",
		githubUrl: "#",
	},
	{
		title: "KreativPark",
		description:
			"Library seat booking system with real-time seat availability via Django WebSockets and React",
		tags: ["Django", "WebSockets", "React", "Real-time"],
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "Parvoz",
		description:
			"Landing page with beautiful UI — built with frontend-only tech using modern UI principles",
		tags: ["React", "Tailwind", "Framer Motion"],
		// liveUrl: "https://parvozlc.com",
		githubUrl: "#",
	},
	{
		title: "Zikr Eslatma Bot",
		description:
			"A Telegram bot that helps people practice Zikr (remembering Allah) regularly. Sends hourly reminders with duas like 'SubhanAllah,' 'Alhamdulillah,' and 'Allahu Akbar.' Users can track their daily progress and maintain consistency in their spiritual practice.",
		tags: ["n8n", "Supabase"],
		liveUrl: "https://t.me/zikr_eslatma_bot",
		githubUrl: "#",
	},
];

export function ProjectsSection() {
	return (
		<section id="projects" className="py-20 md:py-28 bg-muted/50">
			<div className="container px-4 md:px-6">
				<motion.div
					className="space-y-4 text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Projects
					</h2>
					<div className="mx-auto max-w-[700px]">
						<p className="text-muted-foreground">
							A selection of my recent work across various domains and
							technologies.
						</p>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.title}
							title={project.title}
							description={project.description}
							tags={project.tags}
							liveUrl={project.liveUrl}
							githubUrl={project.githubUrl}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
