import {
	Card,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
	Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { CarsResponse } from "src/api/hooks/cars";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		gap: theme.spacing(2),
		padding: theme.spacing(0),
		boxShadow: "none",
		border: `2px solid ${theme.palette.text.secondary}`,
		borderRadius: 0,
	},
	picture: { width: 80, height: 65, objectFit: "cover" },
	content: {
		padding: 0,
		display: "flex",
		flexDirection: "column",
		gap: 4,
		"&:last-child": {
			padding: 0,
		},
	},
	modelName: { fontWeight: "bold" },
}));

type CarsListItemProps = CarsResponse["cars"][0];
const CarsListItem = (props: CarsListItemProps) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia
				image={props.pictureUrl}
				title={`${props.modelName} image`}
				className={classes.picture}
			/>
			<CardContent className={classes.content}>
				<Typography variant="h2" className={classes.modelName}>
					{props.modelName}
				</Typography>
				<Typography>
					Stock # {props.stockNumber} - {props.mileage.number}{" "}
					{props.mileage.unit} - {props.fuelType} - {props.color}
					{props.color}
				</Typography>
				<Link component={RouterLink} to={`/${props.stockNumber}`}>
					View details
				</Link>
			</CardContent>
		</Card>
	);
};
export default CarsListItem;
