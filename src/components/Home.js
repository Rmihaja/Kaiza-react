import { useEffect, useState } from "react";
import PostAdd from "./PostAdd";
import { Posts } from "./Posts";

const Home = () => {

    
    // posts list
    const [posts, setPosts] = useState([]); // ? react hook to watch variable each times it gets updated
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState('');

    // useEffect to get posts data from json server on first reload
    useEffect(() => {
        console.log('useEfect called');
        // GET data from url
        fetch('http://localhost:8000/posts')
            .then(res => {
                // return custom error if server response is not OK
                if (!res.ok) {
                    throw Error('Could not get posts from server. Please refresh');
                }
                // server returns response promise
                return res.json();
            })
            .then(data => {
                // response returns json data promise
                setPosts(data);
                setError('');
            })
            .catch(err => {
                // store error, if any
                setError(err.message);
            })
        setIsFetching(false);
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
            {/* conditionnal template to show to handle fetch error */}
            {error && <p>{error}</p>}
            {/* temporarily conditionnal template to show while posts data is being fetched */}
            {isFetching && <p>Recent posts is on the way...</p>}
            <Posts posts={posts} onDeletePost={onDeletePost} />
        </div>
    );

}
 
export default Home;