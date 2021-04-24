import { Container, Grid, makeStyles } from "@material-ui/core";
import IndexHeader from "./header";
import CarsList from "./list";
import Pagination from "./pagination";
import CarsFilters from "./filter";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
	},
	pagination: {
		width: "max-content",
		margin: "auto",
	},
}));

const IndexPage = () => {
	const classes = useStyles();

	return (
		<Container>
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12} md={4}>
					<CarsFilters />
				</Grid>
				<Grid item xs={12} md={8}>
					<Grid container direction="column" spacing={1}>
						<Grid item>
							<IndexHeader />
						</Grid>
						<Grid item xs={12}>
							<CarsList />
						</Grid>
						<Grid item className={classes.pagination}>
							<Pagination />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default IndexPage;
