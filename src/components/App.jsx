import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { alertActions } from './actions';
import { history } from './helpers';

import { PrivateRoute } from './components';
import { HomePage } from './modules/HomePage';
import { LoginPage } from './modules/LoginPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ScoopList from './modules/Scoop/ScoopList';
import { CookiesProvider } from 'react-cookie';

// class App extends Component {
//     constructor(props){
//         super(props)

//         const { dispatch } = this.props
//         history.listen((location, action) => {
//             dispatch(alertActions.clear());
//         });
//     }

//     render() {
//         const { alert } = this.props;
//         var header = localStorage.getItem('user') ? <Header /> : '';
//         var sidebar = localStorage.getItem('user') ? <Sidebar /> : '';
//         return (
//             <div className="App">
//                 {header}
//                 {sidebar}
//                 {alert.message && 
//                     <div className="{`alert ${alert.type}`}">{alert.message}</div>
//                 }
//                 <Router>
//                     <div className="container-react">
//                         <PrivateRoute exact path="/" component={HomePage} />
//                         <Route path="/login" component={LoginPage} />
//                         <Route path="/scoops" component={ScoopList}/>
//                     </div>
//                 </Router>
//             </div>
//         );
//     }
// }

const App = () => (
    <div>
        <p>Test</p>
  </div>
)
export default App;
// function mapStateToProps(state){
//     const { alert } = state
//     return {
//         alert
//     };
// }
