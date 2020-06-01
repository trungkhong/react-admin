import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { alertActions } from './actions';
import { hideModal, showModal } from './actions/modal.actions';
import { history } from './helpers';

import { PrivateRoute } from './components/PrivateRoute.jsx';
import { HomePage } from './modules/HomePage/HomePage.jsx';
import { LoginPage } from './modules/LoginPage/LoginPage.jsx';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ScoopListContainer from './containers/Scoop/ScoopListContainer.jsx';
import { CookiesProvider } from 'react-cookie';
import ModalContainer from './containers/ModalContainer.jsx'
import { ResetPassword } from './modules/ResetPassword/ResetPassword';

class App extends Component {
    constructor(props){
        super(props)

        const { dispatch } = this.props
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }

    componentDidMount(){
    }

    render() {
        const { isLogging } = this.props;
        // let userStored = localStorage.getItem('user');
        // if(userStored) {
        //     let userStored = JSON.parse(userStored);
        //     let jwtToken = userStored.user_token
        // }
        console.log("current state: ", this.props)
        var header = (localStorage.getItem('user') && isLogging) ? <Header /> : '';
        var sidebar = (localStorage.getItem('user') && isLogging)  ? <Sidebar /> : '';
        return (
            <div className="App">
                {header}
                {sidebar}
                <Router>
                    <div className="container-react">
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/scoops" component={ScoopListContainer}/>
                        <Route path="/reset-password" component={ResetPassword}/>
                    </div>
                </Router>
                <ModalContainer hideModal={this.props.hideModal} content={this.props.contentModal}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log("app state:", state)
    const { alert } = state
    return {
        isLogging: state.authentication,
        alert,
        contentModal: state.modal.modalProps.content
    };
}
const mapDispatchToProps = dispatch => ({ 
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => {
     dispatch(showModal({ modalProps, modalType }))
    }
   })

const appPage = connect(mapStateToProps, mapDispatchToProps)(App)
export { appPage as App };