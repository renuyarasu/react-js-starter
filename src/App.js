import React from 'react';
import './App.css';
import Info from './Info';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  
  tick() {
    this.setState({time:})
  }

  render() {
    return <h1>Time: {this.state.time} </h1>;
  }
}

export default App;
