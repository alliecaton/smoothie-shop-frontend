import React, { Component } from 'react';

class Errors extends Component {
    
    state = {showError: false, errorMessage: this.props.errorMessage }

    render() {
        return (
            <div>
                {this.state.errorMessage}
            </div>
        );
    }
}

export default Errors;
