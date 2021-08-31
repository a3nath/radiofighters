import * as actionTypes from '../actionTypes';

const iniState = {
    score: 0
};

const scoreReducer = (state = iniState, action ) => {
    if (action){
        switch(action.type){
            case (actionTypes.ADD_SCORE):
                return {...state, score: state.score+10}
            default:
                return state;
        }
    }
    console.log(state)
    return state
};

export default scoreReducer;