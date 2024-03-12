import React from 'react';

const Watch = ({watch}) => {
    const {model, price} = watch;
    return (
        <div>
            <h3>Watch : {model}</h3>
            <h4>Price: {price}</h4>
        </div>
    );
};

export default Watch;