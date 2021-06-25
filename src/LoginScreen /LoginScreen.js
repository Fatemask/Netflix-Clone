import React, { useState } from 'react';
import './LoginScreen.css';
import logo from "../image/logo.png";
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import Footer from '../Footer/footer.js';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            {/* navpart */}
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src={logo} alt="login img" />
                <button onClick={()=> setSignIn(true)} className="loginScreen__button">SignIn</button>
            
                <div className="loginScreen__gradient"/>
            </div>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignUpScreen/>
                ) : (
                <>
                   {/* loginscreenpart */}
                    <h1>Unlimited Films, TV programmes and more</h1>
                    <h2>Watch anywhere. Cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create your account and start your membership</h3>
                    <div>
                       <form className="loginScreen__input" >
                            <input type="email" placeholder="email" />
                            <button onClick={()=> setSignIn(true)} className="loginScreen__getStarted"> GET STARTED</button>
                       </form>
                    </div>
                </>
                )}
                
            </div>
            <Footer/>
        </div>
    );
}

export default LoginScreen;