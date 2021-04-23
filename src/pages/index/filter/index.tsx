import {
	Button,
	FormControl,
	FormControlLabel,
	InputLabel,
	makeStyles,
	MenuItem,
	Paper,
	Select,
	SelectProps,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useGetColors from "src/api/hooks/colors";
import useGetManufacturers from "src/api/hooks/manufacturers";
import useSearchParams from "src/hooks/useSearchParams";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "grid",
		gap: theme.spacing(2),
		padding: theme.spacing(2),
	},
	button: {
		placeSelf: "flex-end",
	},
}));

const CarsFilters = () => {
	const classes = useStyles();
	const history = useHistory();
	const { color: qsColor, manufacturer: qsManufacturer } = useSearchParams();

	const [color, setColor] = useState<string>(qsColor);
	const [manufacturer, setManufacturer] = useState<string>(qsManufacturer);

	const { data: colorsData, isLoading: colorsIsLoading } = useGetColors();
	const {
		data: manufacturersData,
		isLoading: manufacturersIsLoading,
	} = useGetManufacturers();

	if (colorsIsLoading || manufacturersIsLoading) {
		return <div>Filter is loading...</div>;
	}

	const handleChanges: SelectProps["onChange"] = (event) => {
		switch (event.target.name) {
			case "color":
				setColor(event.target.value as string);
				break;
			case "manufacturer":
				setManufacturer(event.target.value as string);
				break;
			default:
				console.error("Sorting::handleChange -> unhandled event name", event);
				break;
		}
	};

	const handleFilter = () => {
		const query = new URLSearchParams(window.location.search);
		color ? query.set("color", color) : query.delete("color");
		manufacturer
			? query.set("manufacturer", manufacturer)
			: query.delete("manufacturer");
		query.delete("page");

		history.push({ pathname: "/", search: query.toString() });
	};

	return (
		<Paper className={classes.root} variant="outlined">
			<FormControl>
				<InputLabel disableAnimation>Color</InputLabel>
				<Select
					name="color"
					onChange={handleChanges}
					value={color}
					placeholder="All car colors"
					displayEmpty
				>
					<MenuItem value={""}>All car colors</MenuItem>
					{colorsData?.data.colors.map((color, idx) => (
						<MenuItem key={`${color}_${idx}}`} value={color}>
							{color}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel>Manufacturer</InputLabel>
				<Select
					name="manufacturer"
					onChange={handleChanges}
					value={manufacturer}
					placeholder="All manufacturers"
					displayEmpty
				>
					<MenuItem value="">All manufacturers</MenuItem>
					{manufacturersData?.data.manufacturers.map((manufacturer, idx) => (
						<MenuItem
							key={`${manufacturer.name}_${idx}}`}
							value={manufacturer.name}
						>
							{manufacturer.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button
				variant="contained"
				color="primary"
				onClick={handleFilter}
				className={classes.button}
			>
				Filter
			</Button>
		</Paper>
	);
};

export default CarsFilters;
