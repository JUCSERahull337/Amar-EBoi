import React,{useState,useContext} from 'react';
import {UserContext} from '../../App'

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';



//firebase.initializeApp(firebaseConfig)
  if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

const Login = () => {
    const [user, setUser]= useState({
        isSignedIn: false,
        name:'',
        email:''
    })

    const [loggedInUser , setLoggedInUser]= useContext(UserContext);



    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=> {
            //let token = res.credential.accessToken;
            const {displayName,email}  = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email:email
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);


            //console.log(displayName)
        })
        .catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
          });
    }

  

   
    return (
        <div className='d-flex justify-content-center align-content-center text-center my-5' >
            <div className="container">
            <p className = 'display-4'>Simply Sign In with Google</p>
            <button type="button" class="btn btn-outline-primary btn-lg " onClick={handleGoogleSignIn}>Google</button>


            </div>
            
            
           
        </div>
    );
};

export default Login;