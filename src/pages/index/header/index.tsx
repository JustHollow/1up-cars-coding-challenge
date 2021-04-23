import { Box, Typography } from "@material-ui/core";
import useGetCars from "src/api/hooks/cars";
import useSearchParams from "src/hooks/useSearchParams";

const IndexHeader = () => {
	const { page } = useSearchParams();
	const { data, isLoading, isError } = useGetCars();

	return (
		<Box>
			<Typography variant="h1">Available cars</Typography>
			{!isLoading && !isError && (
				<Typography>
					Showing {10 * page} of {data?.data.totalPageCount}
				</Typography>
			)}
		</Box>
	);
};

export default IndexHeader;
