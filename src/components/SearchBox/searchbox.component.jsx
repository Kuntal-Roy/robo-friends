import React from 'react';

import './searchbox.styles.css';

const SearchBox = (props) => {
    return(
        <div className="search-box">
            <input className="search-input" type="search" placeholder="Search Robots" onChange={props.searchChange}/>
        </div>
    );
}

export default SearchBox;