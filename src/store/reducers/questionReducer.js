import * as actionTypes from '../actionTypes';

const iniState = {
    loading:false,
    question1: false,
    ques1Opt: {},
    question2: false,
    ques2Opt: {},
    question3: false,
    ques3Opt: {}
};

const questionReducer = (state = iniState, action ) => {
    if (action){
        switch(action.type){
            case (actionTypes.LOADING):
                return {...state, loading: true, ques1Opt: {}, question1: false,ques2Opt: {}, question2: false,ques3Opt: {}, question3: false, modal:false}
            case (actionTypes.ANSWER_QUESTION1):
                return {...state, loading:false, question1: true, ques1Opt: {optNum: action.optNum, optValue: action.optValue, ans: action.ans }}
            case (actionTypes.ANSWER_QUESTION2):
                return {...state, loading: false, question2: true, ques2Opt: {optNum: action.optNum, optValue: action.optValue, ans: action.ans }}
            case (actionTypes.ANSWER_QUESTION3):
                return {...state, loading: false, question3: true, ques3Opt: {optNum: action.optNum, optValue: action.optValue, ans: action.ans }}
            default:
                return state;
        }
    }
    return state
};

export default questionReducer;