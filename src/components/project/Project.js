import React, { Component } from 'react';
import placeholder from "../../placeholder.png";
import PropTypes from 'prop-types';
import { Grid, Image, Divider, Button, Icon, Form, Pagination, Segment} from 'semantic-ui-react';
import TechnologyItem from "../technologyItem/TechnologyItem";

class Project extends Component {  

  render() {
    return (
        <Grid.Column>
            <div className="blogpost-item">
                <a href="#">
                    <div className="blogpost-title">{this.props.properties.title}</div>
                </a>
                <div className="blogpost-image">
                    <img src={placeholder}/>
                </div>
                <div className="blogpost-bottomBar">
                    <div className="blogpost-creationDate"> {this.props.properties.technology.map(tech => <TechnologyItem key={tech}item={tech} stringName={tech}/>)}</div>
                    <div className="blogpost-navigate">
                        <a href="#">
                            View <Icon name='external'/>
                        </a>
                    </div>
                </div>
            </div>
        </Grid.Column>
      );
    }
}


export default Project;