import { useState } from "react";

const Posts = () => {

    // * variable init

    // photo name description hook
    const [photoDescription, setPhotoDescription] = useState('');
    
    // posts list
    const [posts, setPosts] = useState([
        {author: {name: 'Mihaja Razafimahefa', profilePicture: null  }, submitDate: '18:42', data: {content: 'Welcome to Kaiza posts!', additionalContent: null}}
    ]);

    // * event listeners
    const onAddPhoto = event => {
        let photoName = event.nativeEvent.target.files[0].name;
        console.log(photoName);
        setPhotoDescription(photoName);
    }

    

    return ( 
        <section className="display">
            <div className="add post">
                <div className="box">
                    <textarea className="textcontent" placeholder='Post your day...'></textarea>
                    <button className="round-corner">+</button>
                </div>
                <div className="box">
                    <label className="morecontent">+ Photo<input type='file' accept='image/*' onChange={onAddPhoto}></input></label>
                    <p>{photoDescription}</p>
                </div>
            </div>
            <ul className="posts">
                {posts.map(post => (
                    <li className="show">
                        <div className="metadata">
                            <img className="profile-picture" src={ post.author.profilePicture } alt="MR"/>
                            <h2>{ post.author.name }</h2>
                            <h3>{ post.submitDate }</h3>
                        </div>
                        <p>{ post.data.content }</p>
                    </li>
                ))}
            </ul>
        </section>
     );
}
 
export default Posts;