import React from 'react';
import './App.css';
import CardList from './components/Cardlist/cardlist.component';
import SearchBox from './components/SearchBox/searchbox.component';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary.component';

import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then( response => {
      return response.json();
    }).then( users => {
      this.setState({ robots: users })
    });


    var searchbar = document.querySelector('.search-box');
    var searchStart = searchbar.offsetTop;

    window.onscroll = function() {
      var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      var pos = searchStart - scrollTop;
      if(pos<0)
        pos=0;
      searchbar.style.top = `${pos}px`;
  };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {

    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return (
      <div className="App">
        <h1 id="page-header">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
