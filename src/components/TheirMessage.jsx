/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 31/01/2023 - 11:40:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2023
    * - Author          : ellen
    * - Modification    : 
**/


// create another functional componment for messages that other people will send.

//  the component will have two props called lastmessage and message

// if we want to know if somebody sent you a text first you want to create a variable called const isFirstMessageByUser
// to know that we will write if it is not the last message or if the last message
// that will give us the boolean value by the user


// then inside of the return create a new classname called message row within the div
// create logic inside of message row {isFirstMessageByUser &&} if it is 
// create a selfclosing div with a className called avatar.
// create inline styles called backgroundimage that is going to set an avatar for the user if they chose one


// rendering the messages by the user
// margins will be set to left because the user is using them


// now move on to messageform.jsx

const TheirMessage = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    return(
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                    className="message-avatar"
                    styles={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0
                ? (
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}

                    />
                ) : (
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )
            }


        </div>
    );
}

export default TheirMessage;