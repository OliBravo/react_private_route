import { connect } from "react-redux";
import Home from "../components/Home";
import { signOut } from "../redux/actions";

const mapState = state => ({
    user: state.username
})

const mapDispatch = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapState, mapDispatch)(Home);