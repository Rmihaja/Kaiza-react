const MessageAdd = () => {
    return ( 
        <div class="add message">
            <div class="box message">
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