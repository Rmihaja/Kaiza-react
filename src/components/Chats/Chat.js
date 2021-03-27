import MessageAdd from "./MessageAdd"
import Messages from "./Messages"

const Chat = ({ chatData }) => {
    return ( 

        <section>
                
            <Messages messagesData={chatData} />
            <MessageAdd />
                
        </section>

     );
}
 
export default Chat;