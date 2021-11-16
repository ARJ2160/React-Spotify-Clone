export const auth = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientID = "30a4969ad9124e7d8597bed1d5d3a3ee";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .splitr('&')
        .reduce((initial, item) => {
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])
            
            return initial
        }, {})
}

export const loginUrl = `${auth}?client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;