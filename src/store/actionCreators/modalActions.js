import React from 'react';

import * as actionTypes from '../actionTypes';

export const modalShow = () => {
    return {type: actionTypes.MODAL_SHOW}
};

export const modalClose = () => {
    return {type: actionTypes.MODAL_CLOSE}
};