import useFetch from "../hooks/useFetch";
import PostAdd from "./PostAdd";
import { Posts } from "./Posts";

const Home = () => {

    // fetching posts list
    // set data received posts variable
    const { data: posts, isFetching, error } = useFetch('http://localhost:8000/posts');
    
    // * event listener
    // delete the post selected by user
    const onDeletePost = (postId) => {
        // const filteredPosts = posts.filter(post => post.id !== postId);
        // setPosts(filteredPosts);
    }


    return (
        <div className="display">
            <PostAdd />
            {/* conditionnal template to show to handle fetch error */}
            {error && <p>{error}</p>}
            {/* temporarily conditionnal template to show while posts data is being fetched */}
            {isFetching && <p>Recent posts is on the way...</p>}
            <Posts posts={posts} onDeletePost={onDeletePost} />
        </div>
    );

}
 
export default Home;