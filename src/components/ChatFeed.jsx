/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 31/01/2023 - 11:22:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2023
    * - Author          : ellen
    * - Modification    : 
**/
// create a functional componenet
// the chat feed will use 3 different componemts which I will create
// first componment is messageform.jsx
// seccond component is mymessage.jsx for the chat bubble
// third component is theirmessage.jsx for messages that other people will send
// now import all three components to the chatfeed component file
// after destructure the props that will be used in the chat feed
// const { } = props; means that we want to destructre someting from props
// things that will be destructured are const { chats, activeChat, userName, messages } = props;
// to find our current chat we have to put it in a variable...  const chat = 
// this line of code means if chats exist then find the active chat......const chat = chats && chats[activeChat]
// cosole.log the destructured props to see if everthing comes up nicely



import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';



const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    console.log(chat, userName, messages);

    return (
        <div>
            ChatFeed

        </div>
    );
}

export default ChatFeed;