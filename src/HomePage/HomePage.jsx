import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';
import { userActions } from '../_actions';
import { connect } from 'react-redux';
class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAll())
    }

    render() {
        var { user } = this.props;
        return (
            <div>
                <h1>{user.username}</h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { authentication } = state
    const { user } = authentication
    return {
        user
    }
}

const connectHomepage = connect(mapStateToProps)(HomePage)
export { connectHomepage as HomePage };