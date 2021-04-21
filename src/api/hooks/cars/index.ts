import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import restClient from "src/api/client";

export interface CarsResponse {
	cars: Car[];
	totalPageCount: number;
	totalCarsCount: number;
}

interface Car {
	stockNumber: number;
	manufacturerName: string;
	modelName: string;
	color: string;
	mileage: Mileage;
	fuelType: string;
	pictureUrl: string;
}

interface Mileage {
	number: number;
	unit: string;
}

type useCarsProps = {
	manufacturer?: string;
	color?: string;
	sort?: "asc" | "des";
	page?: number;
};

const useCars = (props?: useCarsProps) => {
	return useQuery(
		"cars",
		async (): Promise<AxiosResponse<CarsResponse>> => {
			return await restClient.get<CarsResponse>("/cars", {
				params: { ...props },
			});
		}
	);
};

export default useCars;
