import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { alertActions } from '../_actions';
import { history } from '../_helpers';

import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import Header from '../_components/Header';
import Sidebar from '../_components/Sidebar';


class App extends React.Component {
    constructor(props){
        super(props)

        const { dispatch } = this.props
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        var header = localStorage.getItem('user') ? <Header /> : '';
        var sidebar = localStorage.getItem('user') ? <Sidebar /> : '';
        return (
            <div className="App">
                {header}
                {sidebar}
                {alert.message && 
                    <div className="{`alert ${alert.type}`}">{alert.message}</div>
                }
                <Router>
                    <div className="container-react">
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { alert } = state
    return {
        alert
    };
}

const connectApp = connect(mapStateToProps)(App)

export { connectApp as App }; 