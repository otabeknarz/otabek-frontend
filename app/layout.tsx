import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  description: "Crafting powerful backends, beautiful UIs, and real-time systems with Python, React & more.",
  keywords: [
    "Otabek Narz", 
    "Software Engineer", 
    "Full-Stack Developer", 
    "Python Developer", 
    "React Developer", 
    "Django", 
    "FastAPI", 
    "Next.js"
  ],
  authors: [{ name: "Otabek Narz", url: "https://otabek.me" }],
  metadataBase: new URL("https://otabek.me"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://otabek.me",
    title: "Otabek Narz | Full-Stack Software Engineer",
    description: "Crafting powerful backends, beautiful UIs, and real-time systems with Python, React & more.",
    siteName: "Otabek Narz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otabek Narz | Full-Stack Software Engineer",
    description: "Crafting powerful backends, beautiful UIs, and real-time systems with Python, React & more.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
