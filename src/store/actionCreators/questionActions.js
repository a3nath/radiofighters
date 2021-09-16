import React from 'react';

import * as actionTypes from '../actionTypes';

export const Loading = () => {
    return {type:actionTypes.LOADING};
}

export const answerQuestion1 = (optNum) => {
    return {type: actionTypes.ANSWER_QUESTION1, option: optNum}
}

export const answerQuestion2 = (optNum) => {
    return {type: actionTypes.ANSWER_QUESTION2, option:optNum}
}

export const answerQuestion3 = (optNum) => {
    return {type: actionTypes.ANSWER_QUESTION3, option:optNum}
}