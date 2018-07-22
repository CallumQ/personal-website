import React, { Component } from 'react';
import "../HomepageBlogPost/HomepageBlogPost.css";
import { Grid, Image, Divider, Button, Icon} from 'semantic-ui-react'
import placeholder from "../../800x450.jpg";

class HomepageBlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {isActive: false};
    }

    toggleBlogpost(event){
        if (this.state.isActive)
            this.setState({isActive : false})
        else
            this.setState({isActive : true})
    }

    render() {
        return (
            <div className="blog-post-container">
                <a href="#">
                    <img src={placeholder} className="blog-post-image"/>
                </a>
                <div className={+ this.state.isActive ? "blog-post-bottom-bar active-post" : "blog-post-bottom-bar"}>
                    <div className="blogpost-divider"></div>
                    <div className="blog-post-bottom-text">
                        <a href="#">
                            <p>hello</p>
                        </a>
                    </div>
                    <div className="blog-post-bottom-arrow" onClick={this.toggleBlogpost.bind(this)}>
                        <Icon name='angle up'/>
                    </div>
                    <div className="blog-post-bottom-details">
                        <Icon name='calendar alternate outline'/>
                        <strong>Date:</strong> 12<sup>th</sup> July 2018 
                        <br/>
                        <div className="blog-post-bottom-content">
                            Hello
                            <div className="bottom-button-container">
                                <div className="bottom-button-container-content">
                                    <a href="#">
                                        View
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

export default HomepageBlogPost;