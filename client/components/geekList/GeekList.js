import React, { Component } from 'react';
import { connect } from 'react-redux';

class GeekList extends Component  {    
    render() {
        return(
            <div className="container">
                <h1>GeekList</h1>
                <p>Inventory of Geeks</p>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        // Todo
    };
}

function mapDispatchToProps() {

}

export default connect(mapStateToProps, mapDispatchToProps)(GeekList);