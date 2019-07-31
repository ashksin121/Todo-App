import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className="Card" onClick={props.clicked}>
            {props.children}
        </div>
    )
}

export default card;