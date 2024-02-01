import { PropsWithChildren } from "react";

import type { Metadata } from "next";

import water from "@/assets/backgrounds/water.jpg";
import SceneLayout from "@/components/dom/SceneLayout";
import Footer from "@/lib/components/Footer/Footer";
import Navbar from "@/lib/components/Navbar/Navbar";

import "./globals.css";

export const metadata: Metadata = {
	title: "VikingHacks 2024",
	description:
		"VikingHacks is North Park Hack Club's premier hackathon for high school students.",
};

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div
			style={{ backgroundImage: `url(${water.src})` }}
			className="overflow-x-hidden bg-top bg-repeat-y bg-[length:100%]"
		>
			{/* reference: https://github.com/pmndrs/react-three-next */}
			<Navbar/>
			<SceneLayout>{children}</SceneLayout>
			<Footer />
		</div>
	);
}
