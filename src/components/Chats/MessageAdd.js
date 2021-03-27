const MessageAdd = () => {
    return ( 
        <div className="add message">
            <div className="box message">
                <input className="textcontent" type="text" placeholder="Ecrire un message..." />
                <button className="round-corner">
                    <span className="material-icons">
                        send
                    </span>
                </button>
            </div>       
        </div>
     );
}
 
export default MessageAdd;