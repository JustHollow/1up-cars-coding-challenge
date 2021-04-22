import { Container, Grid, makeStyles } from "@material-ui/core";
import CarsList from "./list";
import CarsSorting from "./sorting";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(1, 2),
	},
}));

const IndexPage = () => {
	const classes = useStyles();

	return (
		<Container>
			<Grid container className={classes.root} spacing={2}>
				<Grid item>
					<CarsSorting />
				</Grid>
				<Grid item>
					<CarsList />
				</Grid>
			</Grid>
		</Container>
	);
};

export default IndexPage;
