import { useEffect, useLayoutEffect, useState } from "react";

export const screenBreakpoints = {
	xs: 320,
	sm: 425,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1440,
};
export function useCurrentBreakpoint() {
	type Breakpoints = keyof typeof screenBreakpoints;
	const [breakpoint, setBreakpoint] = useState<Breakpoints>("xs");

	useLayoutEffect(() => {
		const updateBreakpoint = () => {
			const width = window.innerWidth;
			let newBreakpoint: Breakpoints = "xs";
			if (width >= screenBreakpoints.sm) newBreakpoint = "sm";
			if (width >= screenBreakpoints.md) newBreakpoint = "md";
			if (width >= screenBreakpoints.lg) newBreakpoint = "lg";
			if (width >= screenBreakpoints.xl) newBreakpoint = "xl";
			if (width >= screenBreakpoints["2xl"]) newBreakpoint = "2xl";
			setBreakpoint(newBreakpoint);
		};

		updateBreakpoint();
		window.addEventListener("resize", updateBreakpoint);

		return () => window.removeEventListener("resize", updateBreakpoint);
	}, []);
	return breakpoint;
}
export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return windowSize;
}
