"use client";
import Saloon1 from "@/assets/saloons/saloon-1.png";
import Saloon2 from "@/assets/saloons/saloon-2.png";
import Saloon3 from "@/assets/saloons/saloon-3.png";
import Saloon4 from "@/assets/saloons/saloon-4.png";
import { cn } from "@/lib/utils";
import { CardType } from "@/types";
import { FaRegStar } from "react-icons/fa";
import CardListWrapper from "./card-list-wrapper";
// import { Navigation, EffectCards, EffectCoverflow } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
	cards?: CardType[];
};
const CardList = ({ cards = [] }: Props) => {
	const allCards: CardType[] =
		cards.length > 0
			? cards
			: [
					{
						title: "Saloon 1",
						subtitle: "Address 1",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; 4.5
							</>
						),
						image: Saloon1.src,
						actionBtnText: "Book Now",
					},
					{
						title: "Saloon 2",
						subtitle: "Address 2",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; 4.5
							</>
						),
						image: Saloon2.src,
						actionBtnText: "Book Now",
					},
					{
						title: "Saloon 3",
						subtitle: "Address 3",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; 4.5
							</>
						),
						image: Saloon3.src,
						actionBtnText: "Book Now",
					},
					{
						title: "Saloon 4",
						subtitle: "Address 4",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; 4.5
							</>
						),
						image: Saloon4.src,
						actionBtnText: "Book Now",
					},
					{
						title: "Saloon 5",
						subtitle: "Address 5",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; 4.5
							</>
						),
						image: Saloon1.src,
						actionBtnText: "Book Now",
					},
					{
						title: "Saloon 6",
						subtitle: "Address 6",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; 4.5
							</>
						),
						image: Saloon2.src,
						actionBtnText: "Book Now",
					},
					{
						title: "Saloon 7",
						subtitle: "Address 7",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; 4.5
							</>
						),
						image: Saloon3.src,
						actionBtnText: "Book Now",
					},
					{
						title: "Saloon 8",
						subtitle: "Address 8",
						titleAddon: (
							<>
								<FaRegStar /> &nbsp; 4.5
							</>
						),
						image: Saloon4.src,
						actionBtnText: "Book Now",
					},
				];

	return (
		<CardListWrapper>
			<div className="mb-4 flex md:mb-6">
				{allCards.map((cardItem) => {
					return (
						<div
							key={cardItem.title}
							style={{
								flex: "0 0 auto",
							}}
							className={cn("mr-4 w-[280px] bg-secondary shadow-xl md:mr-8 ")}
						>
							<figure>
								<img
									src={cardItem.image}
									alt={cardItem.image}
									draggable="false"
								/>
							</figure>
							<div className="flex flex-col gap-2 p-3 text-secondary-content">
								<div className="flex items-center justify-between ">
									<h2 className=" m-0 p-0 font-bold text-2xl text-base-100">
										{cardItem.title}
									</h2>
									<span className="mr-2 flex items-center text-base-100">
										{cardItem.titleAddon}
									</span>
								</div>
								<p className="m-0 p-0 text-base-100 text-sm">
									{cardItem.subtitle}
								</p>
								<div className="flex justify-end">
									<button className="btn btn-base bg-base-100 text-base-content capitalize">
										{cardItem.actionBtnText}
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</CardListWrapper>
	);
};

export default CardList;
