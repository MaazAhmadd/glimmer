"use client";
import Saloon1 from "@/assets/saloons/saloon-1.png";
import Saloon2 from "@/assets/saloons/saloon-2.png";
import Saloon3 from "@/assets/saloons/saloon-3.png";
import Saloon4 from "@/assets/saloons/saloon-4.png";
import { screenBreakpoints, useWindowSize } from "@/hooks";
import { cn } from "@/lib/utils";
import { CardType } from "@/types";
import { FaRegStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
	cards?: CardType[];
	title?: string;
};
const CardList = ({ cards = [], title = "card title" }: Props) => {
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
	const { width } = useWindowSize();
	return (
		<div className="relative mb-6 md:mb-14">
			<div className="prose lg:prose-xl">
				<h2>{title}</h2>
			</div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={
					width <= screenBreakpoints.sm
						? 1
						: width <= screenBreakpoints.md
							? 2
							: width <= screenBreakpoints.lg
								? 3
								: 4
				}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			
				className="carousel my-2 w-full md:my-8 "
			>
				{allCards.map((s) => {
					return (
						<SwiperSlide key={s.title} className="carousel-item ">
							<Card cardItem={s} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<button
				style={{
					position: "absolute",
					transform: "translateY(50%)",
				}}
				className="!left-[10%] md:!left-[-2%] swiper-button-prev !size-12 !absolute !text-neutral rounded-full border-0 bg-base-300"
			>
				❮
			</button>
			<button
				style={{
					position: "absolute",
					transform: "translateY(50%)",
				}}
				className="!right-[10%] md:!right-[-2%] swiper-button-next !size-12 !absolute !text-neutral rounded-full border-0 bg-base-300"
			>
				❯
			</button>
		</div>
	);
};

export default CardList;

const Card = ({
	cardItem,
	className,
}: {
	cardItem: CardType;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"card card-compact mx-auto w-[285px] bg-secondary shadow-xl",
				className,
			)}
		>
			<figure>
				<img src={cardItem.image} alt={cardItem.image} />
			</figure>
			<div className="card-body text-secondary-content">
				<div className="flex items-center justify-between">
					<h2 className="card-title text-base-100 ">{cardItem.title}</h2>
					<span className="flex items-center text-base-100">
						{cardItem.titleAddon}
					</span>
				</div>
				<p className="text-base-100">{cardItem.subtitle}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-base bg-base-100 text-base-content capitalize">
						{cardItem.actionBtnText}
					</button>
				</div>
			</div>
		</div>
	);
};
