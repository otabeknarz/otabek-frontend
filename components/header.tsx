"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
	{ name: "Home", path: "/#hero" },
	{ name: "About", path: "/#about" },
	{ name: "Projects", path: "/#projects" },
	{ name: "Experience", path: "/#experience" },
	{ name: "Contact", path: "/#contact" },
];

export function Header() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-200",
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b"
					: "bg-transparent"
			)}
		>
			<div className="flex h-16 items-center justify-between px-4 md:px-6 container mx-auto">
				<div className="flex items-center gap-6 md:gap-10">
					<Link href="/" className="font-bold text-xl">
						narz
					</Link>
					<nav className="hidden md:flex gap-6">
						{navItems.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								className={cn(
									"text-sm font-medium transition-colors hover:text-primary",
									pathname === item.path
										? "text-primary"
										: "text-muted-foreground"
								)}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<ThemeToggle />
					<Link
						href="/#contact"
						className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
					>
						Contact Me
					</Link>
					<button
						className="md:hidden"
						onClick={toggleMobileMenu}
						aria-label="Toggle mobile menu"
					>
						{mobileMenuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-6 w-6"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-6 w-6"
							>
								<line x1="4" x2="20" y1="12" y2="12" />
								<line x1="4" x2="20" y1="6" y2="6" />
								<line x1="4" x2="20" y1="18" y2="18" />
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg animate-in slide-in-from-top duration-300">
					<nav className="flex flex-col p-4">
						{navItems.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								className={cn(
									"py-3 text-sm font-medium transition-colors hover:text-primary border-b border-muted last:border-0",
									pathname === item.path
										? "text-primary"
										: "text-muted-foreground"
								)}
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}
						<Link
							href="/#contact"
							className="mt-4 flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
							onClick={() => setMobileMenuOpen(false)}
						>
							Contact Me
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
}
