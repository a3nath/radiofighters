import React from 'react';

import * as actionTypes from '../actionTypes';

export const Loading = () => {
    return {type:actionTypes.LOADING};
}

export const answerQuestion1 = () => {
    return {type: actionTypes.ANSWER_QUESTION1}
}

export const answerQuestion2 = () => {
    return {type: actionTypes.ANSWER_QUESTION2}
}