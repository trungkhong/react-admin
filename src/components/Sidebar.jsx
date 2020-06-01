import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Sidebar extends React.Component {
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
            <Router>
            <aside className="float-navigation light-navigation">
                <div className="nano">
                    <div className="nano-content">
                        <ul className="metisMenu nav" id="menu">
                            <li className="nav-heading"><span>Main Navigation</span></li>
                            <li className="active">
                                <a href="#" aria-expanded="true"><i className="icon-home"></i> Dashboard </a>
                            </li>
                            <li>
                                <a href="/scoops" aria-expanded="true"><i className="icon-picture"></i> Scoops <span
                                        className="fa arrow"></span></a>
                                <ul className="nav-second-level nav" aria-expanded="true">
                                    <li><a href="/scoops">Scoops</a></li>
                                    <li><a href="review-scoop.html">Review supensed</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" aria-expanded="true"><i className="icon-grid"></i> Category <span
                                        className="fa arrow"></span></a>
                                <ul className="nav-second-level nav" aria-expanded="true">
                                    <li><a href="category.html">Categories</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" aria-expanded="true"><i className="icon-cup"></i> Discussions <span
                                        className="fa arrow"></span></a>
                                <ul className="nav-second-level nav" aria-expanded="true">
                                    <li><a href="discussion.html">Discussions</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" aria-expanded="true"><i className="icon-tag"></i> Hashtag <span
                                        className="fa arrow"></span></a>
                                <ul className="nav-second-level nav" aria-expanded="true">
                                    <li><a href="hashtag.html">Trending hashtags</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" aria-expanded="true"><i className="icon-users"></i> User <span
                                        className="fa arrow"></span></a>
                                <ul className="nav-second-level nav" aria-expanded="true">
                                    <li><a href="users.html">Users</a></li>
                                    <li><a href="review-publisher.html">Review Publisher <span
                                                className="badge badge-danger">4</span></a>
                                    </li>
                                    <li><a href="review-supensed.html">Review supensed</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" aria-expanded="true"><i className="icon-map"></i> Mission <span
                                        className="fa arrow"></span></a>
                                <ul className="nav-second-level nav" aria-expanded="true">
                                    <li><a href="mission.html">Missions</a></li>
                                </ul>
                            </li>
                            <li className="nav-heading"><span>Components</span></li>
                            <li>
                                <a href="#" aria-expanded="true"><i className="icon-wallet"></i> Payment <span
                                        className="fa arrow"></span></a>
                                <ul className="nav-second-level nav" aria-expanded="true">
                                    <li><a href="map-vector.html"><i className="icon-paypal icons"></i> Paypal</a></li>
                                    <li><a href="map-google.html"><i className="icon-diamond"></i> Other </a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" aria-expanded="true"><i className="icon-settings"></i> Settings </a>
                            </li>
                            <li>
                                <a href="#" aria-expanded="true"><i className="icon-flag"></i> Report <span
                                        className="fa arrow"></span></a>
                                <ul className="nav-second-level nav" aria-expanded="true">
                                    <li><a href="map-vector.html">Export payment</a></li>
                                    <li><a href="map-google.html">Adversite</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            </Router>
        );
    }
}