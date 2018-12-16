import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css'

class BburgerIngredient extends Component{
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'): 
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                    ingredient = <div className={classes.Meat}></div>;
                    break;
            case ('chesse'):
                ingredient = <div className={classes.Chesse}></div>;    
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
    }
};

BurgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;