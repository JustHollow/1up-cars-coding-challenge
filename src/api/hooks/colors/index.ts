import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import restClient from "src/api/client";

export interface API_ColorsResponse {
	colors: string[];
}

const useGetColors = () => {
	return useQuery(
		"colors",
		async (): Promise<AxiosResponse<API_ColorsResponse>> =>
			await restClient.get<API_ColorsResponse>("/colors")
	);
};

export default useGetColors;
