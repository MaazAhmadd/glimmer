import UnderConstruction from "../common/under-construction";
import Hero from "./hero";
import Saloons from "./saloons";

export default function Home() {
	return (
		<div className="px-2 md:px-4 lg:px-8">
			<Hero />
			<Saloons />
		</div>
	);
}
