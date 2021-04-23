import { useState } from "react";

const LS_KEY = "1UP_CAR_FAVOURITE";

const useFavouriteCar = (): [
	checkFavourite: (stockNumber: number) => boolean,
	setFavourite: (stockNumber: number) => void,
	removeFavourite: (stockNumber: number) => void
] => {
	const [stored, setStored] = useState(() =>
		JSON.parse(localStorage.getItem(LS_KEY) ?? "[]")
	);

	const favItems = new Set<number>(stored);

	const checkFavourite = (stockNumber: number): boolean => {
		return favItems.has(stockNumber);
	};

	const setFavourite = (stockNumber: number): void => {
		favItems.add(stockNumber);
		setStored(favItems);
		localStorage.setItem(LS_KEY, JSON.stringify([...favItems]));
	};

	const removeFavourite = (stockNumber: number): void => {
		favItems.delete(stockNumber);
		setStored(favItems);
		localStorage.setItem(LS_KEY, JSON.stringify([...favItems]));
	};

	return [checkFavourite, setFavourite, removeFavourite];
};

export default useFavouriteCar;
