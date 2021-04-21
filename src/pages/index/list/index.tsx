import { Grid, makeStyles } from "@material-ui/core";
import useCars from "src/api/hooks/cars";
import CarsListItem from "./listItem";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		gap: theme.spacing(1),
	},
}));

const CarsList = () => {
	const classes = useStyles();
	const { data, isLoading, isError } = useCars();

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
