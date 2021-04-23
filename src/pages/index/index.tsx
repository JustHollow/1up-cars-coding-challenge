import { Container, Grid, makeStyles } from "@material-ui/core";
import IndexHeader from "./header";
import CarsList from "./list";
import Pagination from "./pagination";
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
					<Grid container direction="column" spacing={1}>
						<Grid item>
							<IndexHeader />
						</Grid>
						<Grid item>
							<CarsList />
						</Grid>
						<Grid item>
							<Pagination />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default IndexPage;
