import React from 'react';
import SpotifyAPI from '../utils/spotifyApi';
import './styles/Login.css';

const spotify = new SpotifyAPI();
function Login() {
    return (
        <div className='login'>
            <img
                src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
                alt='Spotify Logo'
            />
            <a href={spotify.getLoginUrl()}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;