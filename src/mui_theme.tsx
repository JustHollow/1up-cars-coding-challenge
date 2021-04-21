import { createMuiTheme } from "@material-ui/core/styles";

const MuiTheme = createMuiTheme({
	palette: {
		primary: { main: "#ea7f28", dark: "#d37324", contrastText: "#fff" },
		text: { primary: "#4a4a4a", secondary: "#ededed" },
	},
	spacing: [8, 12, 24],
	typography: {
		h1: { fontSize: 32, fontWeight: "bold" },
		h2: { fontSize: 18 },
		body1: { fontSize: 14 },
		body2: { fontSize: 12 },
	},
});

export default MuiTheme;
