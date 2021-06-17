import React, { useRef } from 'react'
import './SignUpScreen.css';
import {auth} from '../firebase';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            alert(error.message);
        });
    };

    const signIn =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            alert(error.message);
        });
    };

    return (
        <div className="SignUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="email" required/>
                <input ref={passwordRef} type="password" placeholder="password" required/>
                <button onClick={signIn} type="submit">Sign In</button>

                <h4>
                    <span className="SignUpScreen__gray" >New to Netflix? </span> 
                    <span onClick={register} className="SignUpScreen__link">SignUp now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen;
