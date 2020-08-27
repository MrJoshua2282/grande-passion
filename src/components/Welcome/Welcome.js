import React from 'react';
import { Link } from 'react-router-dom';

import './Welcome.css';
import Navbar from '../../shared/Navbar/Navbar';
import FrontFace from '../FrontFace/FrontFace';
import { BtnSelect } from '../../shared/Btns/Btns';

export default function Welcome() {
    return (
        <div className='welcome-div'>
            <Navbar className='navbar'>
                Welcome to Grande Passion Deli
            </Navbar>
            <FrontFace>
                <div className='customize_invite'>
                    Choose an item to customize
                </div>
                <div className='welcome-btn-div'>
                    <Link to='/customize/food'><BtnSelect >Food</BtnSelect></Link>
                    <Link to='/customize/drink'><BtnSelect >Drink</BtnSelect></Link>
                </div>
            </FrontFace>
        </div>
    )
}
