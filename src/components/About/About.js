import TechnologyItem from "../technologyItem/TechnologyItem";
import placeholder from "../../personalPhoto.jpg";import { Link } from 'react-router-dom';
import { Grid, Icon } from 'semantic-ui-react';
import "../About/About.css";
import React, { Component } from 'react';

class About extends Component {  
    render() {
        return (
                        <div className="content">
            <div className="intro-section about">

             <Grid centered columns={16}>
                    <Grid.Row>
                         <Grid.Column width={3}>
                            <img src={placeholder}/>
                           </Grid.Column>
                           <Grid.Column width={13}>
                          <p>Hi There,  thanks for having a look at my website.</p>
                          <p> I'm a software engineer who likes taking problems and building solutions for them. I'm experienced with quite a wide range of technologies; ranging from creating low level C applications, to using React to build front-end interfaces, to creating a selenium test suite based in python. If you're interested in any particular language or technology, have a look at my <Link to="portfolio">Portfolio</Link> page. Hopefully you find something that peaks your interest!</p>
            <p>I'm Originally from just outside of Edinburgh, Scotland but I'm currently working in Manchester, England as a software engineer. I attended Heriot-Watt University where I studied Computer Systems, and graduated with a 1<sup>st</sup> Class Honours Degree in June, 2017. When it comes to programming, there is no one kind of project that I enjoy or seek out. I enjoy seeing complicated problems being solved in smart but straightforward approaches (sometimes thats not possible, though).</p>

            <p>Outside of software development I'm a massive car/motorsports fan. I love cars; the more high-end and complex the better! I like to spend my free time watching Formula 1 and the WEC, admiring how crazy some of the engineering is. I think software still has a lot to offer in these realms, and with the advent of driverless cars we are going to depend even more on software in our vehicles.</p>
 
            <p>I've also got a <a target="_blank" href="https://medium.com/@callumrussellquigley">Blog</a> where I post about some problems that I've been solving, or just a quick guide for other developers who might be a bit stuck.</p>

            <p>Feel free to <Link to="/contact"> Contact</Link> me if you have any questions about any of my projects, posts, or if you just want to get in touch.</p>
                           </Grid.Column>
                           
                    </Grid.Row>
                </Grid>
            
        
         
            
            </div>


            </div>
        );
    }
}

export default About;