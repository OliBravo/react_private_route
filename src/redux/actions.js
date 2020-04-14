import fakeAPI from "../database/fakeAPI";

const SINGIN_START = "[user] - sing in start";
const SINGIN_SUCCESS = "[user] - singed in successfully";
const SIGNIN_FAILED = "[user] - sign in failed";

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

const asyncSignIn = ({ username, password }) => dispatch => {
    dispatch(signInStart);

    fakeAPI.login({ username, password })
        .then(res => dispatch(signInSuccess(res)))
        .catch(err => {
            console.warn(err)
            dispatch(signInFailed(err))
        });    
}

export {
    SINGIN_START,
    SINGIN_SUCCESS,
    SIGNIN_FAILED,
    signInStart,
    signInSuccess,
    signInFailed,
    asyncSignIn
}