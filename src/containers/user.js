import { connect } from "react-redux";
import User from "../components/user";

const mapState = ({username}) => ({
    username
})

export default connect(mapState)(User);