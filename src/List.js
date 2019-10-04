import React from 'react';
import Card from './Card';
import './list.css';
import cards from './App';


function List(props){
 const cards = props.cards.map(card => <Card title={card.title} content={card.content} key ={card.id}/>);

    return (
        <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
            {cards}

            <button type="button" class="List-add-button">
            + Add Random Card
          </button>
        </div>
        </section>
    );
}


export default List;