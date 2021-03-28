import { useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import useId from "../../hooks/useId";
import MessageAdd from "./MessageAdd"
import Messages from "./Messages"

const Chat = () => {

    // get :id from router link params
    const { id } = useParams();
    
    // get chat messages
    const { data: chat, isFetching, error } = useFetch('chats/' + id);

    // send chat messages
    const [content, setContent] = useState('');

    // get navigation history
    const history = useHistory();

    // send message to server
    const sendMessage = event => {
        event.preventDefault();
        
        if (content) {
            const message = {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                id: useId('m'),
                authorId: "ukat9irfrhk",
                // getting HH:MM formated time (5 first letter value)
                submitDate: new Date().toTimeString().substr(0, 5),
                content: content,
                additionalContent: null
            };
            chat.messages.push(message);
    
            // fetch PATCH 'messages' to json server
            fetch('https://my-json-server.typicode.com/rmihaja/kaiza-react/chats/' + id, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: chat.messages
                })
            })
                .then((res) => {
                    if (res.ok) {
                        console.log('message sent successfully');
                        history.push('/chats/' + id);
                        setContent('');
                    }
            })
        }
    }

    return ( 

        <section className="display">
            {/* conditionnal template to show to handle fetch error */}
            {error && <p>{error}</p>}
            {/* temporarily conditionnal template to show while posts data is being fetched */}
            {isFetching && (
                    <ul className="messages">
                        <p>Chargement de vos messages...</p>
                    </ul>
            )}
            {!isFetching && <Messages messages={chat.messages} />}
            <MessageAdd inputContent={content} setInputContent={setContent} onSubmitMessage={sendMessage} />
                
        </section>

     );
}
 
export default Chat;