import React from 'react';
import './card.css';



function Card(STORE){
    return (
        <div className="Card">
            <button type="button">delete</button>
            <h3>{STORE.title}</h3>
            <p>{STORE.content}</p>
        </div>
    );
}


export default Card;