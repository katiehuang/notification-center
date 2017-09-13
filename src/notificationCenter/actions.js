import { createAction } from 'redux-actions';

export const NOTIFICATIONS_GET = 'NOTIFICATIONS_GET';
export const notificationsGet = createAction(NOTIFICATIONS_GET);

export const NOTIFICATIONS_GET_SUCCESS = 'NOTIFICATIONS_GET_SUCCESS';
export const notificationsGetSuccess = createAction(NOTIFICATIONS_GET_SUCCESS);

export const NOTIFICATIONS_CLEAR = 'NOTIFICATIONS_CLEAR';
export const notificationsClear = createAction(NOTIFICATIONS_CLEAR);
