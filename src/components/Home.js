import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import PostAdd from "./Posts/PostAdd";
import Posts from "./Posts/Posts";

const Home = () => {

    // fetching posts list
    // set data received posts variable
    const { data: posts, isFetching, error } = useFetch('posts');
    
    // submit post to server
    const [content, setContent] = useState('');

    // getting navigation history
    const history = useHistory();

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
        fetch('https://my-json-server.typicode.com/rmihaja/kaiza-react', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        })
            .then(() => {
                console.log('post submitted successfully');
                history.push('/');
        })
    }


    // * event listener
    // delete the post selected by user
    const onDeletePost = (postId) => {
        
        // fetch DELETE to json server
        fetch('https://my-json-server.typicode.com/rmihaja/kaiza-react' + postId, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
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