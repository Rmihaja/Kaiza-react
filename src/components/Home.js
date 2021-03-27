import { useState } from "react";
import useFetch from "../hooks/useFetch";
import PostAdd from "./Posts/PostAdd";
import Posts from "./Posts/Posts";

const Home = () => {

    // fetching posts list
    // set data received posts variable
    const { data: posts, isFetching, error } = useFetch('posts');
    
    // submit post to server
    const [content, setContent] = useState('');

    const sendPost = event => {
        event.preventDefault();
        const post = {
            authorId: "ukat9irfrhk",
            // getting HH:MM formated time (5 first letter value)
            submitDate: new Date().toTimeString().substr(0, 5),
            content: content,
            additionalContent: null
        };

        // fetch POST to json server
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        })
            .then(() => {
            console.log('post submitted successfully');
        })
    }


    // * event listener
    // delete the post selected by user
    const onDeletePost = (postId) => {
        // const filteredPosts = posts.filter(post => post.id !== postId);
        // setPosts(filteredPosts);
    }


    return (
        <section className="display">
            <PostAdd inputContent={content} setInputContent={setContent} onSubmitMessage={sendPost} />
            {/* conditionnal template to show to handle fetch error */}
            {error && <p>{error}</p>}
            {/* temporarily conditionnal template to show while posts data is being fetched */}
            {isFetching && <p>Les postes récents sont en routes...</p>}
            {!isFetching && <Posts posts={posts} onDeletePost={onDeletePost} />}
        </section>
    );

}
 
export default Home;