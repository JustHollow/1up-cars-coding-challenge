import { makeStyles, Typography } from "@material-ui/core";
import useGetCars from "src/api/hooks/cars";
import useSearchParams from "src/hooks/useSearchParams";
import { routes } from "src/routes";
import { PaginationLink } from "./paginationLink";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "grid",
		gap: theme.spacing(2),
		gridAutoFlow: "column",
		gridAutoColumns: "max-content",
		placeItems: "center",
	},
}));

const Pagination = () => {
	const classes = useStyles();
	const { page } = useSearchParams();

	const { data, isLoading, isError } = useGetCars();

	const totalPages = data?.data.totalPageCount ?? 1;

	if (isLoading) {
		return <div>is loading</div>;
	}

	if (isError) return <div>something went wrong</div>;

	return (
		<nav className={classes.root}>
			<PaginationLink
				to={{
					pathname: routes.index.path,
				}}
			>
				First
			</PaginationLink>
			<PaginationLink
				disabled={page <= 1}
				to={{
					pathname: routes.index.path,
					search: `page=${page - 1}`,
				}}
			>
				Previous
			</PaginationLink>

			<Typography>
				Page {page} of {totalPages}
			</Typography>

			<PaginationLink
				disabled={page >= totalPages}
				to={{
					pathname: routes.index.path,
					search: `page=${page + 1}`,
				}}
			>
				Next
			</PaginationLink>
			<PaginationLink
				to={{
					pathname: routes.index.path,
					search: `page=${totalPages}`,
				}}
			>
				Last
			</PaginationLink>
		</nav>
	);
};

export default Pagination;
