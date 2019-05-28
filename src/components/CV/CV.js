import {Icon} from 'semantic-ui-react';
import "../CV/CV.css";
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const CV = () => (
    <React.Fragment>
        <div className="cv-top-section">
            <div className="button">
                <Link exact to="/contact">Download CV</Link>
            </div>
        </div>
        <div className="cv-section cv-section-title">
            <div className="section-1">
                <div className="section-header">Technologies / Skills</div>
            </div>
            <div className="section-1 left-align">
                <div className="section-sub-header">Experienced <Icon data-tip data-for='Experienced-tooltip' name='Experienced question circle outline'/> 
                    <ReactTooltip id='Experienced-tooltip' effect="solid">
                        <span>I typically use these technologies in my day to day work.</span>
                    </ReactTooltip>
                </div>
                <ul>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Backbone.js</li>
                    <li>Selenium</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Agile Development (SAFe, SCRUM)</li>
                    <li>Issue Tracking (Jira)</li>
                    <li>Continuous integration (Jenkins)</li>
                    <li>Source Control (Git, BitBucket)</li>
                </ul>
            </div>
            <div className="section-1 left-align">
                <div className="section-sub-header">Some Experience <Icon data-tip data-for='some-experience-tooltip' name='Experienced question circle outline'/> 
                    <ReactTooltip id='some-experience-tooltip' effect="solid">
                        <span>I've used these technologies, but not in my day to day work.</span>
                    </ReactTooltip>
                </div>
                <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>ADA SPARK</li>
                    <li>Neo4J</li>
                    <li>Node.js</li>
                </ul>
            </div>

            
        </div>
        <div className="cv-section cv-section-title">
            <div className="section-1">
                <div className="section-header">Work Experience</div>
            </div>
            <div className="section-2">
                <div className="section-item">
                    <div className="section-item-title-bar">
                        <div className="section-item-title">Full-Stack Software Engineer</div>
                        <div className="section-item-date">11/2017 - Present</div>
                    </div>
                    <div className="section-item-description">
                        <ul>
                            <li>Developed a large RESTful web application written in Java, Backbone.js, and MongoDB.</li>
                            <li>Acted as a Scrum Master applying SAFe to facilitate agile practices and development across distributed teams.</li>
                            <li>Redesigned the existing Selenium test suite, reducing the total run time from 4 and a half hours to 30 minutes.</li>
                        </ul>
                    </div>
                </div>
                <div className="section-item">
                    <div className="section-item-title-bar">
                        <div className="section-item-title">Computer Lab Assistant, Heriot-Watt University</div>
                        <div className="section-item-date">9/2016 - 11/2016</div>
                    </div>
                    <div className="section-item-description">
                        <ul>
                            <li>Covered the basics of BASH scripting and navigating UNIX systems through the terminal.</li>
                            <li>Taught the new 1st year students the basics of using the university systems.</li>
                            <li>Worked with students from varied backgrounds and levels of experience.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="cv-section cv-section-title">
            <div className="section-1">
                <div className="section-header">Education</div>
            </div>
            <div className="section-2">
                 <div className="section-item">
                    <div className="section-item-title-bar">
                        <div className="section-item-title">BSc (Hons) Computer Systems, Heriot-Watt University - 1<sup>st</sup> Class Honours</div>
                        <div className="section-item-date">9/2015 - 9/2017</div>
                    </div>
                    <div className="section-item-description">
                        <ul>
                            <li>Covered a number of topics ranging from developing larger scale applications such as a web browser or a dataset parser using C# and Python, to testing ADA SPARK code<br/> using partial proofs to check for correctness.</li>
                            <li>Worked on a number of group projects covering the development of an e-commerce website based on a mock customer, to developing a career planning web app <br/> targeted at recent High School leavers.</li>
                            <li>Developed an application which used a recommender system to suggest houses to users based on their preferences and feedback they provided on previous suggestions.</li>
                            <li>Created my own small language as part of a course which looked at how language processors worked and how code is converted from high-level code to machine code.</li>
                            <li>Applied Genetic algorithms to come up with a good solution to a variant of the traveling salesman problem.</li>
                        </ul>
                    </div>
                </div>
                <div className="section-item">
                    <div className="section-item-title-bar">
                        <div className="section-item-title">HNC &amp; HND Software Development, Forth Valley College</div>
                        <div className="section-item-date">2012 - 2015</div>
                    </div>
                    <div className="section-item-description">
                        <ul>
                            <li>Covered the foundations of Software Engineering and OOP, as well as the workings of a computer and basic networking.</li>
                            <li>Studied database design and how to structure your data depending on use case.</li>
                            <li>used a variety of different languages/technologies ranging from standard HTML, JavaScript, and CSS to C++</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  </React.Fragment>
);

export default CV
