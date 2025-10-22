import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TalentSync HR Dashboard",
	description: "AI-first recruiting platform UI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${geistMono.variable} antialiased`}>
				<div className="min-h-screen flex bg-[var(--ts-bg)] text-[var(--ts-text)]">
					{children}
				</div>
			</body>
		</html>
	);
}
