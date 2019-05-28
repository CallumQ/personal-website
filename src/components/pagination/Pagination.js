import React, { Component } from 'react';
import { Grid, Image, Divider, Button, Icon, Form, Segment, Pagination} from 'semantic-ui-react';
import PropTypes from 'prop-types';
class PaginationComponent extends Component {  

    componentDidMount() {
        document.title = "Portfolio - Callum Quigley";
    }
   
    render() {
        return (               
            <div className="example-container">
                <Grid centered columns={1}>
                    <Grid.Column>
                        <Pagination
                            className="bottom-pagination"
                            defaultActivePage={1}
                            firstItem={null}
                            lastItem={null}
                            ellipsisItem={null}
                            boundaryRange={0}
                            activePage={this.props.currentPage}
                            pointing
                            secondary
                            totalPages={Math.ceil(this.props.filteredItemsLength /this.props.itemsPerPage)}
                            onPageChange={this.props.updatePageNo}
                          />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

//this.props validation (only used for during dev)
Pagination.propTypes = {
  pageNo: PropTypes.number,
  pageUp : PropTypes.func,
  pageDown : PropTypes.func
}

export default PaginationComponent;