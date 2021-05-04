import React, { Component } from 'react';
import Smoothie from '../components/smoothie/Smoothie'
import SmoothieCreator from '../components/smoothie/SmoothieCreator'
import { connect } from 'react-redux'
import { fetchIngredients, addSmoothieIngredient, removeSmoothieIngredient, removeAllIngredients } from '../actions/smoothieActions.js'
import { Container, Row } from 'react-bootstrap';
import Loading from '../components/shared/Loading'



class SmoothieContainer extends Component {

    loading = () => {
        if (this.props.loading) {
            return <Loading />
        } else {
            return <Smoothie smoothieIngredients={this.props.smoothieIngredients} />
        }
    }

    render() {
        return (
            <Container className="body-wrapper" >
                <div className="smoothie-container">
                    <div className="inner-wrapper">
                    <Row>
                        <SmoothieCreator 
                            fetchIngredients={this.props.fetchIngredients} 
                            ingredients={this.props.ingredients} 
                            addSmoothieIngredient={this.props.addSmoothieIngredient}
                            removeSmoothieIngredient={this.props.removeSmoothieIngredient}
                            removeAllIngredients={this.props.removeAllIngredients}
                            totalPrice={this.props.totalPrice}
                        />
                        {this.loading()}
                    </Row>
                    </div>
                </div>
                </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    ingredients: state.smoothieReducer.ingredients,
    smoothieIngredients: state.smoothieReducer.smoothieIngredients, 
    loading: state.smoothieReducer.loading, 
    totalPrice: state.smoothieReducer.smoothiePrice
})

const mapDispatchToProps = dispatch => ({
        fetchIngredients: () => dispatch(fetchIngredients()),
        addSmoothieIngredient: (ingredient) => dispatch(addSmoothieIngredient(ingredient)), 
        removeSmoothieIngredient: (ingredient) => dispatch(removeSmoothieIngredient(ingredient)),
        removeAllIngredients: () => dispatch(removeAllIngredients())
})

export default connect(mapStateToProps, mapDispatchToProps)(SmoothieContainer);
