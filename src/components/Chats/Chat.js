import { useParams } from "react-router-dom"
import MessageAdd from "./MessageAdd"
import Messages from "./Messages"

const Chat = () => {

    return ( 

        <section>
                
            {/* <Messages messagesData={chatData} /> */}
            <MessageAdd />
                
        </section>

     );
}
 
export default Chat;