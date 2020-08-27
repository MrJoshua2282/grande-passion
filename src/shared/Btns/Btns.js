import React from 'react';
import { useSelector } from 'react-redux';

import './Btns.css';

export const BtnSelect = (props) => (<button id={props.id} className={`btnSelect ${props.className}`} disabled={props.disabled} onChange={props.onChange} onClick={props.onClick} >{props.children}</button>);

export const DropDownListBtn = (props) => {
    return (
        <button id={props.id} className={`dropDownListBtn ${props.className}`} disabled={props.disabled} onChange={props.onChange} onClick={props.onClick} >{props.children}</button>
    )
};

export const BtnGrocery = (props) => {
    return (
        <span className='btnGrocery-span'>
            <button id={props.id} className={`btnGrocery ${props.className}`} disabled={props.disabled} onClick={props.removeItem} >-</button>
            <span className='btnGrocery-label' >{props.children}</span>
            <button id={props.id} className={`btnGrocery ${props.className}`} disabled={props.disabled} onClick={props.addItem} >+</button>
        </span>
    )
};

export const RadioToasted = (props) => {
    const store = useSelector(store => store.food);
    console.log(store.typeOfBread)
    let content = '';
    if (store.typeOfBread.flour) {
        content = (
            <React.Fragment>
                <span>TOAST YOUR {store.typeOfBread.flour.toUpperCase()} {store.typeOfBread.name.toUpperCase()}?</span>
                <label><input type='radio' name='toasted' />YES</label>
                <label><input type='radio' name='toasted' defaultChecked />NO</label>
            </React.Fragment>
        )
    }
    return (
        <span onChange={props.onChange} className='RadioToasted'>
            {content}
        </span>
    )
}

export const CheckBoxCondiments = (props) => {
    return (
        <section onChange={props.onChange}>
            <label><input type='checkbox' id={props.label} className={`radioCondiments ${props.className}`} disabled={props.disabled} />{props.label}</label>
        </section>
    )
};