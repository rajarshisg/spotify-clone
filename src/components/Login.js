import React from 'react';
import { loginUrl } from '../api';
import './styles/Login.css';

function Login() {
    return (
        <div className='login'>
            <img
                src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
                alt='Spotify Logo'
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export { Login };