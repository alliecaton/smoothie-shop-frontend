import React, { Component } from 'react';
import Ingredient from './Ingredient'
import Ingredients from './Ingredients'

class SmoothieCreator extends Component {
    
    state = { ingredients: [] }

    // handleSelectionChange = (e) => {
    //     console.log(this.state)
    //     this.setState({
    //       ingredients: [...this.state.ingredients, e.target.value]
    //     });
    // }
  
    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   this.props.addRestaurant(this.state.text)
    //   this.setState({ text: ''})
    // }

    render() {
        return (
            <div>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <h3>Select Ingredients:</h3>
                    <Ingredients />
                    <label htmlFor="strawberry"> <Ingredient /> </label>
                    <input type="checkbox" id="strawberry" value="strawberry" onChange={this.handleSelectionChange} /><br></br>

                    <label htmlFor="banana"> <Ingredient /> </label>
                    <input type="checkbox" value="banana" id="banana" /><br></br>

                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default SmoothieCreator;
