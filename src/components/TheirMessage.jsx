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

const TheirMessage = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    return(
        <div>
            TheirMessage
        </div>
    );
}

export default TheirMessage;