import React, { useState, useEffect } from 'react';
import './App.css';
import { Login } from './components/index';
import SpotifyAPI from './utils/spotifyApi';
import Player from './components/Player';
//import { useDataLayerValue } from './components/DataLayer';

const spotify = new SpotifyAPI();

function App() {
  const [accessToken, setAccessToken] = useState(null);
  // const [{ }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const accessTokenResponse = spotify.getAccessTokenFromResponse();
    const _accessToken = accessTokenResponse.access_token;
    setAccessToken(_accessToken);

    window.location.hash = "";

    if (_accessToken) {
      spotify.setAccessToken(_accessToken);
      spotify.getCurrentUser().then((user) => console.log('User', user));
    }

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
