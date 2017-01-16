import React, { Component } from 'react';

import { Header, Counter } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
