
import { ACTIONS } from "./constants";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    accessToken: null
}

export const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case ACTIONS.SET_CURRENT_USER:
            return { ...state, user: action.user };
        case ACTIONS.SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.accessToken }
        default:
            return state;
    }
}