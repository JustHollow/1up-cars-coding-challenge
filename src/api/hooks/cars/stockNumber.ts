import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import restClient from "src/api/client";

export interface API_CarsStockNumberResponse {
	car: Car;
}

interface Car {
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

const useGetCarsStockNumber = (props: useCarsStockNumberProps) => {
	return useQuery(
		`carsStockNumber_${props.stockNumber}`,
		async (): Promise<AxiosResponse<API_CarsStockNumberResponse>> => {
			return await restClient.get<API_CarsStockNumberResponse>(
				`/cars/${props.stockNumber}`
			);
		}
	);
};

export default useGetCarsStockNumber;
