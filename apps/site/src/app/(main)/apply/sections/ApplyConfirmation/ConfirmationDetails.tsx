import Button from "@/lib/components/Button/Button";
import styles from "./ConfirmationDetails.module.scss";
import Link from "next/link";

interface ConfirmationDetailsProps {
	isLoggedIn: boolean;
}

export default async function ConfirmationDetails({
	isLoggedIn,
}: ConfirmationDetailsProps) {
	return (
		<div
			className={`${styles.details} w-8/12 flex flex-col items-center p-12 gap-10 z-1 max-[800px]:w-9/12 max-[400px]:w-11/12`}
		>
			<h1 className={`${styles.header} text-5xl`}>Before Applying</h1>
			<p className={`${styles.policy} text-lg`}>
				By submitting an application for VikingHacks 2024, I
				understand that VikingHacks will take place in person
				during the day on May 11, 2024. In addition, I understand
				that I must check in at certain times on the event day
				in order to be eligible to win prizes. Lastly, I acknowledge
				that I am currently a student enrolled in an accredited
				high school and have parental consent to attend VikingHacks.
			</p>
			<strong className="text-lg text-[#FF2222]">
				Applications are due on April 28th, 2024 at 11:59PM EST.
			</strong>
			<Button
				text={isLoggedIn ? "Proceed to Application" : "Log in to Apply"}
				href={isLoggedIn ? "/apply?prefaceAccepted=true" : "/login"}
			/>
		</div>
	);
}
