import React from "react";
import Card from "../Card/Card";

const CardList = ({ props, deletee }) => {
    const cards = props.map(({ id, ...otherProps }) => (
        <Card key={id} {...otherProps} id={id} deletee={deletee}/>
    ));
        
    return   <div> {cards} </div>
    
};

export default CardList; 