import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from '../project/Project';

class ProjectContainer extends Component {
  constructor(props){
    super(props);
  }

componentDidUpdate(){
  this.buildProjects();
}
  buildProjects(){
    let projects = this.props.projects;
  }

  render() {
    return (
      <React.Fragment>
        {this.props.projects.map(project => <Project key={project.id} properties={project} openModal={this.props.openModal}/>)}
     </React.Fragment>
    );
  }  
}

export default ProjectContainer;