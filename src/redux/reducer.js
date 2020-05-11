import {
    SINGIN_START,
    SINGIN_SUCCESS,
    SIGNIN_FAILED,
    SIGN_OUT
} from "./actions";

const initState = {
    inProgress: false,
    loggedIn: false,
    username: "",
    loginFailed: null,
    token: ""
}

const user = (state = initState, action) => {
    switch (action.type) {
        case SINGIN_START:
            return ({
                inProgress: true,
                loggedIn: false,
                username: action.payload.username,
                loginFailed: null,
                token: ""
            });
        case SINGIN_SUCCESS:
            return ({
                inProgress: false,
                loggedIn: true,
                username: action.payload.username,
                loginFailed: false,
                token: action.payload.accessToken
            });
        case SIGNIN_FAILED:
            return ({
                inProgress: false,
                loggedIn: false,
                username: null,
                loginFailed: true,
                token: ""
            });
        case SIGN_OUT:
            return ({
                ...state,
                inProgress: false,
                username: null,
                loggedIn: false,
                token: ""
            })
        default:
            return (state);
    }
}

export default user;