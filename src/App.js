import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Player from './components/Player';
import SpotifyAPI from './utils/spotifyApi';
import { useDataLayerValue } from './utils/DataLayer';
import { ACTIONS } from './utils/constants';
import './App.css';


const spotify = new SpotifyAPI();

function App() {
  const [{ user, accessToken }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const accessTokenResponse = spotify.getAccessTokenFromResponse();
    const _accessToken = accessTokenResponse.access_token;

    if (_accessToken) {
      dispatch({
        type: ACTIONS.SET_ACCESS_TOKEN,
        accessToken: _accessToken
      });
      window.location.hash = "";

      spotify.setAccessToken(_accessToken);
      spotify.getCurrentUser().then((user) => {
        //console.log(user);
        dispatch({
          type: ACTIONS.SET_CURRENT_USER,
          user,
        });
      });
    }

  }, []);
  console.log(user);
  console.log(accessToken);
  return (
    <div className="app">
      {
        accessToken ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
