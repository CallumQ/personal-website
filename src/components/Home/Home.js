import placeholder from "../../placeholder.png";
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../Home/Home.css";

class Home extends Component {
    render() {
        return (
            <div className="content">
                <div className="intro-section">
                    <div className="section-header">
                        Hi There, My name's Callum and I'm a Software Engineer
                    </div>
                    <div className="section-content">
                        I develop web applications &amp; native applications mainly using C# and Java.<br/>
                        I also have experience with other languages such as C, Python, and web development frameworks like React and Backbone. 
                        <br/><br/> You can have a look at some of my
                        <Link to="portfolio"> projects </Link>
                        to see some examples of my work and the technologies that I have used.
                    </div>
                    <div className="section-content">
                        <Link to="portfolio"> 
                            <div className="button">Portfolio</div>
                        </Link>
                        <Link to="cv">
                            <div className="button">CV</div>
                        </Link>
                        <Link to="contact">
                            <div className="button">Contact</div>
                        </Link>
                    </div>
                </div>
                <div className="inverted-section">
                    <p className="blogpost-header">Recent posts</p>
                    <div className="blogpost-section">
                        <div className="blogpost-item">
                            <a href="#">
                                <div className="blogpost-title">This is an example title just to make sure it works </div>
                            </a>
                            <div className="blogpost-image">
                                <img src={placeholder}/>
                            </div>
                            <div className="blogpost-bottomBar">
                                <div className="blogpost-creationDate">
                                    <Icon name='calendar'/>01/02/1995
                                </div>
                                <div className="blogpost-navigate">
                                    <a href="#">
                                        View <Icon name='external'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="blogpost-item">
                            <a href="#">
                                <div className="blogpost-title">This is an example title just to make sure it works </div>
                            </a>
                            <div className="blogpost-image">
                                <img src={placeholder}/>
                            </div>
                            <div className="blogpost-bottomBar">
                                <div className="blogpost-creationDate">
                                    <Icon name='calendar'/>01/02/1995
                                </div>
                                <div className="blogpost-navigate">
                                    <a href="#">
                                        View <Icon name='external'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="blogpost-item">
                            <a href="#">
                                <div className="blogpost-title">This is an example title just to make sure it works </div>
                            </a>
                            <div className="blogpost-image">
                                <img src={placeholder}/>
                            </div>
                            <div className="blogpost-bottomBar">
                                <div className="blogpost-creationDate">
                                    <Icon name='calendar'/>01/02/1995
                                </div>
                                <div className="blogpost-navigate">
                                    <a href="#">
                                        View <Icon name='external'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;