import React, { useState, useEffect } from 'react';
import './App.css';
import { Login } from './components/index';
import { getAccessTokenFromResponse } from './api';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useDataLayerValue } from './components/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [{ }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const accessTokenResponse = getAccessTokenFromResponse();
    const _accessToken = accessTokenResponse.access_token;
    setAccessToken(_accessToken);

    window.location.hash = "";

    spotify.setAccessToken(_accessToken);
    spotify.getMe().then((user) => console.log('User', user));
  }, []);

  return (
    <div className="app">
      {
        accessToken ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
