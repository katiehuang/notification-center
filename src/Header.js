import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationCenter from './notificationCenter';
import { notificationsGet, notificationsClear } from './notificationCenter/actions';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }

  componentDidMount() {
    this.props.dispatch(notificationsGet());
  }

  render() {
    return (
      <body>
        <header>
          <nav className="group">
            <ul className="nav-list left">
              <li className="nav-list-item search">
                <i className="fa fa-search"></i>
              </li>
              <li className="nav-list-item">
                <span>Patients</span>
              </li>
              <li className="nav-list-item">
                <span>Protocols</span>
              </li>
              <li className="nav-list-item">
                <span>Clinicians</span>
              </li>
            </ul>
            <ul className="nav-list right">
              <li className="nav-list-item notifications">
                <i onClick={this.toggleNotificationCenter.bind(this)} className="fa fa-bell-o"></i>
                {this.state.toggle ? <NotificationCenter notifications={this.props.notifications} clickHandler={this.clearNotifications.bind(this)} /> : null}
              </li>
              <li className="nav-list-item">
                <span className="clinician-name">John Doe</span><i className="fa fa-chevron-down"></i>
              </li>
            </ul>
          </nav>
        </header>
      </body >
    );
  }

  toggleNotificationCenter() {
    this.setState({ toggle: !this.state.toggle });
  }

  clearNotifications() {
    this.props.dispatch(notificationsClear());
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

export default connect(mapStateToProps)(Header);