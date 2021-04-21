import { ThemeProvider } from "@material-ui/styles";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import MuiTheme from "./mui_theme";
import IndexPage from "./pages/index";

function App() {
	return (
		<ThemeProvider theme={MuiTheme}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/">
							<IndexPage />
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
