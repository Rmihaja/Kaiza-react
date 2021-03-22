import { useState } from "react";

const Posts = () => {

    const [photoDescription, setPhotoDescription] = useState('');

    const onAddPhoto = event => {
        let photoName = event.nativeEvent.target.files[0].name;
        console.log(photoName);
        setPhotoDescription(photoName);
    }

    return ( 
        <section className="display">
            <div className="add post">
                <div className="box">
                    <textarea className="textcontent" placeholder='Poster une nouvelle annonce...'></textarea>
                    <button className="round-corner">+</button>
                </div>
                <div className="box">
                    <label className="morecontent">+ Photo<input type='file' accept='image/*' onChange={onAddPhoto}></input></label>
                    <p>{photoDescription}</p>
                </div>
            </div>
            <ul className="posts"></ul>
        </section>
     );
}
 
export default Posts;