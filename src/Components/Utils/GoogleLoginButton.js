import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { GoogleLogin } from "@react-oauth/google";
import {useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


const GoogleLoginButton = () => {

    const [user, setUser] = useState();
    const [profile, setProfile] = useState()

    const navigate = useNavigate()

  /*   function onSuccess(res) {
        console.log("successfully Logged in");
        setUser(res)
        navigate('/Content', {
            state: {
                userName: profile.name,
                userProfile: profile.picture,
                userEmail: profile.email
            }
        });
    }

    function onError(error) {
        console.log("Login Failed", error);
        navigate('/SignIn');
    } */

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {setUser(codeResponse)
            navigate('/Content', {
                state: {
                    userName: profile.name,
                    userProfile: profile.picture,
                    userEmail: profile.email
                }
            })},
        onError: (error) => console.log('Login Failed:', error)
    });



    useEffect(() => {
        if (user) {
            try {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                }).then((response) => {
                    setProfile(response.data)
                })
            } catch (err) {
                console.log(err)
            }
        }
    }, [user])

    return (
        // <GoogleLogin onSuccess={onSuccess}
        //     onError={onError}
        // ></GoogleLogin>
        <button onClick={login}>Sign in with Google 🚀 </button>
    )
}

export default GoogleLoginButton


