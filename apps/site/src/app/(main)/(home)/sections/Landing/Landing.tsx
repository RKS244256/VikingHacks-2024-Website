"use client";

import { Suspense } from "react";
import Image from "next/image";
import { PerspectiveCamera } from "@react-three/drei";

import View from "@/components/canvas/View";
import Button from "@/lib/components/Button/Button";
import Fireflies from "../../components/Fireflies";

import fogLeft from "@/assets/images/fog-left.png";
import fogRight from "@/assets/images/fog-right.png";

import styles from "./Landing.module.css";

const Landing = () => {
	return (
		<section className={styles.landingBackground}>
			<View className="absolute w-full h-full">
				<Suspense fallback={null}>
					<Fireflies />
					<PerspectiveCamera makeDefault position={[0, -0.1, 1]} />
				</Suspense>
			</View>
			<div className="flex flex-col justify-center items-center min-h-screen text-center overflow-x-hidden relative">
				<Image
					src={fogLeft}
					alt="Fog"
					className={styles.fogLeft}
					fill
				/>
				<Image
					src={fogRight}
					alt="Fog"
					className={styles.fogRight}
					fill
				/>
				<h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
					VikingHacks 2025
				</h1>
				<p className="font-display text-2xl md:text-3xl">
					February 22, 2025
				</p>
				<p className="font-display text-2xl md:text-3xl">
					10 North Park Dr, Brampton, ON
				</p>
<<<<<<< HEAD
				<Button className="z-10" text="Coming Soon" href="" />
=======
				<Button className="z-10" text="Coming Soon" href="404" />
>>>>>>> f3548a581f682b284470e042ef40ad7a6c7e1c54
			</div>
		</section>
	);
};

export default Landing;
