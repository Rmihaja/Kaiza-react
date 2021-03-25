import { useState } from "react";
import PostAdd from "./PostAdd";
import { Posts } from "./Posts";

const Home = () => {

    
    // posts list
    const [posts, setPosts] = useState([
        {id: 0, author: {name: 'Mihaja Razafimahefa', profilePicture: null}, submitDate: '18:42', data: {content: 'Welcome to Kaiza posts!', additionalContent: null}}
    ]);


    return (
        <div className="display">
            <PostAdd setPosts={setPosts} />
            <Posts posts={posts} />
        </div>
    );
    

    
}
 
export default Home;