"use client";
import * as React from "react";
import HeroImg1 from "@/assets/images/home-hero-img-1.webp";
import HeroImg2 from "@/assets/images/home-hero-img-2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

type Props = {
	srcs?: string[];
	type?:
		| "slide"
		| "fade"
		| "cube"
		| "coverflow"
		| "flip"
		| "creative"
		| "cards";
	delay?: number | null;
};

const AutoSlider = ({ srcs = [], type = "slide", delay = 3000 }: Props) => {
	const _srcs = srcs.length > 0 ? srcs : [HeroImg1.src, HeroImg2.src];
	const modules = [];
	if (delay) modules.push(Autoplay);
	if (type === "fade") modules.push(EffectFade);
	return (
		<Swiper
			modules={modules}
			spaceBetween={50}
			slidesPerView={1}
			// onSlideChange={() => console.log("slide change")}
			// onSwiper={(swiper) => console.log(swiper)}
			effect={type}
			onError={(e) => console.log("[hero swiper] error: ", e)}
			autoplay={{ delay: delay as number }}
			className=" mt-2 mb-6 w-full md:mt-6 md:mb-8 "
		>
			{_srcs.map((s) => (
				<SwiperSlide key={s}>
					<div className=" w-full">
						<img src={s} className="w-full" alt="Swiper Carousel component" />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default AutoSlider;
