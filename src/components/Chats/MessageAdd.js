const MessageAdd = () => {
    return ( 
        <div class="add message">
            <div class="box message">
                <input class="textcontent" id="inputMessageContent" type="text" placeholder="Ecrire un message..." />
                <button class="round-corner" id="submitMessageButton">{'>'}</button>
            </div>       
        </div>
     );
}
 
export default MessageAdd;