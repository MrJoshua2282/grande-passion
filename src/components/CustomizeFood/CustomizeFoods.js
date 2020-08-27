import React from 'react';

import './CustomizeFood.css';
import Navbar from '../../shared/Navbar/Navbar';
import FrontFace from '../FrontFace/FrontFace';
import FoodList from './FoodList';

export default function CustomizeFoods() {
    return (
        <div>
            <Navbar >Add Something Relevant here</Navbar>
            <FrontFace>
                <FoodList />
            </FrontFace>
        </div>
    )
}