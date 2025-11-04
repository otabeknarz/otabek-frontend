"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
	{
		company: "Global Move",
		position: "Python Backend Developer",
		period: "2024 August - 2024 September",
		description:
			"Developed and maintained scalable backend systems using Python, Django, and FastAPI. Implemented real-time features with WebSockets and optimized database queries for improved performance.",
		skills: [
			"Python",
			"Django",
			"FastAPI",
			"PostgreSQL",
			"Redis",
			"WebSockets",
		],
	},
	{
		company: "Ibrat Farzandlari / Yoshlar agentligi",
		position: "Software Engineer",
		period: "2024 April - Present",
		description:
			"Built and maintained Telegram bots for various business needs including a QR library system. Implemented complex workflows and integrations with external APIs.",
		skills: ["Python", "Aiogram", "PostgreSQL", "Redis", "API Integration"],
	},
	{
		company: "Freelance Projects",
		position: "Software Engineer",
		period: "2025 May - Present",
		description:
			"Worked on various freelance projects across edtech and productivity domains. Designed and implemented full-stack solutions from concept to deployment.",
		skills: ["React", "Next.js", "Django", "FastAPI", "UI/UX Design"],
	},
	{
		company: "DocPilot",
		position: "Software Engineer",
		period: "2025 August - Present",
		description:
			"DocPilot streamlines healthcare administration by automating document processing and patient communications. The platform intelligently processes medical documents (PDFs, Word, Excel, images) with OCR and AI, while automating insurance and prescription verification calls. Built with React, TypeScript, and Django to help healthcare providers reduce paperwork and focus on patient care.",
		skills: [
			"AWS S3",
			"AWS EC2",
			"AWS RDS",
			"Django",
			"Celery",
			"Redis",
			"Docker",
			"ChatGPT",
			"Retell AI",
			"React (Vite)",
		],
	},
];

export function ExperienceSection() {
	return (
		<section id="experience" className="py-20 md:py-28">
			<div className="container px-4 md:px-6">
				<motion.div
					className="space-y-4 text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Experience
					</h2>
					<div className="mx-auto max-w-[700px]">
						<p className="text-muted-foreground">
							My professional journey and the skills I've developed along the
							way.
						</p>
					</div>
				</motion.div>

				<div className="relative mt-12">
					{/* Timeline line */}
					<div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2 hidden md:block" />

					<div className="space-y-12 relative">
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.company}
								className="relative"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div
									className={`md:flex items-center ${
										index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
									}`}
								>
									{/* Timeline dot */}
									<div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 hidden md:block" />

									{/* Date for mobile */}
									<div className="md:hidden mb-4">
										<Badge variant="outline" className="text-sm">
											{exp.period}
										</Badge>
									</div>

									{/* Content */}
									<div
										className={`md:w-1/2 ${
											index % 2 === 0 ? "md:pr-12" : "md:pl-12"
										}`}
									>
										<Card>
											<CardHeader>
												<div className="hidden md:block mb-2">
													<Badge variant="outline">{exp.period}</Badge>
												</div>
												<CardTitle>{exp.position}</CardTitle>
												<CardDescription>{exp.company}</CardDescription>
											</CardHeader>
											<CardContent>
												<p className="text-muted-foreground mb-4">
													{exp.description}
												</p>
												<div className="flex flex-wrap gap-2">
													{exp.skills.map((skill) => (
														<Badge key={skill} variant="secondary">
															{skill}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
