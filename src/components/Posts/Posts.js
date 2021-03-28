import ProfilePicture from "../ProfilePicture";
import UserName from "../UserName";

const Posts = ({ posts, onDeletePost }) => {

    return (
        <ul className="posts">
            {posts.map(post => {
                
                // each li should always have an unique id
                return (
                    <li className="show" key={post.id}>
                        <div className="metadata">
                            <ProfilePicture id={post.authorId} />
                            <UserName id={post.authorId} />
                            <h3>{post.submitDate}</h3>
                            <button className="padding" onClick={() => onDeletePost(post.id)}>Supprimer</button>
                        </div>
                        <p>{post.content}</p>
                        { post.additionalContent && <img src={post.additionalContent.image} alt=""></img> }
                    </li>
                    )
                })
            }
        </ul>
    );
}

export default Posts;