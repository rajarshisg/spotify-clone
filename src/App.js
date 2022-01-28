import React, { useState, useEffect } from 'react';
import './App.css';
import { Login } from './components/index';
import { getAccessTokenFromResponse } from './api';

function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const accessTokenResponse = getAccessTokenFromResponse();
    window.location.hash = "";
    const _accessToken = accessTokenResponse.access_token;
    setAccessToken(_accessToken);
  }, []);

  return (
    <div className="app">
      {
        accessToken ? (
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
