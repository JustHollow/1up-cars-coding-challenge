import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import restClient from "src/api/client";

export interface CarsStockNumberResponse {
	stockNumber: number;
	manufacturerName: string;
	modelName: string;
	mileage: Mileage;
	fuelType: string;
	color: string;
	pictureUrl: string;
}

export interface Mileage {
	number: number;
	unit: string;
}

type useCarsStockNumberProps = {
	stockNumber: number;
};

const useCarsStockNumber = (props: useCarsStockNumberProps) => {
	return useQuery(
		`carsStockNumber_${props.stockNumber}`,
		async (): Promise<AxiosResponse<CarsStockNumberResponse>> => {
			return await restClient.get<CarsStockNumberResponse>(
				`/cars/${props.stockNumber}`
			);
		}
	);
};

export default useCarsStockNumber;
