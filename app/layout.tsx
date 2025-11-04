import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PHProvider } from "@/components/providers/posthog-provider";
import { PostHogPageView } from "@/components/providers/posthog-pageview";
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Otabek Narz | Full-Stack Software Engineer",
	description:
		"Crafting powerful backends, beautiful UIs, and real-time systems with Python, React & more.",
	keywords: [
		"Otabek Narz",
		"Software Engineer",
		"Full-Stack Developer",
		"Python Developer",
		"React Developer",
		"Django",
		"FastAPI",
		"Next.js",
	],
	authors: [{ name: "Otabek Narz", url: "https://otabek.narz.uz" }],
	metadataBase: new URL("https://otabek.narz.uz"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://otabek.narz.uz",
		title: "Otabek Narz | Full-Stack Software Engineer",
		description:
			"Crafting powerful backends, beautiful UIs, and real-time systems with Python, React & more.",
		siteName: "Otabek Narz",
	},
	twitter: {
		card: "summary_large_image",
		title: "Otabek Narz | Full-Stack Software Engineer",
		description:
			"Crafting powerful backends, beautiful UIs, and real-time systems with Python, React & more.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
			>
				<PHProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Suspense fallback={null}>
							<PostHogPageView />
						</Suspense>
						{children}
					</ThemeProvider>
				</PHProvider>
				<script
					src="https://platform.linkedin.com/badges/js/profile.js"
					async
					defer
					type="text/javascript"
				></script>
			</body>
		</html>
	);
}
