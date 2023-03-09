import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const clientId = '811722996486-4gavm2a7d0t8388ph715f9ge973da520.apps.googleusercontent.com'
const GoogleLoginButton = () => {

    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null)

    const navigate = useNavigate()
    const redirects = useCallback(() => {

        navigate('/Content', {
            state: {
                userName: profile.name,
                userProfile: profile.picture,
                userEmail: profile.email
            }
        })
    }, [navigate, profile])

    const login = useGoogleLogin({
        clientId: clientId,
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            console.log("Logged in", codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error),
        uxMode: 'popup'
    })

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
                }).catch((err) => {
                    console.log("cannot fetch user profile", err.message)
                })
            } catch (err) {
                console.log("cannot fetch user profile", err.message)
            }
        }
    }, [user])

    useEffect(() => {
        if (profile) {
            redirects();
        }
    }, [profile, redirects])


    return (
        <Button variant="contained" color="error" sx={{backgroundColor:'#4285F4'}}onClick={login}>Sign in with Google 🔥 </Button>
    )
}

export default GoogleLoginButton
