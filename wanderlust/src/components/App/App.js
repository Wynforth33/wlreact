// Imports
import React from 'react';
import './App.css'; // 'App' Stylesheet
import ApiCore from '../../util/ApiCore/ApiCore'; // 'ApiCore' (Data Object)
import SearchBar from '../SearchBar/SearchBar'; // <SearchBar />
import Weather from '../Weather/Weather'; // <Weather />
import VenueList from '../VenueList/VenueList'; // <VenueList />

// Create <App /> ['React'(Component)]
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// Exports
export default App; // Export <App />
