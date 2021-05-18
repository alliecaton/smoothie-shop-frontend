import React, { Component } from 'react';

class StatusCheckbox extends Component {
    
    state= { checked: false }

    handleChange = (e) => {
        console.log('hit')
        this.setState({checked: true})
        // post to DB 
    }
    
    render() {
        return (
            <div>
                <form>
                <input value={this.state.checked} type="checkbox" onChange={(e) => {this.handleChange(e)}} />
                </form>
            </div>
        );
    }
}

export default StatusCheckbox;
