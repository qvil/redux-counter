import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import counter from './reducers';

const store = createStore(counter);

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
