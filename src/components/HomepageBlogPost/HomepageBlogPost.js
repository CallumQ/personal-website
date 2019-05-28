import "../HomepageBlogPost/HomepageBlogPost.css";
import placeholder from "../../placeholder.png";
import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react'

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
            <div className="blogpost-item">
                             <a href={this.props.url}>
                                <div className="blogpost-title">{this.props.title} </div>
                            </a>
                            <div className="blogpost-image">
                                <img src={this.props.image}/>
                            </div>
                            <div className="blogpost-bottomBar">
                                <div className="blogpost-navigate">
                                    <a href={this.props.url}>
                                        View <Icon name='external'/>
                                    </a>
                                </div>
                            </div>
                        </div>
        )
    }
}

export default HomepageBlogPost;