import React, {Component} from 'react';
import config from 'config';
import { userService } from './../../services';
import { userActions } from "./../../actions";
import { alertActions } from './../../actions';
import {connect} from 'react-redux';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        }

        //this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    
    }

    componentDidMount() {
        loadReCaptcha(config.gCaptchaKey)
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
      }
    //   onLoadRecaptcha() {
    //       if (this.captchaDemo) {
    //           this.captchaDemo.reset();
    //           //this.captchaDemo.execute();
    //       }
    //   }
      verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
        this.setState({'recaptchaResponse': recaptchaToken})
      }

    onHandleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    onHandleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, recaptchaResponse } = this.state;

        const { dispatch } = this.props;

        // stop here if form is invalid
        if (username && password) {
            dispatch(userActions.login(username, password, recaptchaResponse));
        }

        // this.setState({ loading: true });

        // userService.login(username, password)
        //     .then(user => {
        //         const { from } = this.props.location.state || { from: { pathname: "/" } };
        //         this.props.history.push(from);
        //     }, error => this.setState({ error, loading: false }));
    }

    render() {
        const { loggingIn, alert } = this.props;
        const { username, password, submitted} = this.state;
        return (
            <div className="misc-wrapper login">
                <link rel="stylesheet" href="../public/css/login.css"/>
                <div className="misc-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                                <div className="misc-header text-center">
                                    <img src="../public/images/logo-w.svg" alt="Logo" />
                                </div>
                                <div className="misc-box">
                                    <p className="text-center text-uppercase pad-v">Login to continue.</p>
                                    {alert.message &&
                                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                                    }
                                    <form role="form" onSubmit={this.onHandleSubmit}>
                                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                            <label className="text-muted" htmlFor="exampleuser1">UserName</label>
                                            <div className="group-icon">
                                                <input id="exampleuser1" name="username" type="text" placeholder="Username" className="form-control"
                                                    required="" onChange={this.onHandleChange} />
                                                <span className="icon-user text-muted icon-input"></span>
                                            </div>
                                        </div>
                                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                            <label className="text-muted" htmlFor="exampleInputPassword1">Password</label>
                                            <div className="group-icon">
                                                <input id="exampleInputPassword1" name="password" type="password" placeholder="Password"
                                                    className="form-control" onChange={this.onHandleChange} />
                                                <span className="icon-lock text-muted icon-input"></span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <ReCaptcha
                                                size="normal"
                                                sitekey={config.gCaptchaKey}
                                                action='submit'
                                                // onloadCallback={this.onLoadRecaptcha}
                                                verifyCallback={this.verifyCallback}
                                            />
                                        </div>
                                        <div className="clearfix">
                                            <div className="pull-left">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" className="i-checks" name="remember" />
                                                        <span> Remember Me</span></label>
                                                </div>
                                            </div>
                                            <div className="pull-right">
                                                <button type="submit" className="btn btn-block btn-primary">Login</button>
                                                {loggingIn && 
                                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                                }
                                            </div>
                                        </div>
                                        <hr />
                                        <p className=" text-center"><a href="/reset-password">Reset password</a></p>
                                    </form>
                                </div>
                                <div className="text-center misc-footer">
                                    <span>&copy; Copyright 2016 - 2017. myScoop<br />YOUR STORY MATTERS. VLOG IT.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { loggingIn } = state.authentication;
    const { alert } = state

    return {
        alert,
        loggingIn
    }
}

const connecttedLoginPage = connect(mapStateToProps)(LoginPage)
export { connecttedLoginPage as LoginPage };