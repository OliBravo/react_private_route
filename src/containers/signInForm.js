import { connect } from "react-redux";
import SignInForm from "../components/signInForm";
import { asyncSignIn } from "../redux/actions";

const mapState = ({loginFailed}) => ({
    loginFailed
})

const mapDispatch = dispatch => ({
    signIn: user => dispatch(asyncSignIn(user))
})

export default connect(mapState, mapDispatch)(SignInForm);