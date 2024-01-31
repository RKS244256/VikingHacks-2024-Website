import Image from "next/image";

import hacklogo from "@/assets/logos/hack3.svg";
import hackGear from "@/assets/logos/hackgear.svg";

import styles from "./HackLogo.module.scss";

const HackLogo = () => {
	return (
		<div className={styles.hackLogo}>
			<Image src={hacklogo} alt="North Park Hack Club Logo" />
			<Image
				className={styles.spinning}
				src={hackGear}
				alt="Cool Gear"
			/>
		</div>
	);
};

export default HackLogo;
