import { CssBaseline, Link, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "src/routes";

const useStyles = makeStyles((theme) => ({
	layout: {
		minHeight: "100vh",
		display: "grid",
		gridTemplateAreas: `"header" "main" "footer"`,
		gridTemplateRows: "80px auto 80px",
		background: theme.palette.common.white,
	},
	header: {
		gridArea: "header",
		borderBottom: `2px solid ${theme.palette.text.secondary}`,
		display: "flex",
		placeContent: "space-between",
		placeItems: "center",
		padding: theme.spacing(2),
	},
	header__image: {
		maxWidth: "150px",
	},
	header__nav: {
		display: "grid",
		gridAutoFlow: "column",
		gap: theme.spacing(2),
	},
	main: {
		gridArea: "main",
	},
	footer: {
		gridArea: "footer",
		display: "grid",
		placeContent: "center",
		borderTop: `2px solid ${theme.palette.text.secondary}`,
	},
}));

type LayoutProps = React.PropsWithChildren<unknown>;
const Layout = (props: LayoutProps) => {
	const styles = useStyles();
	return (
		<>
			<CssBaseline />
			<div className={styles.layout}>
				<header className={styles.header}>
					<Link component={RouterLink} to={routes.index.path}>
						<img
							src="/logo.png"
							alt="1UP Cars logo"
							className={styles.header__image}
						/>
					</Link>
					<nav className={styles.header__nav}>
						<Link color="textPrimary">Purchase</Link>
						<Link color="textPrimary">My Orders</Link>
						<Link color="textPrimary">Sell</Link>
					</nav>
				</header>
				<main className={styles.main}>{props.children}</main>
				<footer className={styles.footer}>
					1UP CARS {new Date().getFullYear()}
				</footer>
			</div>
		</>
	);
};

export default Layout;
