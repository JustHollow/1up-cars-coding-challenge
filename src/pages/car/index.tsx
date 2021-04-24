import {
	Box,
	Button,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import useGetCarsStockNumber from "src/api/hooks/cars/stockNumber";
import useFavouriteCar from "src/hooks/useFavouriteCar";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "grid",
		gridAutoFlow: "row",
		gap: theme.spacing(2),
	},
	image: {
		width: "100%",
		objectFit: "contain",
		height: "30vh",
	},
	container: {
		display: "flex",
	},
	content: {
		maxWidth: 800,
		display: "flex",
		flexDirection: "column",
	},
	capitalizer: {
		textTransform: "capitalize",
	},
	favourite: {
		padding: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		"& > button": {
			placeSelf: "flex-end",
		},
	},
}));

const CarPage = () => {
	const classes = useStyles();
	const [checkFavourite, setFavourite, removeFavourite] = useFavouriteCar();

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

	const isFavourite = checkFavourite(car.stockNumber);
	const handleFavourite = () =>
		isFavourite
			? removeFavourite(car.stockNumber)
			: setFavourite(car.stockNumber);

	return (
		<Box className={classes.root}>
			<img src={car.pictureUrl} alt={car.modelName} className={classes.image} />
			<Container className={classes.container} fixed>
				<Grid container spacing={2}>
					<Grid
						item
						container
						className={classes.content}
						spacing={1}
						xs={12}
						md={8}
					>
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
					<Grid item xs={12} md={4}>
						<Paper variant="outlined" className={classes.favourite}>
							<Typography>
								if you like this car, click the button and save it in your
								collection of favourite items
							</Typography>
							<Button
								variant="contained"
								color={isFavourite ? "secondary" : "primary"}
								onClick={handleFavourite}
							>
								{isFavourite ? "UNFAVOURITE" : "SAVE"}
							</Button>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CarPage;
