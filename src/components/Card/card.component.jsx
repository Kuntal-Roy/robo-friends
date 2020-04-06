import React from 'react';
import './card.styles.css';

function Card(props) {
    return(
        <div className='card'>
            <img alt='robot' src={`https://robohash.org/${props.id}?200x200`}></img>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;