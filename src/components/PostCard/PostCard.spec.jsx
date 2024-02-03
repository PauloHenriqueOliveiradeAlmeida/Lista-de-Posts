import { render, screen } from "@testing-library/react";
import PostCard from ".";

const postMock = {
    photo: "image.png",
    title: "Testing PostCard component",
    body: "Mockup to test rendering of the PostCard component"
}

describe("<PostCard />", () => {
    it("should render photo, title and body in page", () => {
        render(<PostCard post={postMock}/>)

        expect(screen.getByRole("img", {name: postMock.title})).toHaveAttribute("src", postMock.photo);
        expect(screen.getByRole("heading", {name: postMock.title})).toBeInTheDocument();
        expect(screen.getByText(postMock.body)).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        const { container } = render(<PostCard post={postMock} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});