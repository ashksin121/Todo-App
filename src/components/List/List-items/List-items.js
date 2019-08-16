import React from 'react';
import './List-items.css';

const listItems = (props) => {
   let attachedClasses = null;
   if(props.isClicked) {
       attachedClasses = "Clicked";
   }

   return (
       <Aux>
           <div className="ListItem" onClick={props.clicked}>
               <p className={attachedClasses}>{props.key}</p>
           </div>
       </Aux>
   )
}

export default listItems;