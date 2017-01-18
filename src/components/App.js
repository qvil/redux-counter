import React, { PropTypes } from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

const App = (props) => {
    return (
        <div style={ { textAlign: 'center' } }>
            <Counter />
            <Buttons />
        </div>
    );
};

export default App;
