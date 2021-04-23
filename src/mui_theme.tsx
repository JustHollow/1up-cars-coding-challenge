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
		MuiInput: { disableUnderline: true },
		MuiInputLabel: {
			shrink: false,
		},
	},
	overrides: {
		MuiButton: {
			contained: {
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
		MuiInputLabel: {
			formControl: {
				transform: "unset",
				transition: "unset",
				color: colors.grey.dark,
				position: "relative",
				fontSize: 14,
			},
		},
		MuiInput: {
			formControl: {
				"label + &": {
					marginTop: 8,
				},
			},
		},
		MuiSelect: {
			icon: { color: colors.grey.base },
			select: {
				width: "100%",
				color: colors.grey.dark,
				border: `2px solid ${colors.grey.base}`,
				paddingLeft: 8,
				"&:focus": {
					background: colors.white.base,
				},
			},
		},
		MuiMenu: {
			paper: {
				boxShadow: "none",
				marginTop: 8,
			},
			list: {
				padding: 0,
			},
		},
		MuiMenuItem: {
			root: {
				transition: "none",
				border: `2px solid ${colors.grey.base}`,
				"& + &": {
					borderTopWidth: 0,
				},
				"&:hover": {
					backgroundColor: colors.orange.base,
					color: colors.white.base,
					borderColor: colors.orange.base,
				},
				"&$selected": {
					backgroundColor: colors.white.base,
					color: colors.orange.dark,
					borderColor: colors.orange.base,
					borderTopWidth: 2,
					"&:hover": {
						backgroundColor: colors.orange.base,
						color: colors.white.base,
						borderColor: colors.orange.base,
					},
				},
			},
		},
		MuiPaper: {
			outlined: {
				borderColor: colors.grey.base,
				borderWidth: 2,
			},
		},
	},
});

export default MuiTheme;
