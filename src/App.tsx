import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import MuiTheme from "./mui_theme";
import IndexPage from "./pages/index";

function App() {
	const queryClient = new QueryClient();

	return (
		<ThemeProvider theme={MuiTheme}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Layout>
						<Switch>
							<Route exact path="/">
								<IndexPage />
							</Route>
						</Switch>
					</Layout>
				</BrowserRouter>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
