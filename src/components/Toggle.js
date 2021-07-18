import React from 'react';
import {connect} from 'react-redux'
import {toggleMessageActionCreator} from '../redux/toggleActions';

const Toggle = ({messageVisibility,toggleMessage}) => {
    return (
        <div className="toggle">
            {messageVisibility &&
            <p>You will be see this if toggled</p>
            }
            <button onClick={toggleMessage} >Toggle me</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    messageVisibility: state.toggle.messageVisibility
})
const mapDispatchToProps = (dispatch) => {
    return {
        toggleMessage: () =>  dispatch(toggleMessageActionCreator()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Toggle)