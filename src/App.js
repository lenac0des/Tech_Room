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

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';

import './App.css';

// create a simple functional component for chat engine
// within the chat engine component I am going to pass different props
// setting the height to 100vh is going to tell the application that we want our project to take up the whole page
// projectID is going to be a string that we are goint to get once the chat application is created
// userName is going to be the login of the user that wants to join the chat room
// userSecret is basically the users password
//  after creating all the props I went to chat engine dashboard to create the project

// Goto chatengine.io create an account and make a new project
// then the first step is to obtain your api key which is going to be you projectID then paste it into projectID
// after create your first user within chatengine and this will me the admin which is me
// next step is to create a chat name it whatever you want
// once the chat room is created on chat engine.io type in the admin username and password

// create a new prop for the chat feed called renderChatFeed.... by doing this you are creating your own component for the entire chat feed.
// then inside the parentesis put in chatAppProps for the chat feed
// then create a component called ChatFeed, then spread all the props that are comijng from the feed by adding the ... chatAppProps and wrap them in curly braces
// because chatfeed is a component you have to import it
// continued in chatfeed.jsx

// a new component login form will be created to have users login dynamitcally



const App = () => {
    // to prevent rendering the chat engine all the time especially when were are not loggin create an if check statement
    // if not logged in return the login form
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="7f08ace2-0ed8-4617-82a1-4314da18904f"
            userName="lenac0des"
            userSecret="apples"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    );
}

export default App; 