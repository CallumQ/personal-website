import React, { Component } from 'react';
import "../Portfolio/portfolio.css";
import { Image, Modal, Button, Icon, Header, Dropdown} from 'semantic-ui-react';
import TechnologyItem from "../technologyItem/TechnologyItem";
import ProjectContainer from '../projectContainer/ProjectContainer';
import PaginationComponent from '../pagination/Pagination';

const options = [{ key: 100, text: 'CSS', value: "CSS" },{ key: 200, text: 'REACT', value: "REACT" },{ key: 300, text: 'C#', value: "C#" },{ key: 400, text: 'C', value: "C" }];

class Portfolio extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            itemsPerPage: 6,
            currentPage: 1,
            searchItems: [],
            filteredItems: [],
            searchByFields: [],
            open: false
        };

        this.updatePageNo = this.updatePageNo.bind(this);
        this.updateSearchfields = this.updateSearchfields.bind(this);
        this.buildSearchResults = this.buildSearchResults.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    close = () => this.setState({ open: false });
    
    componentDidMount ()
    {
        this.setState({
            items:this.props.items,
            itemCount: this.props.items.length
        }, this.buildSearchResults);
    }

    componentDidUpdate(prevProps)
    {
        //This is required to prevent infinite re-renders of the component
        if(this.props.items !== prevProps.items)
        {
            this.setState({items:this.props.items, itemCount: this.props.items.length}, this.buildSearchResults);
        }
    }


    buildSearchResults()
    {
        //ensure that we have some search fields before looping through everything
        if (this.state.searchByFields != null && this.state.searchByFields != undefined && this.state.searchByFields.length > 0)
        {
            let filteredItems = [];
            for(var i = 0; i < this.state.items.length; i++)
            {
                for(var j = 0; j < this.state.searchByFields.length; j++)
                {
                    if(this.state.items[i].technology.includes(this.state.searchByFields[j]))
                    {
                        filteredItems.push(this.state.items[i]);
                        break;
                    }
                }
            }
            let totalPages = Math.ceil(this.state.filteredItems.length / this.state.itemsPerPage);
            this.setState({filteredItems:filteredItems, itemCount:filteredItems.length, totalPages: totalPages, currentPage: 1});
        }
        else
        {
            let totalPages = Math.ceil(this.state.items.length / this.state.itemsPerPage);
            this.setState({filteredItems:this.state.items, itemCount:this.state.items.length, totalPages: totalPages, currentPage: 1, openedProject: this.state.items[0]});
        }
    }

    updatePageNo(event,data)
    {
        this.setState({currentPage: data.activePage});
    }

    openModal(projectID)
    {
        let items = this.state.items;
        
        for(var i = 0; i < items.length; i++) {
            if (items[i].id == projectID) {
                this.setState({openedProject:items[i]});
            }
        }
        this.setState({open: true});
    }

    updateSearchfields(event,data)
    {
        this.setState({searchByFields:data.value})
    }

    render()
    {
        return (
            <React.Fragment>
                <Modal
                open={this.state.open}
                closeOnEscape={this.closeOnEscape}
                closeOnDimmerClick={this.closeOnDimmerClick}
                onClose={this.close}
                closeIcon>
                    <Modal.Header>{this.state.openedProject ? this.state.openedProject.title : ""}</Modal.Header>
                    <Modal.Content image scrolling>
                        <Image wrapped size='medium' src={this.state.openedProject ? this.state.openedProject.imageUrl : ""} />
                        <Modal.Description>
                            <Header>{this.state.openedProject ? this.state.openedProject.title : ""}</Header>
                            {this.state.openedProject ? this.state.openedProject.description : ""}
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <div className="tech-section">
                            <p>Technologies: </p>
                            {this.state.openedProject ? this.state.openedProject.technology.map(tech => <TechnologyItem key={tech}item={tech} stringName={tech}/>): ""}
                        </div>
                        <a href={this.state.openedProject? this.state.openedProject.gitHubLink: ""} target="_blank">
                            <Button labelPosition='right' icon='github' content='Visit GitHub' secondary/>
                        </a>
                    </Modal.Actions>
                </Modal>

                <div className="bottom-section">
                    <div className="portfolio-header">
                        <div className="portfolio-header-left">
                            <div className="portfolio-header-left-searchbox">
                                <Dropdown placeholder='Skills' fluid multiple search selection options={options} value={this.state.searchByFields} onChange={this.updateSearchfields}/>
                            </div>
                            <div className="portfolio-header-left-searchbutton">
                                <Button primary onClick={this.buildSearchResults}>Filter <Icon name="filter"/></Button>
                            </div>
                        </div>
                        <div className="portfolio-header-right">showing {(this.state.itemsPerPage*this.state.currentPage- this.state.itemsPerPage)+1} - {this.state.itemsPerPage*this.state.currentPage > (this.state.filteredProjects ? 
                            this.state.filteredProjects.length : this.state.itemCount) ?
                            this.state.filteredProjects ?
                                this.state.filteredProjects.length : 
                                this.state.itemCount : 
                            this.state.itemsPerPage * this.state.currentPage
                            } of {this.state.filteredProjects ? this.state.filteredProjects.length: this.state.itemCount} results
                        </div>
                    </div>
                    <div className="post-container">
                        <ProjectContainer projects={this.state.filteredItems.slice(this.state.itemsPerPage*this.state.currentPage - this.state.itemsPerPage,this.state.itemsPerPage*this.state.currentPage)} openModal={this.openModal.bind(this)}/>
                    </div>
                </div>
             
                <PaginationComponent itemsPerPage={this.state.itemsPerPage} currentPage={this.state.currentPage} updatePageNo={this.updatePageNo.bind(this)} filteredItemsLength ={this.state.filteredProjects ? 
                    this.state.filteredProjects.length : this.state.itemCount}/>
            </React.Fragment>
        );
    }
};

export default Portfolio;