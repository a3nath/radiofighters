import * as actionTypes from '../actionTypes';

const iniState = {
    modal:false
};

const modalReducer = (state = iniState, action ) => {
    if (action){
        switch(action.type){
            case (actionTypes.MODAL_SHOW):
                return {...state, modal: true}
            case (actionTypes.MODAL_CLOSE):
                return {...state, modal:false}
            default:
                return state;
        }
    }
    return state
};

export default modalReducer;