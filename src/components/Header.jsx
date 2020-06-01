import React from 'react';

export default class Header extends React.Component {
     constructor(props){
         super(props)
        this.state = {
            currentUser: null
        };
    }
    componentWillMount(){
        var currentUser = localStorage.getItem("user");

        this.state.currentUser = JSON.parse(currentUser);
        console.log(this.state.currentUser)

    }
    render() {
        var { currentUser } = this.state;
        var avatar = currentUser.profile.avatar_url ? currentUser.profile.avatar_url : "../public/images/avatar.jpg"
        return (
            <div className="top-bar light-top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6">
                            <a href="index.html" className="admin-logo">
                                <h1><img width="150px" src="../public/images/logo.svg" /></h1>
                            </a>
                            <div className="left-nav-toggle visible-xs visible-sm">
                                <a href="">
                                    <i className="glyphicon glyphicon-menu-hamburger"></i>
                                </a>
                            </div>
                            <div className="search-form hidden-xs">
                                <form>
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <button type="button" className="btn-search"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <ul className="list-inline top-right-nav">
                                <li className="dropdown hidden-xs icon-dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="glyphicon glyphicon-envelope"></i>
                                        <span className="badge badge-warning">4</span>
                                    </a>
                                    <ul className="dropdown-menu top-dropdown lg-dropdown notification-dropdown">
                                        <li>
                                            <div className="dropdown-header"><a href="#" className="pull-right text-muted"><small>View
                                                        All</small></a> Messages </div>
                                            <div className="scrollDiv">

                                                <div className="notification-list">
                                                    <a href="#" className="clearfix">
                                                        <span className="notification-icon">
                                                            <img src="images/avtar-2.jpg"  className="img-circle" width="50"/>
                                                        </span>
                                                        <span className="notification-title">John Doe <label
                                                                className="label label-primary pull-right">Office</label></span>
                                                        <span className="notification-description">Praesent dictum nisl non est
                                                            sagittis luctus.</span>
                                                        <span className="notification-time">40 minutes ago</span>
                                                    </a>
                                                    <a href="#" className="clearfix">
                                                        <span className="notification-icon">
                                                            <img src="images/avtar-3.jpg"  className="img-circle" width="50"/>
                                                        </span>
                                                        <span className="notification-title">Emily Doe <label
                                                                className="label label-info pull-right">Marketing</label></span>
                                                        <span className="notification-description">Praesent dictum nisl non est
                                                            sagittis luctus.</span>
                                                        <span className="notification-time">40 minutes ago</span>
                                                    </a>
                                                    <a href="#" className="clearfix">
                                                        <span className="notification-icon">
                                                            <img src="images/avtar-4.jpg"  className="img-circle" width="50"/>
                                                        </span>
                                                        <span className="notification-title">Michael Clark <label
                                                                className="label label-warning pull-right">Support</label> </span>
                                                        <span className="notification-description">Praesent dictum nisl non est
                                                            sagittis luctus.</span>
                                                        <span className="notification-time">40 minutes ago</span>
                                                    </a>
                                                    <a href="#" className="clearfix">
                                                        <span className="notification-icon">
                                                            <img src="images/avtar-5.jpg"  className="img-circle" width="50"/>
                                                        </span>
                                                        <span className="notification-title">Ronaldo <label
                                                                className="label label-success pull-right">Metting</label> </span>
                                                        <span className="notification-description">Praesent dictum nisl non est
                                                            sagittis luctus.</span>
                                                        <span className="notification-time">40 minutes ago</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </li>
                                <li className="dropdown hidden-xs icon-dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="glyphicon glyphicon-bell"></i>
                                        <span className="badge badge-danger">6</span>
                                    </a>
                                    <ul className="dropdown-menu top-dropdown lg-dropdown notification-dropdown">
                                        <li>
                                            <div className="dropdown-header"><a href="#" className="pull-right text-muted"><small>View
                                                        All</small></a> Notifications </div>
                                            <div className="scrollDiv">
                                                <div className="notification-list">
                                                    <a href="#" className="clearfix">
                                                        <span className="notification-icon"><i
                                                                className="icon-cloud-upload text-primary"></i></span>
                                                        <span className="notification-title">Upload Complete</span>
                                                        <span className="notification-description">Praesent dictum nisl non est
                                                            sagittis luctus.</span>
                                                        <span className="notification-time">40 minutes ago</span>
                                                    </a>
                                                    <a href="#" className="clearfix">
                                                        <span className="notification-icon"><i
                                                                className="icon-info text-warning"></i></span>
                                                        <span className="notification-title">Storage Space low</span>
                                                        <span className="notification-description">Praesent dictum nisl non est
                                                            sagittis luctus.</span>
                                                        <span className="notification-time">40 minutes ago</span>
                                                    </a>
                                                    <a href="#" className="clearfix">
                                                        <span className="notification-icon"><i
                                                                className="icon-check text-success"></i></span>
                                                        <span className="notification-title">Project Task Complete </span>
                                                        <span className="notification-description">Praesent dictum nisl non est
                                                            sagittis luctus.</span>
                                                        <span className="notification-time">40 minutes ago</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="right-sidebar-toggle"><i
                                            className="glyphicon glyphicon-align-right"></i></a>
                                </li>
                                <li className="dropdown avtar-dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src={avatar} className="img-circle" width="30" />
                                    </a>
                                    <ul className="dropdown-menu top-dropdown">
                                        <li><a href="#"><span><strong>
                                        {currentUser.username}
                                        </strong></span></a></li>
                                        <li className="divider"></li>
                                        <li><a href="#"><i className="icon-bell"></i> Activities</a></li>
                                        <li><a href="#"><i className="icon-user"></i> Profile</a></li>
                                        <li><a href="#"><i className="icon-settings"></i> Settings</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#"><i className="icon-logout"></i> Logout</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}