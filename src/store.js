import { createStore } from 'redux';

const initialState = {
    current_user: [],
    users: [],
    posts: [],
    comments: [],
    likes: [],
    follows: []
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":
            const current_user = action.payload
            console.log(current_user)
            return { ...state, current_user: [ current_user ] }

        case "LOGOUT":
            localStorage.clear()
            return { ...state, current_user: [] }

        default:
            return state
    }
}


export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)