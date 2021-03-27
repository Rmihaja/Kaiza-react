const MessageAdd = ({inputContent, setInputContent, onSubmitMessage}) => {

    return ( 
        <form onSubmit={onSubmitMessage} className="add message">
            <div className="box message">
                <input className="textcontent" type="text" placeholder="Ecrire un message..." value={inputContent} onChange={event => setInputContent(event.target.value)} />
                <button className="round-corner" type="submit">
                    <span className="material-icons">
                        send
                    </span>
                </button>
            </div>       
        </form>
     );
}
 
export default MessageAdd;