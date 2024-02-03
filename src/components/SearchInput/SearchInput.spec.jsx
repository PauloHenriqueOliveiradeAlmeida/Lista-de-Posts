import userEvent from "@testing-library/user-event";
import SearchInput from ".";
import { render, screen } from "@testing-library/react";

describe("<SearchInput />", () => {
    it("should have a value of a searchValue", () => {
        const fn = jest.fn();
        render(<SearchInput handleChange={fn} searchValue="value"/>);

        expect(screen.getByPlaceholderText(/Pesquisar.../i).value).toBe("value")

    });

    it("should call handleChange function where change SearchInput value", () => {
        const fn = jest.fn();
        render(<SearchInput handleChange={fn} searchValue="value"/>);
        userEvent.type(screen.getByPlaceholderText(/Pesquisar.../i), "value")

        expect(fn).toHaveBeenCalledTimes("value".length)
    });

    it("should match snapshot", () => {
        const fn = jest.fn();
        const { container } = render(<SearchInput handleChange={fn} searchValue="value"/>);

        expect(container).toMatchSnapshot();
    });
});
