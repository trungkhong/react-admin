import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import config from 'config';

import { userService } from './../../services';
import { userActions } from './../../actions';
import { connect } from 'react-redux';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3'

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
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
        const { email, recaptchaResponse } = this.state;

        const { dispatch } = this.props;

        // stop here if form is invalid
        if (email) {
            dispatch(userActions.resetPassword(email, recaptchaResponse));
        }
    }

    render() {
        const { loggingIn, alert } = this.props;
        const { email, submitted} = this.state;

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
                                    <p className="text-center text-uppercase pad-v">RESET PASSWORD.</p>
                                    {alert.message &&
                                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                                    }
                                    <form role="form" onSubmit={this.onHandleSubmit}>
                                        <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                            <label className="text-muted" htmlFor="exampleInputEmail">Email</label>
                                            <div className="group-icon">
                                                <input id="exampleInputEmail" name="email" type="email" placeholder="Enter your email address"
                                                    className="form-control" onChange={this.onHandleChange} />
                                                <span className="icon-lock text-muted icon-input"></span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <ReCaptcha
                                                size="normal"
                                                sitekey={config.gCaptchaKey}
                                                action='submit'
                                                verifyCallback={this.verifyCallback}
                                            />
                                        </div>
                                        <div className="clearfix">
                                            <div className="pull-right">
                                                <button type="submit" className="btn btn-block btn-primary">Send Reset Link</button>
                                            </div>
                                        </div>
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

const connecttedResetPassword = connect(mapStateToProps)(ResetPassword)
export { connecttedResetPassword as ResetPassword };