import Image from "next/image";
import Lantern from "@/lib/components/Lantern/Lantern";
import vikingpixel from "@/assets/images/vikingpixel.png";
import styles from "./About.module.css";

const About = () => {
	return (
		<>
			<section className="container md mx-auto text-center my-14 max-w-sm sm:max-w-lg xl:max-w-screen-md relative">
				<Lantern
					width={300}
					height={300}
					className="lg:hidden mx-auto"
				/>
				<Lantern
					width={300}
					height={300}
					className="absolute hidden lg:block"
					style={{ top: "30%", left: "-45%" }}
				/>
				<Lantern
					width={350}
					height={350}
					className="absolute hidden lg:block"
					style={{ top: "75%", right: "-50%" }}
				/>
				<div className="text-2xl lg:text-3xl mb-5">
					<h2>
						<span className={styles.statistic}>250+</span> Hackers
					</h2>
					<h2>
						<span className={styles.statistic}>$15,000+</span> in
						Prizes
					</h2>
				</div>
				<h3 className="text-xl lg:text-2xl mb-5">
					Create + Engage + Inspire
				</h3>
				<p>
					VikingHacks is the largest high school hackathon in Brampton
					and we continue expanding and improving our event every year.
					Our focus? – Enhance the community by offering students a platform
					to unleash their creativity in a forward-thinking environment.
				</p>
				<p>
					This year, VikingHacks will take place on February 22nd, 2025! 
					The event will be 100% in-person during the day.
					Free workshops, food, and swag will be provided!
				</p>
			</section>
			<Image
				src={vikingpixel}
				width="200"
				height="200"
				alt="Viking Pixel Art"
				className="mx-auto mb-14"
			/>
		</>
	);
};

export default About;
