import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import restClient from "src/api/client";

export interface API_CarsResponse {
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

const useGetCars = (props?: useCarsProps) => {
	return useQuery(
		["cars", props?.color, props?.page, props?.manufacturer],
		async (): Promise<AxiosResponse<API_CarsResponse>> => {
			return await restClient.get<API_CarsResponse>("/cars", {
				params: { ...props },
			});
		}
	);
};

export default useGetCars;
