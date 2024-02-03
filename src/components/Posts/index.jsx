import P from "prop-types";
import "./styles.css";
import PostCard from "../PostCard";

function Posts({ posts }) {

    return (
        <div className="posts">
            {posts.map(post => (
                <PostCard post={post} key={post.id} />
            ))
            }
        </div>
    )

}


export default Posts;


Posts.propTypes = {
	posts: P.arrayOf(
		P.shape({
			photo: P.string.isRequired,
			title: P.string.isRequired,
			body: P.string.isRequired
		})
	)
}
