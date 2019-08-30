import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./Counter";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
