import React from 'react';
import Card from '../Card/card.component';

import './cardlist.styles.css';

const CardList = ( {robots} ) => {

    const cardsArray = robots.map( (user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return(
        <div className="card-list">
            {cardsArray}
        </div>
    );
}

export default CardList;