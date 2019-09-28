import React from 'react';
import List from './List';
import './App.css';



function App(props) {
  
 const lists = props.store.lists.map(list => {
  const cards = list.cardIds.map(cardId => props.store.allCards[cardId])
  return (<List header={list.header} cards={cards} key={list.id}/>)
 });
 

  return (
    <main className="App">
      <header className="App-header">
       <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
    
  );
}

export default App;
