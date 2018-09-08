import React, { Component } from 'react';
import placeholder from "../../placeholder.png";
import { Grid, Icon } from 'semantic-ui-react';
import TechnologyItem from "../technologyItem/TechnologyItem";

class Project extends Component {  

  render() {
    return (
        <Grid.Column>
            <div className="blogpost-item">
                <a onClick={() => this.props.openModal(10)}>
                    <div className="blogpost-title">{this.props.properties.title}</div>
                </a>
                <div className="blogpost-image">
                    <img src={placeholder}/>
                </div>
                <div className="blogpost-bottomBar">
                    <div className="blogpost-creationDate"> {this.props.properties.technology.map(tech => <TechnologyItem key={tech}item={tech} stringName={tech}/>)}</div>
                    <div className="blogpost-navigate">
                        <a onClick={() => this.props.openModal(this.props.properties.id)}>
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