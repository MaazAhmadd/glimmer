"use client";
import Saloon1 from "@/assets/saloons/saloon-1.png";
import Saloon2 from "@/assets/saloons/saloon-2.png";
import Saloon3 from "@/assets/saloons/saloon-3.png";
import Saloon4 from "@/assets/saloons/saloon-4.png";
import { screenBreakpoints, useWindowSize } from "@/hooks";
import { cn } from "@/lib/utils";
import { CardType } from "@/types";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { FaRegStar } from "react-icons/fa";
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
	const containerRef = useRef<HTMLDivElement>(null);
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [velocity, setVelocity] = useState(0);
	const [lastMoveTime, setLastMoveTime] = useState(Date.now());
	const SCROLL_SPEED_MULTIPLIER = 1; // Adjust the scroll speed
	const VELOCITY_IN_PIXELS = 20; // pixels per second
	const DECELERATION_FACTOR = 0.95; // Adjust deceleration factor

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		setIsDown(true);
		if (containerRef.current) {
			containerRef.current.classList.add("active");
			setStartX(e.pageX - containerRef.current.offsetLeft);
			setScrollLeft(containerRef.current.scrollLeft);
			setVelocity(0);
		}
	};

	const handleMouseLeave = () => {
		setIsDown(false);
		if (containerRef.current) {
			containerRef.current.classList.remove("active");
		}
	};

	const handleMouseUp = () => {
		setIsDown(false);
		if (containerRef.current) {
			containerRef.current.classList.remove("active");
		}
	};

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDown) return;
		e.preventDefault();
		if (containerRef.current) {
			const x = e.pageX - containerRef.current.offsetLeft;
			const walk = (x - startX) * SCROLL_SPEED_MULTIPLIER;
			containerRef.current.scrollLeft = scrollLeft - walk;

			// Calculate velocity
			const now = Date.now();
			const deltaTime = now - lastMoveTime;
			setVelocity((walk / deltaTime) * VELOCITY_IN_PIXELS);
			setLastMoveTime(now);
		}
	};

	useEffect(() => {
		if (!isDown && velocity !== 0) {
			const interval = setInterval(() => {
				if (containerRef.current) {
					containerRef.current.scrollLeft -= velocity * 0.016; // 16ms for 60fps
					setVelocity(velocity * DECELERATION_FACTOR);
					if (Math.abs(velocity) < 0.1) {
						clearInterval(interval);
					}
				}
			}, 16);
			return () => clearInterval(interval);
		}
	}, [isDown, velocity]);

	return (
		<div
			className="no-scrollbar mb-4 flex select-none overflow-x-scroll md:mb-6"
			ref={containerRef}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeave}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
		>
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
								<h2 className=" m-0 p-0 font-bold text-2xl text-base-100">{cardItem.title}</h2>
								<span className="mr-2 flex items-center text-base-100">
									{cardItem.titleAddon}
								</span>
							</div>
							<p className="m-0 p-0 text-base-100 text-sm">{cardItem.subtitle}</p>
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
		<div className={cn(" w-[300px] bg-secondary shadow-xl ", className)}>
			<figure>
				<img src={cardItem.image} alt={cardItem.image} />
			</figure>
			<div className=" gap-1 text-secondary-content">
				<div className="flex items-center justify-between">
					<h2 className=" text-base-100 ">{cardItem.title}</h2>
					<span className="flex items-center text-base-100">
						{cardItem.titleAddon}
					</span>
				</div>
				<p className="text-base-100">{cardItem.subtitle}</p>
				<div className=" justify-end">
					<button className="btn btn-base bg-base-100 text-base-content capitalize">
						{cardItem.actionBtnText}
					</button>
				</div>
			</div>
		</div>
	);
};
