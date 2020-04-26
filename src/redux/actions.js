import fakeAPI from "../database/fakeAPI";
import { history } from "../helpers/history";

const SINGIN_START = "[user] - sing in start";
const SINGIN_SUCCESS = "[user] - singed in successfully";
const SIGNIN_FAILED = "[user] - sign in failed";
const SIGN_OUT = "[user] - sign out"

const signInStart = () => ({
    type: SINGIN_START
})

const signInSuccess = payload => ({
    type: SINGIN_SUCCESS,
    payload
})

const signInFailed = payload => ({
    type: SIGNIN_FAILED,
    payload
})

const signOut = () => ({
    type: SIGN_OUT
})

const asyncSignIn = ({ username, password }) => dispatch => {
    dispatch(signInStart);

    fakeAPI.login({ username, password })
        .then(res => {
            dispatch(signInSuccess(res));
            history.push("/");
        })
        .catch(err => {
            console.warn(err)
            dispatch(signInFailed(err))
        });    
}

export {
    SINGIN_START,
    SINGIN_SUCCESS,
    SIGNIN_FAILED,
    SIGN_OUT,
    signInStart,
    signInSuccess,
    signInFailed,
    signOut,
    asyncSignIn
}