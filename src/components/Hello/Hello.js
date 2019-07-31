import React from 'react';
import Card from '../UI/Card/Card';
import './Hello.css'

const hello = (props) => {
    return (
        <div className="Hello">
            <Card clicked={props.clicked}><h1>Make Todo</h1></Card>
            <Card clicked={props.clicked}><h1>Complete the Task</h1></Card>
            <Card clicked={props.clicked}><h1>Manage your Todos</h1></Card>
        </div>
    )
}

export default hello;