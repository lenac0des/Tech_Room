/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 31/01/2023 - 10:13:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2023
    * - Author          : ellen
    * - Modification    : 
**/
import { ChatEngine } from 'react-chat-engine';

import './App.css';

// create a simple functional component for chat engine
// within the chat engine component I am going to pass different props
// setting the height to 100vh is going to tell the application that we want our project to take up the whole page
// projectID is going to be a string that we are goint to get once the chat application is created
// userName is going to be the login of the user that wants to join the chat room
// userSecret is basically the users password
//  after creating all the props I went to chat engine dashboard to create the project

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID=""
            userName=""
            userSecret=""
        />
    );
}

export default App; 