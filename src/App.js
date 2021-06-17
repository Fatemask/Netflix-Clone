import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen/homeScreen';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen /LoginScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import {auth} from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen/ProfileScreen';

 function App() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();
   useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        //logged out
        dispatch(logout());
      }});
      return unsubscribe;
   },[]);

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen/>
          ) : (
            <Switch>
            <Route path="/login">
              <LoginScreen/>
            </Route>
            <Route path="/profile">
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path='/signUp'>
              <SignUpScreen/>
            </Route>
          </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
