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