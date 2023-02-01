/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 31/01/2023 - 11:33:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2023
    * - Author          : ellen
    * - Modification    : 
**/
// create another functional componment
// this file will contain all the logic we need to write and send messages
// to start create a jsx layout by creating a form inside the return statement
// the form will have a classname called message-form
// the form will also possess an onSubmit handler
// every form needs an input, placeholder text, value, and onchange

//create state this will give value to the handle submit and change 
import { useState  } from 'react';

// the feature of the react chat engine 
// sendmessage is a function we are going to call once we want to send the message to the chat engine
import { sendMessage, isTyping } from 'react-chat-engine';

// importing some icons for the image field below
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    // destructure the props here
    const { chatId, creds } = props;
    
    const handleSubmit = (event) => {
    // for handleSubmit you have to add the event.preventDefault to prevent a browser refresh once the form is submitted
        event.preventDefault();

        // next the text will be trimmed this will trim unnecessary whitespace
        const text = value.trim();

        // send =Message is coming from the react chat engine and will need 3 props including an object for {text}
        if(text.length > 0) sendMessage(creds, chatId, { text });

        // to set the form blank set the value to an empty string
        setValue('');
        

    }

    const handleChange = (event) => {
        // this is where the value of the import is stored in
        setValue(event.target.value);

        // isTyping is going to be called
        isTyping(props, chatId);

    }

    // this will conatin the image
    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }


    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className="message-input"
                placeholder="Send a message... "
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {/* adding an image field */}
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined  className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{display: 'none'}}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className='send-icon' />
            </button>
        </form>
    );
}

export default MessageForm;

// import logic for the handlechange and handlesubmit

// then add the send button and input for the images

// to handle the change inside the handlechange you have to add an event


// go bact to chat feed to fix read recepits