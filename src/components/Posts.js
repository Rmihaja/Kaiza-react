const Posts = () => {


    return ( 
        <section className="display">
            <div className="add post">
                <div className="box">
                    <textarea className="textcontent" placeholder='Poster une nouvelle annonce...'></textarea>
                    <button className="round-corner">+</button>
                </div>
                <div className="box">
                    <label className="morecontent">+ Photo<input type='file' accept='image/*'></input></label>
                    <p></p>
                </div>
            </div>
            <ul className="posts"></ul>
        </section>
     );
}
 
export default Posts;