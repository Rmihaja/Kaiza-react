import { useState } from "react";
const PostAdd = ({inputContent, setInputContent, onSubmitMessage}) => {

    
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
            <form className="add post" onSubmit={onSubmitMessage}>
                <div className="box">
                    <textarea  className="textcontent" placeholder='Poster une nouvelle annonce...' value={inputContent} onChange={event => setInputContent(event.target.value)}></textarea>
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
            </form>
     );
}
 
export default PostAdd;