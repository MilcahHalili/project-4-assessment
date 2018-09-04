import React, { Component } from 'react';
import './App.css';
import CircleSelector from './CircleSelector/CircleSelector';
import Circles from './Circles/Circles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      circle: 1,
    }
  }

  selectCircle = (num) => {
    this.setState({ circle: num })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">PROJECT 4 ASSESSMENT</header>
        <main>
          <CircleSelector
            selectCircle={this.selectCircle}
            circle={this.state.circle}
          />
          <Circles
            selectCircle={this.selectCircle}
            circle={this.state.circle}
          />
        </main>
      </div>
    );
  }
}

export default App;