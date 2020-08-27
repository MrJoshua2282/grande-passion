import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './FoodList.css';
import IngredientList from './IngredientList';
import Breads from './Breads';
import * as actionCreators from '../../store/globalCreators';
import { BtnGrocery, CheckBoxCondiments, RadioToasted, DropDownListBtn } from '../../shared/Btns/Btns';

export default function FoodList() {
    // const storeShared = useSelector(store => store.shared);
    const storeFood = useSelector(store => store.food);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(storeFood)
    })

    const breadDetails = storeFood.breadDetails.map(el => {
        let flourType = el.flourType.map((cur) => <DropDownListBtn onClick={(breadObj) => dispatch(actionCreators.setBreadType(breadObj = { ...el, flour: cur }))} className='dropdown_item' > {cur}</DropDownListBtn >)
        return (
            <span className='dropdown' key={`${el.id}`}>
                <DropDownListBtn className='dropbtn' >{el.name}</DropDownListBtn>
                <span className='dropdown-content' >
                    {flourType}
                </span>
            </span>
        )
        // let flourType = el.flourType.map((cur) => <DropDownListBtn key={`${el.id}`} onClick={(breadObj) => dispatch(actionCreators.setBreadType(breadObj = { ...el, flour: cur }))} className='dropdown_item' > {cur}</DropDownListBtn >)
        // return (
        //     <span className='dropdown' key={`${el.id}+1`}>
        //         <DropDownListBtn className='dropbtn' >{el.name}</DropDownListBtn>
        //         <span className='dropdown-content' >
        //             {flourType}
        //         </span>
        //     </span>
        // )
    })

    const toppings = storeFood.toppings.map(el => {
        return (
            <BtnGrocery key={`${el.id}`} removeItem={(id) => dispatch(actionCreators.removeItem(id = el.id))} addItem={(obj) => dispatch(actionCreators.addItem(obj = el))} >{el.name}</BtnGrocery>
        )
    })

    const condiments = storeFood.condiments.map(el => {
        return (
            <CheckBoxCondiments key={`${el.id}`} label={el.name} />
        )
    })
    return (
        < React.Fragment >
            <div className='dropdown_bread'>
                {breadDetails}
            </div>
            <RadioToasted onChange={() => dispatch(actionCreators.toggleIsToasted())} />
            <div className='toppings_div'>
                {toppings}
            </div>
            <Breads >
                <IngredientList />
            </Breads>
            {condiments}
        </React.Fragment >
    )
}
