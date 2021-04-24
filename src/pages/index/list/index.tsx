import { Grid, makeStyles } from "@material-ui/core";
import useGetCars from "src/api/hooks/cars";
import useSearchParams from "src/hooks/useSearchParams";
import CarsListItem from "./listItem";
import CarsListItemSkeleton from "./listItemSkeleton";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "grid",
		gap: theme.spacing(0),
	},
}));

const CarsList = () => {
	const classes = useStyles();
	const query = useSearchParams();

	const { data, isLoading, isError } = useGetCars(query);

	if (isLoading)
		return (
			<Grid container className={classes.root}>
				{[...Array(10)].map((_el, idx) => (
					<CarsListItemSkeleton key={idx} />
				))}
			</Grid>
		);
	if (isError) return <div>something went wrong</div>;

	return (
		<Grid container className={classes.root}>
			{data?.data.cars.map((car, idx) => {
				return (
					<Grid key={`${car.stockNumber}_${idx}`} item>
						<CarsListItem {...car} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default CarsList;
