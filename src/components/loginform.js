import React , { useState } from 'react';
import '../index.css';
import { useHistory } from 'react-router-dom';
import { RealAuth } from '../services/index';

function LoginForm(){
    const [errorMsg, setErrorMsg] = useState('');
    const [errorClass , setErrorClass] = useState('');
    let history = useHistory();
    
    let handleClick = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        if (username && password){
            
            if (username === 'hruday@gmail.com' && password === 'hruday123'){
                console.log('logged success');
                RealAuth.authenticate(() => history.replace('/dashboard'));
            }else{
                console.log('logged error');
                setErrorMsg('Credentials not valid');
                setErrorClass('error');
            }

        }else if(username){
            setErrorMsg('Enter Valid Password');
            setErrorClass('error');
        }else if (password) {
            setErrorMsg('Enter Valid Username');
            setErrorClass('error');
        }
        else{
            setErrorMsg('Enter Valid Username and Password');
            setErrorClass('error');
        }
    };
    return(
        <div className="container">
            <form className="login flex-center" onSubmit={handleClick} method="post">
            <h4>Login Page</h4>
            <input type="text" name="username" placeholder="Username" className={errorClass ? errorClass : ''} />
            <input type="password" name="password" placeholder="Password" className={errorClass ? errorClass : ''} />
            <span>{errorMsg}</span>
            <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;