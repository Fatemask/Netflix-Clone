import React from 'react';
import Nav from '../Nav/nav';
import avatar from '../image/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import './ProfileScreen.css';
import PlanScreen from '../PlanScreen/PlanScreen';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src={avatar} alt="profile img" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlanScreen />
                            <button onClick={()=>auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
