import React, { Component } from 'react';
import PortfolioItem from '../Portfolio/portfolioItem';

class ProjectContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.projects.map(project => <PortfolioItem key={project.id} properties={project} openModal={this.props.openModal}/>)}
            </React.Fragment>
        );
    }
}

export default ProjectContainer;