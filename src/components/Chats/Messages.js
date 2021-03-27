import ProfilePicture from "../ProfilePicture";

const Messages = ({ messagesData }) => {
    return ( 
        <ul>
           { messagesData.map(message => {
                <li>
                <ProfilePicture name={message.author.name} />
                <div class="metadata">
                    <h2>{ message.author.name }</h2>
                    <h3>{ message.submitDate }</h3>
                <p>{ message.content }</p>
                </div>
            </li>
           })
        }
        </ul>
     );
}
 
export default Messages;