import React from 'react';


export default function Ingredient(props) {
    let ingredient = '';
    switch (props.el.name) {
        case 'American Cheese':
            ingredient = (<div>American Cheese <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Swiss Cheese':
            ingredient = (<div>Swiss Cheese <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Mozzarella':
            ingredient = (<div>Mozzarella <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Cheddar Cheese':
            ingredient = (<div>Cheddar Cheese <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Pickles':
            ingredient = (<div>Pickles <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Tomato':
            ingredient = (<div>Tomato <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Jalapeno':
            ingredient = (<div>Jalapeno <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Onions':
            ingredient = (<div>Onions <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Lettuce':
            ingredient = (<div>Lettuce <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Tuna Salad':
            ingredient = (<div>Tuna Salad <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Chicken Salad':
            ingredient = (<div>Chicken Salad <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Egg Salad':
            ingredient = (<div>Egg Salad <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Vegan Meatballs':
            ingredient = (<div>Vegan Meatballs <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Meatballs':
            ingredient = (<div>Meatballs <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Hot Ham':
            ingredient = (<div>Hot Ham <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Turkey':
            ingredient = (<div>Turkey <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Chicken':
            ingredient = (<div>Chicken <i onClick={props.onClick}>X</i></div>);
            break;
        case 'Sausage':
            ingredient = (<div>Sausage <i onClick={props.onClick}>X</i></div>);
            break;
        default:
            return;
    }
    return (
        <div>
            {ingredient}
        </div>
    )
}
