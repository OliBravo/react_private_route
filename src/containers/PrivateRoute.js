import { connect } from "react-redux";
import PrivateRoute from "../components/PrivateRoute";

const mapState = state => ({
    authenticated: state.loggedIn 
})

export default connect(mapState)(PrivateRoute);