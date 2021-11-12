import Dialogs from "./Dialogs";
import { addMessageTextAC } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

    const mapStateToProps = (state) => {
        return {
            state: state.dialogPage,
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return{
            addMessageText:(addMessageBody) =>{
                dispatch(addMessageTextAC(addMessageBody))
            },
        }
    }


    export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect,
    )(Dialogs);