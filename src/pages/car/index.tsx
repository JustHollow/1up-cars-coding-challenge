import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import useGetCarsStockNumber from "src/api/hooks/cars/stockNumber";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	image: {
		objectFit: "contain",
		height: "30vh",
	},
	content: {
		maxWidth: 800,
		display: "flex",
		flexDirection: "column",
	},
	capitalizer: {
		textTransform: "capitalize",
	},
}));

const CarPage = () => {
	const classes = useStyles();

	const history = useHistory();
	const { stockNumber } = useParams<{ stockNumber: string }>();
	const { data, isLoading, isError } = useGetCarsStockNumber({
		stockNumber: parseInt(stockNumber, 10),
	});

	if (isLoading) return <div>is loading...</div>;

	if (isError || !data?.data) {
		history.push("/404");
		return <div>redirect</div>;
	}

	const car = data.data.car;

	return (
		<Box className={classes.root}>
			<img src={car.pictureUrl} alt={car.modelName} className={classes.image} />
			<Container>
				<Grid container className={classes.content} spacing={1}>
					<Grid item>
						<Typography variant="h1">
							{car.manufacturerName} {car.modelName}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h2">
							Stock # {car.stockNumber} - {car.mileage.number}{" "}
							{car.mileage.unit} - {car.fuelType} -{" "}
							<span className={classes.capitalizer}>{car.color}</span>
						</Typography>
					</Grid>
					<Grid item>
						<Typography>
							This car is currently available and can be delivered as soon as
							tomorrow morning. Please be aware that delivery times shown in
							this page are not definitive and may change due bad weather
							conditions.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CarPage;
