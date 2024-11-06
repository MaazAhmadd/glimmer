"use client";
import * as React from "react";
import HeroImg1 from "@/assets/images/home-hero-img-1.png";
import HeroImg2 from "@/assets/images/home-hero-img-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import Saloon1 from "./saloon-assets/saloon-1.png";
import Saloon2 from "./saloon-assets/saloon-2.png";
import Saloon3 from "./saloon-assets/saloon-3.png";
import Saloon4 from "./saloon-assets/saloon-4.png";
import { SaloonType } from "@/types";
import { screenBreakpoints, useWindowSize } from "@/hooks";
import { Navigation } from "swiper/modules";
import { FaRegStar } from "react-icons/fa";

const Saloons = () => {
	const { width } = useWindowSize();
	const allSaloons: SaloonType[] = [
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
	];
	return (
		<div className="relative">
			<div className="prose lg:prose-xl">
				<h1>Saloons</h1>
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
				// pagination={{ clickable: true }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				// style={{ height: "400px" }}
				className="carousel my-2 w-full md:my-8 "
			>
				{allSaloons.map((s) => {
					return (
						<SwiperSlide key={s.name} className="carousel-item">
							<SaloonItem saloonItem={s} />
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

export default Saloons;

const SaloonItem = ({
	saloonItem,
	className,
}: { saloonItem: SaloonType; className?: string }) => {
	return (
		<div
			className={cn(
				"card card-compact mx-auto w-[285px] bg-secondary shadow-xl",
				className,
			)}
		>
			<figure>
				<img src={saloonItem.image} alt="Shoes" />
			</figure>
			<div className="card-body text-secondary-content">
				<div className="flex items-center justify-between">
					<h2 className="card-title ">{saloonItem.name}</h2>
					<span className="flex items-center">
						<FaRegStar /> &nbsp; {saloonItem.rating}
					</span>
				</div>
				<p className="">{saloonItem.address}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-base text-secondary">Book Now</button>
				</div>
			</div>
		</div>
	);
};
