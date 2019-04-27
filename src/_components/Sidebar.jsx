import React from 'react';

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
            <aside class="float-navigation light-navigation">
                <div class="nano">
                    <div class="nano-content">
                        <ul class="metisMenu nav" id="menu">
                            <li class="nav-heading"><span>Main Navigation</span></li>
                            <li class="active">
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-home"></i> Dashboard </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-picture"></i> Scoops <span
                                        class="fa arrow"></span></a>
                                <ul class="nav-second-level nav" aria-expanded="true">
                                    <li><a href="scoop.html">Scoops</a></li>
                                    <li><a href="review-scoop.html">Review supensed</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-grid"></i> Category <span
                                        class="fa arrow"></span></a>
                                <ul class="nav-second-level nav" aria-expanded="true">
                                    <li><a href="category.html">Categories</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-cup"></i> Discussions <span
                                        class="fa arrow"></span></a>
                                <ul class="nav-second-level nav" aria-expanded="true">
                                    <li><a href="discussion.html">Discussions</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-tag"></i> Hashtag <span
                                        class="fa arrow"></span></a>
                                <ul class="nav-second-level nav" aria-expanded="true">
                                    <li><a href="hashtag.html">Trending hashtags</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-users"></i> User <span
                                        class="fa arrow"></span></a>
                                <ul class="nav-second-level nav" aria-expanded="true">
                                    <li><a href="users.html">Users</a></li>
                                    <li><a href="review-publisher.html">Review Publisher <span
                                                class="badge badge-danger">4</span></a>
                                    </li>
                                    <li><a href="review-supensed.html">Review supensed</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-map"></i> Mission <span
                                        class="fa arrow"></span></a>
                                <ul class="nav-second-level nav" aria-expanded="true">
                                    <li><a href="mission.html">Missions</a></li>
                                </ul>
                            </li>
                            <li class="nav-heading"><span>Components</span></li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-wallet"></i> Payment <span
                                        class="fa arrow"></span></a>
                                <ul class="nav-second-level nav" aria-expanded="true">
                                    <li><a href="map-vector.html"><i class="icon-paypal icons"></i> Paypal</a></li>
                                    <li><a href="map-google.html"><i class="icon-diamond"></i> Other </a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-settings"></i> Settings </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" aria-expanded="true"><i class="icon-flag"></i> Report <span
                                        class="fa arrow"></span></a>
                                <ul class="nav-second-level nav" aria-expanded="true">
                                    <li><a href="map-vector.html">Export payment</a></li>
                                    <li><a href="map-google.html">Adversite</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}