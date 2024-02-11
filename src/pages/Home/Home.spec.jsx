import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Home from ".";
import userEvent from "@testing-library/user-event";

describe("<Home />", () => {

	it('should render <SearchInput/>, <Posts/> and <Button/> with "Load More"', async () => {
		render(<Home />);

		const noMorePosts = screen.getByText("Não existem posts que incluem , tente outro termo");

		await waitForElementToBeRemoved(noMorePosts, {timeout: 8000});

		expect.assertions(3);

		expect(screen.getByPlaceholderText(/Pesquisar.../i)).toBeInTheDocument();
		expect(screen.getAllByRole("img")).toHaveLength(2);
		expect(screen.getByRole("button", {name: /Carregar mais/i})).toBeInTheDocument();
	});

	it("should search Posts by typing <SearchInput/>", async () => {
		render(<Home />);

		const noMorePosts = screen.getByText("Não existem posts que incluem , tente outro termo");

		await waitForElementToBeRemoved(noMorePosts, {timeout: 8000});


		expect.assertions(11);
		const search = screen.getByPlaceholderText(/Pesquisar.../i);

		expect(screen.getByRole("heading", {name: /sunt/i})).toBeInTheDocument();
		expect(screen.getByRole("heading", {name: /qui/i})).toBeInTheDocument();
		expect(screen.queryByRole("heading", {name: /molestias/i})).not.toBeInTheDocument();

		userEvent.type(search, "qui est esse");
		expect(screen.getByRole("heading", {name: "qui est esse"})).toBeInTheDocument();
		expect(screen.queryByRole("heading", {name: /sunt/i})).not.toBeInTheDocument();
		expect(screen.queryByRole("heading", {name: /molestias/i})).not.toBeInTheDocument();
		expect(screen.getByRole("heading", {name: "Termo de busca: qui est esse"})).toBeInTheDocument();

		userEvent.clear(search);
		expect(screen.getByRole("heading", {name: "qui est esse"})).toBeInTheDocument();
		expect(screen.getByRole("heading", {name: /sunt/i})).toBeInTheDocument();
		expect(screen.queryByRole("heading", {name: /Termo de busca:/i})).not.toBeInTheDocument();

		userEvent.type(search, "test");
		expect(screen.getByText(/Não existem posts que incluem/i)).toBeInTheDocument();
	});

	it("should add more post where click in Load More Button", async () => {
		render(<Home />);

		const noMorePosts = screen.getByText("Não existem posts que incluem , tente outro termo");

		await waitForElementToBeRemoved(noMorePosts, {timeout: 8000});

		expect.assertions(1);
		const button = screen.getByRole("button", {name: /Carregar mais/i});

		userEvent.click(button);
		expect(screen.getByRole("heading", {name: "ea molestias quasi exercitationem repellat qui ipsa sit aut"})).toBeInTheDocument();
	});
});
