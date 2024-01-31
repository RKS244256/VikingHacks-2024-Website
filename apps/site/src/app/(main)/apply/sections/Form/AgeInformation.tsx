import SimpleRadio from "@/app/apply/sections/Components/SimpleRadio";

const yesNoOptions = [
	{
		id: "minor-yes",
		labelText: "Yes",
		inputValue: "Yes",
	},
	{
		id: "minor-no",
		labelText: "No",
		inputValue: "No",
	},
];

export default function AgeInformation() {
	return (
		<div className="flex flex-col gap-5 w-11/12">
			<div className="flex flex-col gap-5">
				<p className="m-0 text-lg">
					Unfortunately, we cannot host anyone not in high school or
					those above the age of 18 for VikingHacks 2024. By answering
					yes, you affirm that you are and will be 18 years or younger
					by May 11, 2024.
				</p>
				<p className="text-[#FF2222] m-0 text-lg">
					We will be checking ID. You will not be admitted to
					compete without valid ID, or if you are above 18 years
					of age.
				</p>
			</div>

			<SimpleRadio
				name="is_18_older"
				values={yesNoOptions}
				title="Will you be 18 or under by May 11th, 2024?"
				titleClass="text-xl font-bold m-0 text-center"
				containerClassTotal="flex flex-col gap-1 w-full items-center"
				isRequired={true}
				labelClass="font-bold text-xl"
				containerClassInputLabels="flex gap-2 items-center"
				containerClassValues="flex gap-5"
			/>
		</div>
	);
}
