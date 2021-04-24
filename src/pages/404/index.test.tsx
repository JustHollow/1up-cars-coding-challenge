// import { screen } from "@testing-library/react";
import Page404 from "./index";
import { customRender } from "src/tests/test-utils";

test("renders 404", async () => {
	const screen = customRender(<Page404 />, {
		wrapperProps: { routerProps: { initialEntries: [{ pathname: "/404" }] } },
	});
	const linkElement = screen.getByRole("img", { name: /1up cars logo/i });
	expect(linkElement).toBeInTheDocument();
});
