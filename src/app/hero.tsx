"use client";
import * as React from "react";
import HeroImg1 from "@/assets/images/home-hero-img-1.png";
import HeroImg2 from "@/assets/images/home-hero-img-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";

const Hero = () => {
	return (
		<>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				autoplay={{ delay: 3000 }}
				// style={{ height: "400px" }}

				className="carousel mt-2 mb-6 w-full md:mt-6 md:mb-8   "
			>
				<SwiperSlide>
					<div className="carousel-item w-full">
						<img
							src={HeroImg1.src}
							className="w-full"
							alt="Tailwind CSS Carousel component"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="carousel-item w-full">
						<img
							src={HeroImg2.src}
							className="w-full"
							alt="Tailwind CSS Carousel component"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Hero;
