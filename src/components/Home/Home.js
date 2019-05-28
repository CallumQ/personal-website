import {NavLink} from "react-router-dom";
import { Image, Modal, Button, Icon, Header, Dropdown} from 'semantic-ui-react';
import React, { Component } from 'react';
import "../Home/Home.css";

class Home extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <React.Fragment>
                <div className="top-section">
                    <div className="central-section">
                    <div>
                        <h1>Hi there, My name’s Callum and I’m a Software Engineer</h1>
                        <h2>I develop web applications and native desktop applications. I mainly work with C#, Python, and Java.
                            <br/>I also have experience using web development frameworks such as React and Backbone.js.</h2>
                        <div className="button-container">
                            <div className="button">
                                <NavLink exact to="/portfolio">Portfolio</NavLink>
                            </div>
                            <div className="button">
                                <NavLink exact to="/cv">CV</NavLink>
                            </div>
                            <div className="button">
                                <NavLink exact to="/contact">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bottom-section">
                    <div className="recent-posts-section">
                        <h3>Recent Posts</h3>
                        <a href="https://medium.com/@callumrussellquigley" target="_blank">view all <Icon name="caret right"/></a>
                    </div>
                    <div className="post-container">
                        <div className="post">
                            <div className="post-image"><img src="https://via.placeholder.com/398x300"/></div>
                            <div className="post-information">
                                <div className="post-title">Some Title</div>
                                <div className="post-content">Some Description</div>                        
                                <div className="relative-container">
                                    <div className="post-date">01/02/2019</div>
                                    <div className="view-button-container">
                                        <div className="relative-container">
                                            <div className="view-button"><a href="#">View</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-image"><img src="https://via.placeholder.com/398x300"/></div>
                            <div className="post-information">
                                <div className="post-title">Some Title</div>
                                <div className="post-content">Some Description</div>                        
                                <div className="relative-container">
                                    <div className="post-date">01/02/2019</div>
                                    <div className="view-button-container">
                                        <div className="relative-container">
                                            <div className="view-button"><a href="#">View</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-image"><img src="https://via.placeholder.com/398x300"/></div>
                            <div className="post-information">
                                <div className="post-title">Some Title</div>
                                <div className="post-content">Some Description</div>                        
                                <div className="relative-container">
                                    <div className="post-date">01/02/2019</div>
                                    <div className="view-button-container">
                                        <div className="relative-container">
                                            <div className="view-button"><a href="#">View</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;