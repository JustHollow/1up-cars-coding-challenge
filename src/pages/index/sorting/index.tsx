import {
	Box,
	Button,
	makeStyles,
	MenuItem,
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
		gap: theme.spacing(0),
		padding: theme.spacing(2),
		border: `2px solid ${theme.palette.text.secondary}`,
		backgroundColor: theme.palette.common.white,
	},
}));
const CarsSorting = () => {
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
		return <div> loading...</div>;
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
		color && query.set("color", color);
		manufacturer && query.set("manufacturer", manufacturer);

		history.push({ pathname: "/", search: query.toString() });
	};

	return (
		<Box className={classes.root}>
			<Select name="color" onChange={handleChanges} value={color} label="Color">
				{colorsData?.data.colors.map((color, idx) => (
					<MenuItem key={`${color}_${idx}}`} value={color}>
						{color}
					</MenuItem>
				))}
			</Select>
			<Select
				name="manufacturer"
				onChange={handleChanges}
				value={manufacturer}
				label="Manufacturer"
			>
				{manufacturersData?.data.manufacturers.map((manufacturer, idx) => (
					<MenuItem
						key={`${manufacturer.name}_${idx}}`}
						value={manufacturer.name}
					>
						{manufacturer.name}
					</MenuItem>
				))}
			</Select>

			<Button variant="contained" color="primary" onClick={handleFilter}>
				Filter
			</Button>
		</Box>
	);
};

export default CarsSorting;
