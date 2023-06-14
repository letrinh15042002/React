// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Main from './Components/MainComponent';
// import Example from './Components/Example';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>

    );
  }
}



export default App;
