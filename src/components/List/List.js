import React from 'react';
import './List.css';

const card = (props) => {
    <div className="Card">
        <p className="Heading">{props.heading}</p>
        {props.list.map(item => (
            <ListItems 
            key={item.text}
            clicked={() => props.click(item.text)}
            isClicked={props.isClicked[item.text]}/>
        ))}

        <button 
        className="SaveButton">Save</button>
    </div>
}

export default card;