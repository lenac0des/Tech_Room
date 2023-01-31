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

// after create a functional component called renderMessages replacing the console.log
// to fecth all of the messages use const keys = Object.keys(messages); this will take the keys from the messages 
// keys are ids of specific messages
// lets render the messages by using return keys.map((keys, index) => {
        //     const message = messages[key];
        // })

// to know what last message was sent use const lastMessageKey
// as well as is this my message using isMyMessage

// we are going to see if the lastmessagekey is equall to zeroo by using ..... const lastMessageKey = index === 0 ? null : keys[index - 1]
// else we return keys- 1... meaning if there are messages make sure this is the last one.

// to check if the message is mine const isMyMessage = userName === message.sender.username;
// now we have all the information needed to create different types of messages


// inside of the map we are going to create a return statement and add a div that is going to act as our message
// since we are still mapping create a key within the div and add an inline style
// then create another div underneath with a classname message block and render a message inside
// saying if this is my message render message if not then render their message

// create another div underneath with a classname called read receiepts
// this will have an inline style called marginright and it will help us differenciate whether it is mymessage or theirmessage by using iternery



import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';



const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage />
                            : <TheirMessage />
                        }

                    </div>

                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                    read-receipts
                    </div>

                </div>
            );
        })
    }
    renderMessages()

    return (
        <div>
            ChatFeed 

        </div>
    );
}

export default ChatFeed;