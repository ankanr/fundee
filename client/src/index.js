import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Demo from './Demo';
//import Avatar from './Avatar';
//import Counter from './Component/Counter';
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './Component/functional'; 
import Welcome from './Component/message';
import Count from './Component/counterpractice'
import Conditional from './Component/Usergreeting'
import Key from './Component/keys'
import * as serviceWorker from './serviceWorker';
import Stylesheet from './Component/Stylesheet';
import './Component/Mystyle.css'
import LoginForm from './Component/login_form'
import Signup from './Component/Sign_up'
//import './Component/sign_up.css'
import Details from './Component/list_rendering'
import Box from './Component/searching'

//ReactDOM.render(<div>
	//<Count />,<Greet name="Mohit" /><Rohit name="Mohit" /></div>,document.getElementById('root'));
ReactDOM.render(<Welcome/*primary="true"*/ />,document.getElementById('root'));

















//ReactDOM.render(<Demo name="Mohit Kaushik" />,document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
