/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Stand from "./Stand";
import { getSponsors } from "./getSponsors";
import { client } from "@/lib/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Button from "@/lib/components/Button/Button";
import Sponsor from "./components/Sponsor";
import YouthCulture from "./sponsors/YouthCulture.png";
import Brampton from "./sponsors/Brampton.png";
import HCB from "./sponsors/HCB.png";
import CodeNinjas from "./sponsors/CodeNinjas.png";
import Taskade from "./sponsors/Taskade.png";
import OnePassword from "./sponsors/1Password.png";
import Postman from "./sponsors/Postman.png";
import Giftogram from "./sponsors/Giftogram.png";
import Mastercard from "./sponsors/Mastercard.png";
import PDSB from "./sponsors/PDSB.png";
import VoxiCloud from "./sponsors/VXCL.png";
import HackClub from "./sponsors/HackClub.png";
import Wolfram from "./Wolfram.png";

import styles from "./Sponsors.module.scss";
import Navbar from "@/lib/components/Navbar/Navbar";

const builder = imageUrlBuilder(client);

export default async function Sponsors() {
	const sponsors = await getSponsors();

	return (
		<section className="container py-24 md:my-16 relative items-center flex flex-col md:p-8 w-3/4 mx-auto text-center">
			<h2
				className={`${styles.title} my-12 font-display sm:text-[3rem] text-[#fffce2] text-4xl text-center`}
			>
				Sponsors
			</h2>
			<p className="max-w-md mb-18">
				Interested in sponsoring VikingHacks 2024? Check out our
				sponsorship package to learn more about our event! For more
				information, please email us at{" "}
				<a
					href="mailto:team@nphack.club"
					className="hover:underline font-bold"
				>
					team@nphack.club
				</a>
			</p>
			<div className="grid max-w-lg lg:max-w-none lg:grid-cols-600 lg:items-stretch justify-center m-auto gap-y-1 gap-x-1 my-1 pl-1 pr-1">
				<Stand
					buttonText="Sponsorship Package"
					buttonHref="Prospectus.pdf"
				/>
			</div>

			<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Sponsor link="https://investbrampton.ca/locate-here/innovation-district/">
					<Image
						className="h-full object-contain"
						src={Brampton}
						alt="Brampton Innovation District Logo"
					/>
				</Sponsor>

				<Sponsor link="https://www.youthculture.com">
					<Image
						className="h-full object-contain"
						src={YouthCulture}
						alt="YouthCulture Logo"
					/>
				</Sponsor>

				<Sponsor link="https://www.hcb.hackclub.com">
					<Image
						className="h-full object-contain"
						src={HCB}
						alt="HCB Logo"
					/>
				</Sponsor>

				<Sponsor link="https://www.codeninjas.com/brampton-on-ca">
					<Image
						className="h-full object-contain"
						src={CodeNinjas}
						alt="Code Ninjas Logo"
					/>
				</Sponsor>
			</div>
			<h3 className="mt-6">With support from</h3>
			<div className="mt-1 grid grid-cols-1 gap-4 text-black sm:grid-cols-3">
				<Sponsor small link="https://wolfram.com">
					<Image
						className="h-full object-contain"
						src={Wolfram}
						alt="Wolfram Logo"
					/>
				</Sponsor>

				<Sponsor small link="https://1password.com/">
					<Image
						className="h-full object-contain"
						src={OnePassword}
						alt="1Password Logo"
					/>
				</Sponsor>

				<Sponsor small link="https://taskade.com">
					<Image
						className="h-full object-contain"
						src={Taskade}
						alt="Taskade Logo"
					/>
				</Sponsor>

				<Sponsor small link="https://giftogram.com">
					<Image
						className="h-full object-contain"
						src={Giftogram}
						alt="Giftogram Logo"
					/>
				</Sponsor>

				<Sponsor small link="https://mastercard.com/">
					<Image
						className="h-full object-contain"
						src={Mastercard}
						alt="Mastercard Logo"
					/>
				</Sponsor>

				<Sponsor small link="https://postman.com">
					<Image
						className="h-full object-contain"
						src={Postman}
						alt="Postman Logo"
					/>
				</Sponsor>

				<Sponsor small link="https://voxicloud.tech">
					<Image
						className="h-full object-contain"
						src={VoxiCloud}
						alt="VoxiCloud Logo"
					/>
				</Sponsor>

				<Sponsor small link="https://hackclub.com/">
					<Image
						className="h-full object-contain"
						src={HackClub}
						alt="Hack Club Logo"
					/>
				</Sponsor>

				<Sponsor small link="https://peelschools.org">
					<Image
						className="h-full object-contain"
						src={PDSB}
						alt="PDSB Logo"
					/>
				</Sponsor>
			</div>
		</section>
	);
}
