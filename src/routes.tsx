import { RouteProps } from "react-router-dom";
import Page404 from "./pages/404";
import CarPage from "./pages/car";
import IndexPage from "./pages/index/index";

type pages = "index" | "car" | "404";

export const routes: Record<
	pages,
	Omit<RouteProps, "path"> & { path: string }
> = {
	index: {
		path: "/",
		exact: true,
		component: IndexPage,
	},
	car: {
		path: "/car/:stockNumber",
		component: CarPage,
	},
	"404": {
		path: "*",
		component: Page404,
	},
};
