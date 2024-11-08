"use client";
import Saloon1 from "@/assets/saloons/saloon-1.png";
import Saloon2 from "@/assets/saloons/saloon-2.png";
import Saloon3 from "@/assets/saloons/saloon-3.png";
import Saloon4 from "@/assets/saloons/saloon-4.png";
import CardList from "@/common/card-list";
import { SaloonType } from "@/types";
import { FaRegStar } from "react-icons/fa";

type Props = {
	saloons?: SaloonType[];
};
const SaloonCardList = ({ saloons = [] }: Props) => {
	const allSaloons: SaloonType[] =
		saloons.length > 0
			? saloons
			: [
					{
						name: "Saloon 1",
						address: "Address 1",
						rating: 4.5,
						image: Saloon1.src,
					},
					{
						name: "Saloon 2",
						address: "Address 2",
						rating: 4.5,
						image: Saloon2.src,
					},
					{
						name: "Saloon 3",
						address: "Address 3",
						rating: 4.5,
						image: Saloon3.src,
					},
					{
						name: "Saloon 4",
						address: "Address 4",
						rating: 4.5,
						image: Saloon4.src,
					},
					{
						name: "Saloon 5",
						address: "Address 1",
						rating: 4.5,
						image: Saloon1.src,
					},
					{
						name: "Saloon 6",
						address: "Address 2",
						rating: 4.5,
						image: Saloon2.src,
					},
					{
						name: "Saloon 7",
						address: "Address 3",
						rating: 4.5,
						image: Saloon3.src,
					},
					{
						name: "Saloon 8",
						address: "Address 4",
						rating: 4.5,
						image: Saloon4.src,
					},
				];
	return (
		<div className="px-2">
			<div className="prose lg:prose-xl mb-2">
				<h2>Saloons</h2>
			</div>
			<CardList
				cards={allSaloons.map((s) => {
					return {
						title: s.name,
						subtitle: s.address,
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; {s.rating}
							</>
						),
						image: s.image,
						actionBtnText: "Book Now",
					};
				})}
			/>
		</div>
	);
};

export default SaloonCardList;
