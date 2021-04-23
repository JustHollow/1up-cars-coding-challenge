import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import type { Location } from "history";

const parseLocation = (location: Location) => {
	const query = new URLSearchParams(location.search);

	const qsColor = query.get("color") ?? "";
	const qsManufacturers = query.get("manufacturer") ?? "";
	const qsPage = parseInt(query.get("page") || "1", 10);

	return { qsColor, qsManufacturers, qsPage };
};

const useSearchParams = () => {
	const history = useHistory();

	const { qsColor, qsManufacturers, qsPage } = parseLocation(history.location);

	const [color, setColor] = useState<string>(qsColor);
	const [manufacturer, setManufacturer] = useState<string>(qsManufacturers);
	const [page, setPage] = useState<number>(qsPage);

	useEffect(() => {
		const unsub = history.listen((location, action) => {
			const { qsColor, qsManufacturers, qsPage } = parseLocation(location);

			setColor(qsColor ?? "");
			setManufacturer(qsManufacturers ?? "");
			setPage(qsPage ?? 1);
		});

		return () => unsub();
	}, [history]);

	return { color, manufacturer, page };
};

export default useSearchParams;
