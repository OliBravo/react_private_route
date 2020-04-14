import {
    SINGIN_START,
    SINGIN_SUCCESS,
    SIGNIN_FAILED
} from "./actions";

const initState = {
    user: {
        inProgress: false,
        loggedIn: false,
        username: ""
    }
}

const user = (state = initState, action) => {
    switch (action.type) {
        case SINGIN_START:
            return ({
                inProgress: true,
                loggedIn: false,
                username: action.payload.username
            });
        case SINGIN_SUCCESS:
            return ({
                inProgress: false,
                loggedIn: true,
                username: action.payload.username
            });
        case SIGNIN_FAILED:
            return ({
                inProgress: false,
                loggedIn: false,
                username: ""
            });    
        default:
            return(state);
    }
}

export default user;