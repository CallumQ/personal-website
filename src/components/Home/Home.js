import React, { Component } from 'react';
import "../Home/Home.css";
import { Grid, Image, Divider, Button, Icon} from 'semantic-ui-react'
import {NavLink } from "react-router-dom";
import circle from "../../circle.jpg";
import personalPhoto from "../../personalPhoto.png";
import HomepageBlogPost from "../HomepageBlogPost/HomepageBlogPost";

class Home extends Component {
    render() {
        return (
            <div className="content">
                <div class="hero-box">
                    <div className="hero-box-picture">
                        <img src={personalPhoto} alt="Website Logo" className="hero-picture image-shadow"/>
                    </div>
                    <div class="hero-box-description">
                        <p className="hero-box-description-heading">
                            <strong>Hi there, I'm Callum and I'm a Software Engineer.</strong>
                        </p>
                        <p className="description">
                            I graduated from Heriot-Watt University in 2017 with 1<sup>st</sup> class honours in Computer Systems. I'm currently based in Manchester.
                        </p>
                        <p className="description">
                            I mainly use Java or C# combined with React for developing web-based applications, but I also have experience with Python, C, SQL, and MongoDB as well as lots of other languages and technologies. Check out my project pace for some examples.
                        </p>
                    </div>
                    <div className="hero-box-divider">
                        <Divider/>
                    </div> 
                    <Button.Group widths="1">
                        <Button>
                            <NavLink exact to="/projects" activeClassName="active">Projects</NavLink>
                        </Button>
                        <Button>
                            <NavLink exact to="/cv" activeClassName="active">CV</NavLink>
                        </Button>
                        <Button>
                            <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                        </Button> 
                    </Button.Group>
                </div> 
                <div className="recent-posts">
                    <strong>
                        <p className="recent-posts-text">Recent Posts</p>
                    </strong>
                    <Divider/>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <HomepageBlogPost/>
                            </Grid.Column>
                            <Grid.Column>
                                <HomepageBlogPost/>
                            </Grid.Column>
                            <Grid.Column>
                                <HomepageBlogPost/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Home;