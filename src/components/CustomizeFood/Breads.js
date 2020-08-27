import React from 'react';
import { useSelector } from 'react-redux';

export default function Breads(props) {
    const store = useSelector(store => store.food);
    let topBread, bttmBread;
    let flour = store.typeOfBread.flour
    switch (store.typeOfBread.name) {
        case 'Sandwich':
            console.log(store.typeOfBread.name, flour)
            if (flour === 'White') {
                topBread = (<div>sandwich white </div>);
                bttmBread = (<div>sandwich white </div>);
            }
            if (flour === 'Whole Wheat') {
                topBread = (<div>sandwich wholeWheat </div>);
                bttmBread = (<div>sandwich wholeWheat </div>);
            }
            break;
        case 'Bagel':
            if (flour === 'White') {
                topBread = (<div>Bagel white </div>);
                bttmBread = (<div>Bagel white </div>);
            }
            if (flour === 'Whole Wheat') {
                topBread = (<div>Bagel whole wheat </div>);
                bttmBread = (<div>Bagel whole wheat </div>);
            }
            if (flour === 'Everything') {
                topBread = (<div>Bagel everything </div>);
                bttmBread = (<div>Bagel everything </div>);
            }
            if (flour === 'Garlic N Onion') {
                topBread = (<div>Bagel garlic N onion </div>);
                bttmBread = (<div>Bagel garlic N onion </div>);
            }
            break;
        case 'Half-Sub':
            if (flour === 'White') {
                topBread = (<div>Half-Sub white </div>);
                bttmBread = (<div>Half-Sub white </div>);
            }
            if (flour === 'Whole Wheat') {
                topBread = (<div>Half-Sub whole wheat </div>);
                bttmBread = (<div>Half-Sub whole wheat </div>);
            }
            break;
        case 'Full-Sub':
            if (flour === 'White') {
                topBread = (<div>Full-Sub white </div>);
                bttmBread = (<div>Full-Sub white </div>);
            }
            if (flour === 'Whole Wheat') {
                topBread = (<div>Full-Sub whole wheat </div>);
                bttmBread = (<div>Full-Sub whole wheat </div>);
            }
            break;
        default:
            return '';
    }
    return (
        <div>
            {topBread}
            {props.children}
            {bttmBread}
        </div>
    )
}
