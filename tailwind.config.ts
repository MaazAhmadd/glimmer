import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	daisyui: {
		themes: [
			// false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
			{
				light: {
					primary: "#edc539",
					"primary-content": "#9b6d00",
					secondary: "#73449d",
					"secondary-content": "#d993ff",
					accent: "#f87171",
					"accent-content": "#793e3e",
					neutral: "#0d0809",
					"neutral-content": "#c8c6c6",
					"base-100": "#ede9fe",
					"base-200": "#cecbdd",
					"base-300": "#b0adbd",
					"base-content": "#141316",
					info: "#00ccff",
					"info-content": "#000f16",
					success: "#49c55e",
					"success-content": "#020e03",
					warning: "#d37600",
					"warning-content": "#100500",
					error: "#d8112c",
					"error-content": "#fed7d4",

					"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
					"--animation-btn": "0.25s", // duration of animation when you click on button
					"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
					"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
					"--border-btn": "1px", // border width of buttons
					"--tab-border": "1px", // border width of tabs
					"--tab-radius": "0.5rem", // border radius of tabs
				},
			},
		],
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
};
export default config;
