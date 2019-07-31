import React from 'react'; // navlinks
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/">Your Todos</NavigationItem>
            <NavigationItem link="/">Completed Todos</NavigationItem>
            <NavigationItem link="/">Authenticate</NavigationItem>
        </ul>
    )
}

export default NavigationItems;