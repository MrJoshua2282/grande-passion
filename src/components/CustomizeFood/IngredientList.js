import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './IngredientList.css';
import Ingredient from './Ingredients';
import * as actionCreators from '../../store/globalCreators';

export default function IngredientList() {
    const store = useSelector(store => store.shared);
    const dispatch = useDispatch();
    let allIngredients = store.currentOrder.map((el, i) => {
        return (<Ingredient key={`${el}${i}`} el={el} onClick={(unique) => dispatch(actionCreators.deleteItemSelected(unique = el.unique))} />)
    })
    return (
        <div>
            {allIngredients}
        </div>
    )
}
