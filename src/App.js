import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import HelloComponent from './Components/HelloComponent';
// import ClassComponents from './Components/ClassComponents';
// import State from './Components/StateComponent';
// import Hello  from './Components/HelloAsComponent';
import Menu from './Components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <Menu dishes={this.state.dishes} />
    )
  }
}

// class App extends Component {
//   render() {
//     return (

//       <div>
// <h1>HELLO</h1>
//       <ClassComponents></ClassComponents>
//       <State></State>
//       <Hello who="Earth"></Hello> 
//       <Menu></Menu>

//       </div>
//     );
//   }
// }

export default App;
