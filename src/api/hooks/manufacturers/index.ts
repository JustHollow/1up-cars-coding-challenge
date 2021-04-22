import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import restClient from "src/api/client";

export interface API_ManufacturersResponse {
	manufacturers: Manufacturer[];
}

interface Manufacturer {
	name: string;
	models: Model[];
}

interface Model {
	name: string;
}

const useGetManufacturers = () => {
	return useQuery(
		"manufacturers",
		async (): Promise<AxiosResponse<API_ManufacturersResponse>> =>
			await restClient.get<API_ManufacturersResponse>("/manufacturers")
	);
};

export default useGetManufacturers;
