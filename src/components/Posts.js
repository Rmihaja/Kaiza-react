const Posts = ({ posts, onDeletePost }) => {

    return (
        <ul className="posts">
            {posts.map(post => (
                <li className="show">
                    <div className="metadata">
                        <img className="profile-picture" src={ post.author.profilePicture } alt="MR"/>
                        <h2>{ post.author.name }</h2>
                        <h3>{post.submitDate}</h3>
                        <button className="padding" onClick={() => onDeletePost(post.id)}>Delete</button>
                    </div>
                    <p>{ post.data.content }</p>
                </li>
            ))}
        </ul>
    );
}
 
export {Posts};