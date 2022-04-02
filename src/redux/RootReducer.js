const CHANGE_INPUT = 'CHANGE_INPUT';

const RootReducer = (state = '', action) => {
    switch(action.type){
        case CHANGE_INPUT:
            return action.text;
        default:
            return state;
    }
}

const changeInput = (text) => {
    return {
        type: CHANGE_INPUT,
        text: text
    }
}

export { RootReducer, changeInput};