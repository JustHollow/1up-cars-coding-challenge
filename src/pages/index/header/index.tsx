import { Box, Typography } from "@material-ui/core";
import useGetCars from "src/api/hooks/cars";
import useSearchParams from "src/hooks/useSearchParams";

const IndexHeader = () => {
	const query = useSearchParams();
	const { data, isLoading, isError } = useGetCars(query);

	const { page } = query;

	const response = data?.data;

	if (isLoading) return <div>Header is loading...</div>;
	if (isError) return <div>something went wrong</div>;

	const totalCarsCount = response?.totalCarsCount ?? 0;

	const currentlyShowing =
		10 * page > totalCarsCount
			? totalCarsCount
			: totalCarsCount - (totalCarsCount - 10 * page);

	return (
		<Box>
			<Typography variant="h1">Available cars</Typography>
			{!isLoading && !isError && (
				<Typography>
					Showing {currentlyShowing} of {data?.data.totalCarsCount} results
				</Typography>
			)}
		</Box>
	);
};

export default IndexHeader;
