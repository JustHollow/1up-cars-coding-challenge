import {
	Card,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "grid",
		gridAutoFlow: "column",
		gridTemplateColumns: "max-content auto",
		alignItems: "center",
		gap: theme.spacing(2),
		padding: theme.spacing(0),
		boxShadow: "none",
		border: `2px solid ${theme.palette.text.secondary}`,
		borderRadius: 0,
	},
	picture: { width: 80, height: 65, objectFit: "contain" },
	content: {
		padding: 0,
		display: "grid",
		"&:last-child": {
			padding: 0,
		},
	},
}));

const CarsListItemSkeleton = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia className={classes.picture}>
				<Skeleton variant="rect" className={classes.picture} />
			</CardMedia>
			<CardContent className={classes.content}>
				<Skeleton variant="rect" height={"2rem"} />
				<Skeleton variant="text" />
				<Skeleton variant="text" width="20%" />
			</CardContent>
		</Card>
	);
};
export default CarsListItemSkeleton;
