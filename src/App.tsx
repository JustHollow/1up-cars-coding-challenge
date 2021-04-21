import { ThemeProvider } from "@material-ui/styles";
import Layout from "./components/Layout";
import MuiTheme from "./mui_theme";

function App() {
	return (
		<ThemeProvider theme={MuiTheme}>
			<Layout>content</Layout>
		</ThemeProvider>
	);
}

export default App;
