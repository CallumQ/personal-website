import React, { Component } from 'react';
import "../Portfolio/portfolio.css";
import { Grid, Image, Divider, Button, Icon, Form, Segment} from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react'
import ProjectContainer from '../projectContainer/ProjectContainer';
import PaginationComponent from '../pagination/Pagination';
class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemsPerPage: 6,
            currentPage: 1,
            items: [],
            filteredItems: [],
            searchByFields: [],

        };

        this.updatePageNo = this.updatePageNo.bind(this);
        this.updateSearchfields = this.updateSearchfields.bind(this);
        this.buildSearchResults = this.buildSearchResults.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3001/posts")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
           this.setState({items:json, itemCount: json.length})
        })
        .then((json) => {
           this.buildSearchResults();
        });
    }

    buildSearchResults() {
        //ensure that we have some search fields before looping through everything
        if (this.state.searchByFields != null && this.state.searchByFields != undefined && this.state.searchByFields.length > 0){
            let filteredItems = [];
            for(var i = 0; i < this.state.items.length; i++){
                for(var j = 0; j < this.state.searchByFields.length; j++){
                    if(this.state.items[i].technology.includes(this.state.searchByFields[j])){
                        filteredItems.push(this.state.items[i]);
                        break;
                    }
                }
            }
            let totalPages = Math.ceil(this.state.filteredItems.length /this.state.itemsPerPage);
            this.setState({filteredItems:filteredItems,itemCount:filteredItems.length,totalPages: totalPages, currentPage: 1});
           
        }
        else{
             let totalPages = Math.ceil(this.state.items.length /this.state.itemsPerPage);
            this.setState({filteredItems:this.state.items,itemCount:this.state.items.length,totalPages: Math.ceil(this.state.items.length /this.state.itemsPerPage), currentPage: 1});
        }

    }

    updatePageNo(event,data){
        this.setState({currentPage: data.activePage});
    }

    updateSearchfields(event,data){

        this.setState({searchByFields:data.value})
    }
    render() {
        const options = [{ key: 100, text: 'CSS', value: "CSS" },{ key: 200, text: 'REACT', value: "REACT" },{ key: 300, text: 'C#', value: "C#" },{ key: 400, text: 'C', value: "C" },]
        return(
            <div className="project-container">
                <div className="project-informationBar">
                    <div className="search-section">
                        <Dropdown placeholder='Languages' multiple selection scrollable options={options} value={this.state.searchByFields} onChange={this.updateSearchfields}/>
                        <div className="searchButton" onClick={this.buildSearchResults}>Search <Icon name='search'/></div>
                    </div>
                    <div className="searchInformation"> showing {(this.state.itemsPerPage*this.state.currentPage- this.state.itemsPerPage)+1} - {this.state.itemsPerPage*this.state.currentPage > (this.state.filteredProjects ? 
                        this.state.filteredProjects.length : this.state.itemCount) ?
                            this.state.filteredProjects ?
                                this.state.filteredProjects.length : 
                                this.state.itemCount : 
                            this.state.itemsPerPage * this.state.currentPage
                    } of {this.state.filteredProjects ? this.state.filteredProjects.length: this.state.itemCount}</div>
                </div>
                <Grid centered columns={3}>
                    <Grid.Row>
                        <ProjectContainer projects={this.state.filteredItems.slice(this.state.itemsPerPage*this.state.currentPage - this.state.itemsPerPage,this.state.itemsPerPage*this.state.currentPage)}/>
                    </Grid.Row>
                    <PaginationComponent itemsPerPage={this.state.itemsPerPage} currentPage={this.state.currentPage} updatePageNo={this.updatePageNo.bind(this)} filteredItemsLength ={this.state.filteredProjects ? 
                        this.state.filteredProjects.length : this.state.itemCount}/>
                </Grid>
            </div>
        );
    }
};

export default Portfolio;