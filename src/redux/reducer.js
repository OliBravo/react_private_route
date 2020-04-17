import {
    SINGIN_START,
    SINGIN_SUCCESS,
    SIGNIN_FAILED
} from "./actions";

const initState = {
    inProgress: false,
    loggedIn: false,
    username: "",
    loginFailed: null
}

const user = (state = initState, action) => {
    switch (action.type) {
        case SINGIN_START:
            return ({
                inProgress: true,
                loggedIn: false,
                username: action.payload.username,
                loginFailed: null
            });
        case SINGIN_SUCCESS:
            return ({
                inProgress: false,
                loggedIn: true,
                username: action.payload.username,
                loginFailed: false
            });
        case SIGNIN_FAILED:
            return ({
                inProgress: false,
                loggedIn: false,
                username: null,
                loginFailed: true
            });
        default:
            return (state);
    }
}

export default user;