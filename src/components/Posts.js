const Posts = ({ posts }) => {

    return (
        <ul className="posts">
            {posts.map(post => (
                <li className="show">
                    <div className="metadata">
                        <img className="profile-picture" src={ post.author.profilePicture } alt="MR"/>
                        <h2>{ post.author.name }</h2>
                        <h3>{post.submitDate}</h3>
                    </div>
                    <p>{ post.data.content }</p>
                </li>
            ))}
        </ul>
    );
}
 
export {Posts};