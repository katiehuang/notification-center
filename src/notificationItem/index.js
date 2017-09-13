import React from 'react';
import moment from 'moment';
import './styles.css';

const NotificationItem = (notification) => {
  return (
    <div className='notificationItem'>
      <i className={`${iconSelector()} left`} />
      <div className='right'>
        <h5 className='name'>{notification.notification.patient_name}</h5>
        <section className='message'>{notification.notification.message}</section>
        <section className='datetime'>{moment(notification.notification.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</section>
      </div>
    </div>
  );
}

const iconSelector = (type) => {
  switch (type) {
    case ('exercise_trouble'): return 'fa fa-info';
    case ('event_pain'): return 'fa fa-exclamation-triangle';
    case ('assessment_needs_review'): return 'fa fa-exclamation-pencil-square-o';
    default: return '';
  }
}

export default NotificationItem;