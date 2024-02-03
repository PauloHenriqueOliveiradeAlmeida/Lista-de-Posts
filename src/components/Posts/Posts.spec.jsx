import { render, screen } from "@testing-library/react";
import Posts from ".";

const postsMock = [
    {
        id: 1,
        title: "post title",
        body: "post description",
        photo: "image.png"
    },
    {
        id: 2,
        title: "2 post title",
        body: "2 post description",
        photo: "2image.png"
    },
    {
        id: 3,
        title: "3 post title",
        body: "3 post description",
        photo: "3image.png"
    }
];

describe("<Posts />", () => {
    it("should render Posts component", () => {
        render(<Posts posts={postsMock}/>);

        expect(screen.getAllByRole("img", {name: /title/i})).toHaveLength(3);
        expect(screen.getAllByRole("heading", {name: /title/i})).toHaveLength(3);
        expect(screen.getAllByText(/title/i)).toHaveLength(3);

    });

    it("should match snapshot", () => {
        const {container} = render(<Posts posts={postsMock}/>);

        expect(container.firstChild).toMatchSnapshot();
    });
})