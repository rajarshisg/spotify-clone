import axios from "axios";

class SpotifyAPI {
  authUrl = "https://accounts.spotify.com/authorize";
  redirectUrl = "http://localhost:3000/";
  baseUrl = "https://api.spotify.com/v1";

  accessToken = "";
  clientId = "4ee3b8075b9547e08141c167f027161d";

  scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  setAccessToken = (accessToken) => {
    this.accessToken = accessToken;
  };

  getLoginUrl = () => {
    const loginUrl = `${this.authUrl}?client_id=${this.clientId
      }&redirect_uri=${this.redirectUrl}&scope=${this.scopes.join(
        "%20"
      )}&response_type=token&show_dialog=true`;

    return loginUrl;
  };

  getAccessTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((prev, next) => {
        let parts = next.split("=");
        prev[parts[0]] = decodeURIComponent(parts[1]);
        return prev;
      }, {});
  };

  getEntity = async ({ method, endpoint }) => {
    const response = await axios({
      method,
      url: this.baseUrl + endpoint,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return response;
  };

  getCurrentUser = async () => {
    const userResponse = await this.getEntity({
      method: "GET",
      endpoint: "/me",
    });
    return userResponse;
  };

}
export default SpotifyAPI;
