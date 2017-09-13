import { handleActions } from 'redux-actions';

import { NOTIFICATIONS_CLEAR, NOTIFICATIONS_GET, NOTIFICATIONS_GET_SUCCESS } from './actions';

const initialState = { notifications: [] };

const notificationsReducer = handleActions({
  [NOTIFICATIONS_GET_SUCCESS]: (currentState, action) => {
    return Object.assign({}, currentState, { notifications: action.payload });
  },
  [NOTIFICATIONS_CLEAR]: (currentState) => {
    return Object.assign({}, currentState, { notifications: [] })
  }
}, initialState);

export default notificationsReducer;
