export const authUrl = 'https://accounts.spotify.com/authorize';
const redirectUrl = 'http://localhost:3000/';
const clientId = '4ee3b8075b9547e08141c167f027161d';
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getAccessTokenFromResponse = () => {
    return window.location.hash.substring(1).split('&').reduce((prev, next) => {
        let parts = next.split('=');
        prev[parts[0]] = decodeURIComponent(parts[1]);
        return prev;
    }, {});
}

export const loginUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;