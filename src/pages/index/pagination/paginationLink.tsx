import { Link, LinkProps, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	disabled: {
		color: theme.palette.text.secondary,
		pointerEvents: "none",
	},
}));

export const PaginationLink = (
	props: LinkProps<
		RouterLink,
		RouterLinkProps<unknown> & { disabled?: boolean }
	>
) => {
	const classes = useStyles();
	const isDisabled = props.disabled;

	const handleClick: RouterLinkProps["onClick"] = (event) => {
		if (isDisabled) {
			return event.preventDefault();
		}
		props.onClick?.(event);
	};

	return (
		<Link
			className={clsx(isDisabled && classes.disabled)}
			tabIndex={isDisabled ? -1 : 0}
			component={RouterLink}
			{...props}
			onClick={handleClick}
		/>
	);
};
