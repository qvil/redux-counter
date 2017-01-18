import { INCREMENT, DECREMENT } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    value: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state,
            // return Object.assign({}, state, {
                value: state.value + 1
            // });
            };
        case DECREMENT:
            return {...state,
            // return Object.assign({}, state, {
                value: state.value - 1
            // });
            };
        default:
            return state;
    }
};

const counterApp = combineReducers({
    counter
});

export default counterApp;
