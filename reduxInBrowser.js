const store = Redux.createStore(reducer);

function reducer(state = { countValue: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                countValue: state.countValue + 1,
            };

        case 'DECREMENT':
            return {
                ...state,
                countValue: state.countValue - 1,
            };

        default:
            return state;

    }
}

document.getElementById('increment')
    .addEventListener('click', () => store.dispatch({ type: 'INCREMENT' }));

document.getElementById('decrement')
    .addEventListener('click', () => store.dispatch({ type: 'DECREMENT' }));

const callBackFunc = () => {
    const state = store.getState();
    const element = document.getElementById('counter');
    element.innerHTML = state.countValue;
};

store.subscribe(callBackFunc);

