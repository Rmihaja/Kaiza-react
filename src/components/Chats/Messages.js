import ProfilePicture from "../ProfilePicture";
import UserName from "../UserName";

const Messages = ({ messages }) => {

    return ( 
        <ul className="messages">
           { messages.map(message => (
                <li className="show" key={message.id}>
                <ProfilePicture id={message.authorId} />
                <div className="metadata">
                    <UserName id={message.authorId} />
                    <h3>{ message.submitDate }</h3>
                    <p>{ message.content }</p>
                </div>
            </li>
           ))
        }
        </ul>
     );
}
 
export default Messages;