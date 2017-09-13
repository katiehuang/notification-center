import { takeEvery } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import Notifications from './notifications';
import { NOTIFICATIONS_GET, notificationsGetSuccess } from './actions';

function* getNotifications() {
  const notifications = yield put(notificationsGetSuccess(Notifications));
}

export default function* notificationSaga() {
  yield [
    fork(takeEvery, NOTIFICATIONS_GET, getNotifications)
  ];
}
