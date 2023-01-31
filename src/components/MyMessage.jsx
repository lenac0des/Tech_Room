/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 31/01/2023 - 11:37:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2023
    * - Author          : ellen
    * - Modification    : 
**/

// create funtional component for chat bubble

// the mymessage component will only accept one prop called message
// underneath the prop add an if check that will ask if our message is the actual text message or an image
// if it is greater than zero then the messgae is an image if(message?.attachments?.length > 0)

const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0)
    return(
        <div>
            MyMessage
        </div>
    );
}

export default MyMessage;