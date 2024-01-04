import React from 'react'
import {Link} from 'react-router-dom'
import './../css/Login.css'
import { useState } from 'react';
import { auth } from '../firebase';
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = (e)=>{
        e.preventDefault();
        //some fancy firebase login
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            (navigate('/'))
        }).catch((error)=> alert(error.message));
    }
    const register= (e)=>{
        e.preventDefault();
        navigate("/")
        //some fancy firebase signup
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            //success
            console.log(auth);
            if(auth){
                navigate('/');
            }
        })
        .catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>Email</h5>
                <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy 
                    Notice, our Cookies Notice and our Interest-Based Ads
                </p>
                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login
