import React from 'react';
import NotificationItem from '../notificationItem';
import './styles.css';

const NotificationCenter = (notifications, clickHandler) => {
  const notificationRows = [];
  const notificationItems = notifications.notifications.map((notification) => {
    notificationRows.push(<NotificationItem notification={notification} />);
  })
  return (<div className='notificationCenter'>
    <div className='header'>
      <h2>Notifications</h2>
      <button onClick={clickHandler} className='clear-all'>Clear All</button>
    </div>
    {notificationRows}
  </div>
  );
}

export default NotificationCenter;