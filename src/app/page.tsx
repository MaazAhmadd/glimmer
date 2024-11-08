import BottomSlider from "./components/bottom-slider";
import GymBanner from "./components/gym-banner";
import Hero from "./components/hero";
import SaloonCardList from "./components/saloon-card-list";
import SeftcareCardList from "./components/selfcare-card-list";

export default function Home() {
	return (
		<>
			<Hero />
			<SaloonCardList />
			<SeftcareCardList />
			<BottomSlider />
			<GymBanner />
		</>
	);
}
