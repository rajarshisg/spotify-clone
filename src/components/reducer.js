export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
}

export default reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}