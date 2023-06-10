// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import HelloComponent from './Components/HelloComponent';
// import ClassComponents from './Components/ClassComponents';
// import State from './Components/StateComponent';
// import Hello  from './Components/HelloAsComponent';
// import Menu from './Components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './Components/MainComponent.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>

    )
  }
}


export default App;
