import { useState } from "react";
const PostAdd = () => {

    
    // * variable init
    // photo name description hook
    const [photoDescription, setPhotoDescription] = useState('');

    // * event listeners
    const onAddPhoto = event => {
        let photoName = event.nativeEvent.target.files[0].name;
        console.log(photoName);
        setPhotoDescription(photoName);
    }

    return ( 
            <div className="add post">
                <div className="box">
                    <textarea  className="textcontent" placeholder='Post your day...'></textarea>
                    <button className="round-corner">
                        <span className="material-icons">
                            add
                        </span>
                    </button>
                </div>
                <div className="box">
                    <label className="morecontent">+ Photo<input type='file' accept='image/*' onChange={onAddPhoto}></input></label>
                    <p>{photoDescription}</p>
                </div>
            </div>
     );
}
 
export default PostAdd;