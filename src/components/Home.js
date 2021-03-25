import { useState } from "react";
import PostAdd from "./PostAdd";
import { Posts } from "./Posts";

const Home = () => {

    
    // posts list
    const [posts, setPosts] = useState([
        {id: 0, author: {name: 'Mihaja Razafimahefa', profilePicture: null}, submitDate: '18:42', data: {content: 'Welcome to Kaiza posts!', additionalContent: null}}
    ]);

    
    // * event listener
    // delete the post selected by user
    const onDeletePost = (postId) => {
        const filteredPosts = posts.filter(post => post.id !== postId);
        setPosts(filteredPosts);
    }


    return (
        <div className="display">
            <PostAdd setPosts={setPosts} />
            <Posts posts={posts} onDeletePost={onDeletePost} />
        </div>
    );
    

    
}
 
export default Home;