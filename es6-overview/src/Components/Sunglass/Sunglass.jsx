import React from 'react';
import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply } from '../../Utils/Calculate';
// import add from '../../Utils/Calculate';


const Sunglass = () => {
    const num1 = 23;
    const num2 = 43;
    const sum = add(num1, num2);
    const mult = multiply(num1, num2)


    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;