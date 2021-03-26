const Posts = ({ posts, onDeletePost }) => {

    return (
        <ul className="posts">
            {posts.map(post => (
                // each li should always have an unique id
                <li className="show" key={ post.id }>
                    <div className="metadata">
                        <img className="profile-picture" src={post.author.profilePicture} alt={ post.author.name.match(/\b\w/g).join('') }/>
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