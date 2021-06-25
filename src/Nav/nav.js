import React, { useState, useEffect } from 'react';
import './nav.css';
import logo from '../image/logo.png';
import avatar from '../image/avatar.png';
import { useHistory } from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    const transitionNavbar = () => {
        var navbar = document.getElementById('nn');
        
        if (window.scrollY > 20) {
            handleShow(true);
        } else {
            handleShow(false);
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, []);

    return (
        <div id="nn" className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents" >
                <img onClick={ ()=> history.push("/")} className="nav__logo" src={logo} alt="logo" />
                <img onClick={()=>history.push("/profile")} className="nav__avatar" src={avatar} alt="avatar" />

            </div>
        </div>
    )
}

export default Nav;