import { useEffect, useState } from "react";
import PostAdd from "./PostAdd";
import { Posts } from "./Posts";

const Home = () => {

    
    // posts list
    const [posts, setPosts] = useState([]); // ? react hook to watch variable each times it gets updated

    // useEffect to get posts data from json server on first reload
    useEffect(() => {
        console.log('useEfect called');
        // GET data from url
        fetch('http://localhost:8000/posts')
            .then(res => {
                // server returns response promise
                return res.json();
            })
            .then(data => {
                // response returns json data promise
                setPosts(data);
            })
    },
        // dependency of useEffect
        // ? we specified an empty array to call use effect only on component load (which means only once)
        // ? to fetch the data from server at App start
        [])
    
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