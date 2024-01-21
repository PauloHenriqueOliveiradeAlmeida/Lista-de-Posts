import "./styles.css";

function PostCard({post}) {
    return (
        <div className="post">
            <img src={post.photo} alt={post.title} />
            <div className='post-content'>
              <h2>{post.title}</h2>
              <hr />
              <p>{post.body}</p>
            </div>
          </div>
    );
}

export default PostCard;