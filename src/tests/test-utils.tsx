import { ThemeProvider } from "@material-ui/styles";
import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, MemoryRouterProps, Switch } from "react-router-dom";
import Layout from "src/components/Layout";
import MuiTheme from "src/mui_theme";

type TestProvidersProps = PropsWithChildren<{
	routerProps?: MemoryRouterProps;
}>;
export const TestProviders = ({
	children,
	routerProps,
}: TestProvidersProps) => {
	const queryClient = new QueryClient();

	return (
		<ThemeProvider theme={MuiTheme}>
			<QueryClientProvider client={queryClient}>
				<MemoryRouter {...routerProps}>
					<Layout>
						<Switch>{children}</Switch>
					</Layout>
				</MemoryRouter>
			</QueryClientProvider>
		</ThemeProvider>
	);
};

export const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "queries"> & {
		wrapperProps: TestProvidersProps;
	}
) =>
	render(ui, {
		wrapper: () => <TestProviders {...options?.wrapperProps} />,
		...options,
	});
