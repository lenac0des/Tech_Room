/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 01/02/2023 - 10:13:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/02/2023
    * - Author          : ellen
    * - Modification    : 
**/
// create a new functional component called loginform
// inside of the functional component two use states need to be implemented
//  the two use states will be password and username
// set it to an empty string because many people will be logging in 

import { useState } from 'react';

// we are going to make api calls so import axios
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // adding one more usestate field for error loggin
    // add it to the catch function
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        // the first step to a handle submit is the default to prevent the browser from refreshing
        e.preventDefault();

        // create user credentials if username password works...then loggin success
        // if username password fails... then error

        const authObject = {'Project-ID': "7f08ace2-0ed8-4617-82a1-4314da18904f", 'User-Name': username, 'User-Secret': password}

        try {
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });
          
        //   create local storage so that the user does not have to login over and over
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);



            // after adding local storage reload the page
            // go back to app.js to add an if statement
            window.location.reload();
        } catch (error) {
            setError('Ooops, incorrect credentials. ')
        }
    }

    // create a jsx return statement for the login form
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    {/* this contains the value of the input */}
                    <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    {/* every form needs a button */}
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )
}

export default LoginForm; 