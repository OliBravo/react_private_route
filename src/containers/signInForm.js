import { connect } from "react-redux";
import SignInForm from "../components/signInForm";
import { asyncSignIn } from "../redux/actions";

const mapDispatch = dispatch => ({
    signIn: user => dispatch(asyncSignIn(user))
})

export default connect(null, mapDispatch)(SignInForm);