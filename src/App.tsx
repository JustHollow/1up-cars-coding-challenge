import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import MuiTheme from "./mui_theme";
import { routes } from "./routes";

function App() {
	const queryClient = new QueryClient();

	return (
		<ThemeProvider theme={MuiTheme}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Layout>
						<Switch>
							<Route {...routes.index} />
							<Route {...routes.car} />
							<Route {...routes[404]} />
						</Switch>
					</Layout>
				</BrowserRouter>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
