import React, { useState, useEffect } from 'react';
import './nav.css';
import logo from '../image/logo.png';
import avatar from '../image/avatar.png';
import { useHistory } from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    const transitionNavbar = () => {
        if (window.screenY > 30) {
            handleShow(true);
            console.log(true);
        } else {
            handleShow(false);
            console.log(false);
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents" >
                <img onClick={ ()=> history.push("/")} className="nav__logo" src={logo} alt="logo" />
                <img onClick={()=>history.push("/profile")} className="nav__avatar" src={avatar} alt="avatar" />

            </div>
        </div>
    )
}

export default Nav;