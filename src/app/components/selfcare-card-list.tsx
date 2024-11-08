"use client";
import SelfCare1 from "@/assets/selfcare-items/selfcare-item-1.png";
import SelfCare2 from "@/assets/selfcare-items/selfcare-item-2.png";
import SelfCare3 from "@/assets/selfcare-items/selfcare-item-3.png";
import SelfCare4 from "@/assets/selfcare-items/selfcare-item-4.png";
import CardList from "@/common/card-list";
import { SelfcareItemsType } from "@/types";
import { FaRegStar } from "react-icons/fa";

type Props = {
	selfcareItems?: SelfcareItemsType[];
};
const SeftcareCardList = ({ selfcareItems = [] }: Props) => {
	const allSelfcareItems: SelfcareItemsType[] =
		selfcareItems.length > 0
			? selfcareItems
			: [
					{
						title: "Self care item 1",
						price: 1000,
						rating: 4.5,
						image: SelfCare1.src,
					},
					{
						title: "Self care item 2",
						price: 1000,
						rating: 4.5,
						image: SelfCare2.src,
					},
					{
						title: "Self care item 3",
						price: 1000,
						rating: 4.5,
						image: SelfCare3.src,
					},
					{
						title: "Self care item 4",
						price: 1000,
						rating: 4.5,
						image: SelfCare4.src,
					},
					{
						title: "Self care item 5",
						price: 1000,
						rating: 4.5,
						image: SelfCare1.src,
					},
					{
						title: "Self care item 6",
						price: 1000,
						rating: 4.5,
						image: SelfCare2.src,
					},
					{
						title: "Self care item 7",
						price: 1000,
						rating: 4.5,
						image: SelfCare3.src,
					},
					{
						title: "Self care item 8",
						price: 1000,
						rating: 4.5,
						image: SelfCare4.src,
					},
				];
	return (
		<div className="px-2">
			<div className="prose lg:prose-xl mb-2">
				<h2>Self-Care Items</h2>
			</div>
			<CardList
				cards={allSelfcareItems.map((s) => {
					return {
						title: s.title,
						subtitle: String(s.price) + " PKR",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; {s.rating}
							</>
						),
						image: s.image,
						actionBtnText: "Buy Now",
					};
				})}
			/>
		</div>
	);
};

export default SeftcareCardList;
