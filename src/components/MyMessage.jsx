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

//  image render notes

// the mymessage component will only accept one prop called message
// underneath the prop add an if check that will ask if our message is the actual text message or an image
// if it is greater than zero then the messgae is an image if(message?.attachments?.length > 0)
// if that is the case then we will have to return something different
// return an image selfclosing tag and add props to it
// first we will add the src which will take the message grab the first attchment[0]and then the file
// then the alt which will state the name message attachment
// then add the className set it to message image'
// finally inline styles which will have the message float to the right



// Text render notes

// classname goes in the first div with some inline styles
// 

const MyMessage = ({ message }) => {
    // this will render an image if the message is an image
    if(message?.attachments?.length > 0) {
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}

            />
        )
    }
// The text messages will be rendered here
    return(
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    );
}

export default MyMessage;