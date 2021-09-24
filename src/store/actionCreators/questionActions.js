import React from 'react';

import * as actionTypes from '../actionTypes';

export const Loading = () => {
    return {type:actionTypes.LOADING};
}

export const answerQuestion1 = ({optNum, optValue, ans}) => {
    return {type: actionTypes.ANSWER_QUESTION1, optNum, optValue, ans}
}

export const answerQuestion2 = ({optNum, optValue, ans}) => {
    return {type: actionTypes.ANSWER_QUESTION2, optNum, optValue, ans}
}

export const answerQuestion3 = ({optNum, optValue, ans}) => {
    return {type: actionTypes.ANSWER_QUESTION3, optNum, optValue, ans}
}