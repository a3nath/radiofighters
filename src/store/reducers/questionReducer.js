import * as actionTypes from '../actionTypes';

const iniState = {
    loading:false,
    question1: false,
    ques1Opt: 0,
    question2: false,
    ques2Opt: 0
};

const questionReducer = (state = iniState, action ) => {
    if (action){
        switch(action.type){
            case (actionTypes.LOADING):
                return {...state, loading: true, question1: false, question2: false, modal:false}
            case (actionTypes.ANSWER_QUESTION1):
                return {...state, loading:false, question1: true, ques1Opt: action.option}
            case (actionTypes.ANSWER_QUESTION2):
                return {...state, loading: false, question2: true, ques2Opt: action.option}
            default:
                return state;
        }
    }
    return state
};

export default questionReducer;