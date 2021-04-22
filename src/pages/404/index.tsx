import {
	Container,
	Grid,
	Link,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
	root: { margin: "10vh auto" },
	content: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
	},
	logo: {
		width: 150,
	},
});
const Page404 = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<Grid container spacing={2} className={classes.content}>
				<Grid item>
					<Link component={RouterLink} to="/">
						<img src="/logo.png" alt="1UP Cars logo" className={classes.logo} />
					</Link>
				</Grid>
				<Grid item>
					<Typography variant="h1">404 - Not Found</Typography>
				</Grid>
				<Grid item>
					<Typography variant="h2" component="p">
						Sorry, the page you are looking for does not exist.
					</Typography>
				</Grid>
				<Grid>
					<Typography variant="h2" component="p">
						You can always go back to the{" "}
						<Link component={RouterLink} to="/">
							homepage
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Page404;
