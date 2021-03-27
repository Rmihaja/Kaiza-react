import ProfilePicture from "../ProfilePicture";

const Posts = ({ posts, onDeletePost }) => {

    return (
        <ul className="posts">
            {posts.map(post => (
                // each li should always have an unique id
                <li className="show" key={ post.id }>
                    <div className="metadata">
                        <ProfilePicture name={post.author.name} />
                        <h2>{ post.author.name }</h2>
                        <h3>{post.submitDate}</h3>
                        <button className="padding" onClick={() => onDeletePost(post.id)}>Delete</button>
                    </div>
                    <p>{ post.content }</p>
                </li>
            ))}
        </ul>
    );
}

export default Posts;