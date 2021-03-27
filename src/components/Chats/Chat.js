import { useState } from "react";
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import MessageAdd from "./MessageAdd"
import Messages from "./Messages"

const Chat = () => {

    // get :id from router link params
    const { id } = useParams();
    
    // get chat messages
    const { data: chat, isFetching, error } = useFetch('chats/' + id);

    // send chat messages
    const [content, setContent] = useState('');

    // send message to server
    const sendMessage = event => {
        event.preventDefault();
        const message = {
            authorId: "ukat9irfrhk",
            // getting HH:MM formated time (5 first letter value)
            submitDate: new Date().toTimeString().substr(0, 5),
            content: content,
            additionalContent: null
        };
        chat.messages.push(message)

        // fetch PATCH 'messages' to json server
        fetch('http://localhost:8000/chats/' + id, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                messages: chat.messages
            })
        })
            .then(() => {
                console.log('message sent successfully');
        })
    }

    return ( 

        <section className="display">
            {/* conditionnal template to show to handle fetch error */}
            {error && <p>{error}</p>}
            {/* temporarily conditionnal template to show while posts data is being fetched */}
            {isFetching && <p>Loading your messages...</p>}
            {!isFetching && <Messages messages={chat.messages} />}
            <MessageAdd inputContent={content} setInputContent={setContent} onSubmitMessage={sendMessage} />
                
        </section>

     );
}
 
export default Chat;