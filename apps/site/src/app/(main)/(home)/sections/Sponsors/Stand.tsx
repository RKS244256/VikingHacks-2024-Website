import type { ComponentProps } from "react";
import Link from "next/link";
import Button from "@/lib/components/Button/Button";

interface StandProps {
	buttonText: string;
	buttonHref: ComponentProps<typeof Link>["href"];
}

const Stand: React.FC<StandProps> = ({
	buttonText,
	buttonHref,
}) => {
	return (
		<div className="max-w-[2000px] text-center flex flex-col items-stretch">
			<div className="relative aspect-[1/0.000002] z-2">
			</div>
				<div className="mb-8">
					<Button text={buttonText} href={buttonHref} />
			</div>
		</div>
	);
};

export default Stand;
