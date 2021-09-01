import React from 'react';

import * as actionTypes from '../actionTypes';

export const modalClose = () => {
    return {type: actionTypes.MODAL_CLOSE}
}