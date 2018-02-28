const store = Redux.createStore(reducer);

const increment = {
    type: 'INCREMENT'
};

const decrement = {
    type: 'DECREMENT'
};

const doIncrment = (payload) => ({
    type: 'INCREMENT_VALUE',
    payload,
});

function reducer(state = { countValue: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                countValue: state.countValue + 1,
            };

        case 'DECREMENT':
            return {
                countValue: state.countValue - 1,
            };

        case 'INCREMENT_VALUE':
            return {
                countValue: state.countValue + action.payload,
            };

        default:
            return state;

    }
}

document.getElementById('increment')
    .addEventListener('click', () => store.dispatch(increment));

document.getElementById('decrement')
    .addEventListener('click', () => store.dispatch(decrement));


document.getElementById('inputIncrement')
    .addEventListener('click', () => {
        const inputValue = document.getElementById('input').value;
        store.dispatch(doIncrment(Number(inputValue)))
    });



const callBackFunc = () => {
    const state = store.getState();
    const element = document.getElementById('counter');
    element.innerHTML = state.countValue;
};

store.subscribe(callBackFunc);

