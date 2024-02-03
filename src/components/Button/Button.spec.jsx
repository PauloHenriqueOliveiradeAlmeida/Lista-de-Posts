import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("<Button />", () => {
	it("should render the button with the text 'Load More'", () => {
		const fn = jest.fn();
		render(<Button value="Load More" onClick={fn} />);
		const button = screen.getByRole("button", { name: /load more/i });
		expect(button).toBeInTheDocument();
	});

	it("should call function when clicking the button", () => {
		const fn = jest.fn();
		render(<Button value="Load More" onClick={fn} />);
		const button = screen.getByRole("button", { name: /load more/i });
		fireEvent.click(button)
		expect(fn).toHaveBeenCalledTimes(1);
	});

	it("should be disabled when disabled is true", () => {
		const fn = jest.fn();
		render(<Button value="Load More" disabled={true} onClick={fn} />);
		const button = screen.getByRole("button", { name: /load more/i });
		expect(button).toBeDisabled();
	});

	it("should be enabled when enabled is true", () => {
		const fn = jest.fn();
		render(<Button value="Load More" onClick={fn} />);
		const button = screen.getByRole("button", { name: /load more/i });
		expect(button).toBeEnabled();
	});

	it("should match snapshot", () => {
		const fn = jest.fn();
		render(<Button value="Load More" disabled={true} onClick={fn} />);
		const button = screen.getByRole("button", { name: /load more/i });
		expect(button).toMatchSnapshot();
	});
});
