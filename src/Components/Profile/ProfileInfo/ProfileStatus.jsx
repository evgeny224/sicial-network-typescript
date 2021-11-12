import React from "react";


class ProfileStatus extends React.Component {

    state = {
        onEdditMode: false,
        status: this.props.status
    }

    activateEdditMode = () => {
        this.setState({onEdditMode: true})
    }

    deactivateEdditMode = () => {
        this.setState({onEdditMode: false})
        this.props.updateUserStatusThunk(this.state.status)
    }

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }


    render(){
        return(
            <div>
                {!this.state.onEdditMode &&  
                    <div>
                        <span onDoubleClick = {this.activateEdditMode.bind(this)}>{this.props.status || "-------"}</span>
                    </div>}
                {this.state.onEdditMode &&  
                    <div>
                        <input autoFocus = {true} value = {this.state.status} onChange = {this.changeStatus}  onBlur = {this.deactivateEdditMode.bind(this)}/>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;