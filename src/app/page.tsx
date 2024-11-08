import BottomSlider from "./bottom-slider";
import GymBanner from "./gym-banner";
import Hero from "./hero";
import SaloonCardList from "./saloon-card-list";
import SeftcareCardList from "./selfcare-card-list";

export default function Home() {
	return (
		<div className="px-2 md:px-4 lg:px-8">
			<Hero />
			<SaloonCardList />
			<SeftcareCardList />
			<BottomSlider />
			<GymBanner />
		</div>
	);
}
