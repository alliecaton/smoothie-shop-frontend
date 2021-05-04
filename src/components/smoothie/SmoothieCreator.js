import React, { Component } from 'react';
import Ingredient from './Ingredient'
import { connect } from 'react-redux'
import { addCartItem } from '../../actions/cartActions'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
class SmoothieCreator extends Component {
    
    state = { smoothieIngredients: [], ingredientIds: [], totalPrice: 0, error: ''}

    componentDidMount() {
        this.props.fetchIngredients()
    }

    renderIngredients = () => {
        return this.props.ingredients.map((ingredient) => (
            <div key={ingredient.id} >
                <label className={this.state.className} htmlFor={ingredient.id} ><Ingredient ingredient={ingredient} key={ingredient.id} /></label>
                <input className="checkbox" type="checkbox" id={ingredient.id} value={ingredient.id} name={ingredient.id} onChange={(e) => this.handleSelectionChange(e)} /><br></br>
            </div>
        ))
    }

    handleSelectionChange = (e) => {
        let addedIng = this.props.ingredients.find( ing => `${ing.id}` === e.target.value )
        if (e.target.checked) {
            this.setState( prevState => ({
                ...prevState, 
                totalPrice: parseFloat(prevState.totalPrice) + parseFloat(addedIng.price), 
                smoothieIngredients: [...prevState.smoothieIngredients, addedIng], 
                ingredientIds: [...prevState.ingredientIds, addedIng.id], 
            }));
            this.props.addSmoothieIngredient(addedIng)
        } else if (!e.target.checked) {
            this.setState( prevState => ({
                totalPrice: parseFloat(prevState.totalPrice) - parseFloat(addedIng.price),
                smoothieIngredients: prevState.smoothieIngredients.filter(ingredient => ingredient.id !== addedIng.id ), 
                ingredientIds: prevState.smoothieIngredients.filter(id => id !== addedIng.id ), 
            }));
            this.props.removeSmoothieIngredient(addedIng)
        }
    }

    unCheck = () => {
        const x = document.getElementsByClassName("checkbox");
        for(let i=0; i<x.length; i++) {
           x[i].checked = false;
         }   
      }
  
    handleSubmit = (e) => {
        e.preventDefault()
        this.unCheck()
            if (this.state.smoothieIngredients.length > 0) {
                this.props.addCartItem(this.state)
                this.setState({smoothieIngredients: [], ingredientIds: []})
                this.props.removeAllIngredients()
            } else {
                this.setState({
                    ...this.state, 
                    error: 'Please select at least one ingredient'
                })
            }
    }

    render() {
        console.log(this.state.totalPrice)
        return (
            <div>
                <Col>
                <form>
                    <h3>Select Ingredients:</h3>
                    {this.renderIngredients()}
                    {this.state.error}<br></br>
                    <Button variant="outline-primary" onClick={(e)=> this.handleSubmit(e)}>Add Smoothie to Cart!</Button>
                </form>
                </Col>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addCartItem: (item) => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(SmoothieCreator);
