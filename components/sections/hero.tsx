"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
		>
			{/* Background gradient */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background/80 dark:from-primary/5 dark:via-background dark:to-background" />
				<div className="absolute top-0 left-0 right-0 h-[50vh] bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-[0.2] dark:opacity-[0.2]" />
			</div>

			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center text-center space-y-10">
					<motion.div
						className="space-y-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
							Otabek Narz
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground">
							Full-Stack Software Engineer
						</p>
						<p className="max-w-[42rem] text-muted-foreground">
							Crafting powerful backends, beautiful UIs, and real-time systems
							with Python, React & more.
						</p>
					</motion.div>

					<motion.div
						className="flex flex-wrap gap-4 justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Button asChild size="lg">
							<Link href="#projects">View Projects</Link>
						</Button>
						<Button variant="outline" size="lg">
							<Download className="mr-2 h-4 w-4" />
							Download Resume
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="absolute bottom-8"
					>
						<Button
							variant="ghost"
							size="icon"
							className="rounded-full animate-bounce"
							onClick={() => {
								document
									.getElementById("about")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							<ArrowDown className="h-5 w-5" />
							<span className="sr-only">Scroll down</span>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
