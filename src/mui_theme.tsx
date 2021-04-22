import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
	orange: { base: "#ea7f28", dark: "#d37324" },
	grey: { base: "#ededed", dark: "#4a4a4a" },
	white: { base: "#fff" },
};

const MuiTheme = createMuiTheme({
	palette: {
		primary: {
			main: colors.orange.base,
			dark: colors.orange.dark,
			contrastText: colors.white.base,
		},
		text: { primary: colors.grey.dark, secondary: colors.grey.base },
	},
	spacing: [8, 12, 24],
	typography: {
		h1: { fontSize: 32, fontWeight: "bold" },
		h2: { fontSize: 18, fontWeight: "normal" },
		body1: { fontSize: 14 },
		body2: { fontSize: 12 },
	},
	props: {
		MuiButtonBase: { disableRipple: true },
		MuiSelect: {
			MenuProps: {
				getContentAnchorEl: null,
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "left",
				},
			},
		},
	},
	overrides: {
		MuiButton: {
			containedPrimary: {
				boxShadow: "none",
				minWidth: 128,
				minHeight: 32,
				"&:hover": {
					backgroundColor: colors.orange.base,
				},
				"&:active": {
					backgroundColor: colors.orange.dark,
					boxShadow: "none",
				},
			},
		},
		MuiInput: {
			underline: {
				"&:before": {
					display: "none",
					"&:focus": {
						display: "none",
					},
				},
			},
		},
		MuiSelect: {
			icon: { color: colors.grey.base },
			select: {
				border: `1px solid ${colors.grey.base}`,
				paddingLeft: 8,
				"&:focus": {
					background: colors.white.base,
				},
				"& > Popover": {
					background: "red",
				},
			},
		},
	},
});

export default MuiTheme;
