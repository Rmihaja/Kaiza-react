import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useId from "../hooks/useId";
import PostAdd from "./Posts/PostAdd";
import Posts from "./Posts/Posts";

const Home = () => {

    // fetching posts list
    // set data received posts variable
    const { data: posts, setData: setPosts, isFetching, error } = useFetch('posts');

    // getting navigation history
    const history = useHistory();
    
    // submit post to server
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imageDescription, setImageDescription] = useState('');

    const sendPost = event => {
        event.preventDefault();
        
        if (content || image) {
            const post = {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                id: useId('p'),
                authorId: "ukat9irfrhk",
                // getting HH:MM formated time (5 first letter value)
                submitDate: new Date().toTimeString().substr(0, 5),
                content: content,
                additionalContent: image ? { image: image } : null
            };
            posts.push(post);
    
            // fetch POST to json server
            fetch('https://my-json-server.typicode.com/rmihaja/kaiza-react/posts/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post)
            })
                .then((res) => {
                    if (res.ok) {
                        console.log('post submitted successfully');
                        history.push('/');
                        setContent('');
                        setImage(null);
                        setImageDescription('');
                    }
                })
        }
    }


    // * event listener
    // delete the post selected by user
    const onDeletePost = (postId) => {

        setPosts(posts.filter(post => post.id !== postId));
        
        // fetch DELETE to json server
        fetch('https://my-json-server.typicode.com/rmihaja/kaiza-react/posts/' + postId, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                history.push('/');
                console.log('post deleted successfully');    
            }
        })
    }


    return (
        <section className="display">
            <PostAdd inputContent={content} setInputContent={setContent} imageDescription={imageDescription} setImageDescription={setImageDescription} setImageContent={setImage} onSubmitMessage={sendPost} />
            {/* conditionnal template to show to handle fetch error */}
            {error && <p>{error}</p>}
            {/* temporarily conditionnal template to show while posts data is being fetched */}
            {isFetching && <p>Chargement des posts...</p>}
            {posts && <Posts posts={posts} onDeletePost={onDeletePost} />}
        </section>
    );

}
 
export default Home;