const PostAdd = ({inputContent, setInputContent, imageDescription, setImageDescription, setImageContent, onSubmitMessage}) => {

    // * event listeners
    const onAddPhoto = event => {

        let photo = event.nativeEvent.target.files[0];
        
        let imageURL = URL.createObjectURL(photo);
        URL.revokeObjectURL(photo);
        
        setImageContent(imageURL);
        setImageDescription(photo.name);
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
                    <p>{imageDescription}</p>
                </div>
            </form>
     );
}
 
export default PostAdd;