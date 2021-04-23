import { makeStyles, Typography } from "@material-ui/core";
import { useLocation } from "react-router";
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
	const query = useSearchParams();
	const location = useLocation();
	const { data, isLoading, isError } = useGetCars(query);

	const { page } = query;
	const totalPages = data?.data.totalPageCount ?? 1;

	if (isLoading) {
		return <div>Pagination is loading</div>;
	}

	if (isError) return <div>something went wrong</div>;

	const generatePageQuery = (val: string) => {
		const newQuery = new URLSearchParams(location.search);
		if (!val) {
			newQuery.delete("page");
		} else {
			newQuery.set("page", val);
		}
		return newQuery.toString();
	};

	return (
		<nav className={classes.root}>
			<PaginationLink
				to={{
					pathname: routes.index.path,
					search: generatePageQuery(String("")),
				}}
			>
				First
			</PaginationLink>
			<PaginationLink
				disabled={page <= 1}
				to={{
					pathname: routes.index.path,
					search: generatePageQuery(String(page - 1)),
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
					search: generatePageQuery(String(page + 1)),
				}}
			>
				Next
			</PaginationLink>
			<PaginationLink
				to={{
					pathname: routes.index.path,
					search: generatePageQuery(String(totalPages)),
				}}
			>
				Last
			</PaginationLink>
		</nav>
	);
};

export default Pagination;
