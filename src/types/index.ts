type SaloonType = {
	name: string;
	address: string;
	rating: number;
	image: string;
};
type SelfcareItemsType = {
	title: string;
	price: number;
	rating: number;
	image: string;
};
type CardType = {
	title: string;
	subtitle: string;
	titleAddon: React.ReactNode; // jsx
	actionBtnText: string;
	image: string;
};
export type { SaloonType, CardType, SelfcareItemsType };
