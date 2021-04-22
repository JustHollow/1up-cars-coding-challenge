import { Grid, makeStyles } from "@material-ui/core";
import useGetCars from "src/api/hooks/cars";
import useSearchParams from "src/hooks/useSearchParams";
import CarsListItem from "./listItem";

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

	if (isLoading) return <div>loading...</div>;
	if (isError) return <div>something went wrong</div>;

	return (
		<Grid container className={classes.root}>
			{data?.data.cars.map((car) => {
				return (
					<Grid key={car.stockNumber} item>
						<CarsListItem {...car} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default CarsList;
