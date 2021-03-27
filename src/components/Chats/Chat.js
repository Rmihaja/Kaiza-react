import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import MessageAdd from "./MessageAdd"
import Messages from "./Messages"

const Chat = () => {

    // get :id from router link params
    const { id } = useParams();
    
    // get chat messages
    const { data: chats, isFetching, error } = useFetch('chats/' + id);

    return ( 

        <section className="display">
            {/* conditionnal template to show to handle fetch error */}
            {error && <p>{error}</p>}
            {/* temporarily conditionnal template to show while posts data is being fetched */}
            {isFetching && <p>Loading your messages...</p>}
            {!isFetching && <Messages messages={chats.messages} />}
            <MessageAdd />
                
        </section>

     );
}
 
export default Chat;