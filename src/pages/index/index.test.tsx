import IndexPage from "./index";
import { customRender } from "src/tests/test-utils";

test("renders indexPage", () => {
	const screen = customRender(<IndexPage />, {
		wrapperProps: { routerProps: { initialEntries: ["/"] } },
	});

	const linkElement = screen.getByRole("img", { name: /1up cars logo/i });
	expect(linkElement).toBeInTheDocument();
});
