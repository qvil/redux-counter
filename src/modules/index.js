const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

{
    type: INCREMENT,
    state: state + 1
}

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
