import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("renders App", () => {
	test("base render", () => {
		render(<App />);
		const linkElement = screen.getByRole("img", { name: /1up cars logo/i });
		expect(linkElement).toBeInTheDocument();

		const filter = screen.getByText(/Filter is loading/);
		expect(filter).toBeInTheDocument();
	});

	test("after loading", async () => {
		render(<App />);

		const nextPageLink = await waitFor(() =>
			screen.getByRole("link", {
				name: /next/i,
			})
		);
		expect(nextPageLink).toBeInTheDocument();
	});
});
