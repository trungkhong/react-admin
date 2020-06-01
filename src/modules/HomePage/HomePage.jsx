import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { userService } from './../../services';
import { userActions } from './../../actions';
import { connect } from 'react-redux';
class HomePage extends Component {
    constructor(props) {
        super(props);
    }
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