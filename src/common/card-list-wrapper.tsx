"use client";
import { MouseEvent, useEffect, useRef, useState } from "react";

const CardListWrapper = ({ children }: { children: React.ReactNode }) => {
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
			{children}
		</div>
	);
};

export default CardListWrapper;
