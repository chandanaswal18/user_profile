/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

import UserProfile from 'user_profile';

class UsersDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: {}, defaultOrderData: {} };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?delay=3')
      .then(response => response.json())
      .then(dataObj => this.setState({ userData: dataObj.data, defaultOrderData: dataObj.data }));
  }

  handleCardClick = user => {
    this.props.history.push({
      pathname: '/user',
      userData: {
        user
      }
    });
  };

  renderUsersData = users => {
    const usersList = users.map(user => (
      <div
        className="user-card col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
        key={user.id}
        onClick={() => this.handleCardClick(user)}
      >
        <img alt="image1" src={user.avatar} className="user-image" />
        <div className="user-card-info">
          <div>First Name: {user.first_name}</div>
          <div>Last Name: {user.last_name}</div>
          <div>Email: {user.email}</div>
        </div>
      </div>
    ));

    return usersList;
  };

  handleSort = e => {
    if (e.target.value !== 'none') {
      let sortedData = [...this.state.userData].sort((a, b) => (a[e.target.value] > b[e.target.value] ? 1 : -1));
      this.setState({ userData: sortedData });
    } else {
      this.setState({ userData: this.state.defaultOrderData });
    }
  };

  render() {
    return this.state.userData.length > 0 ? (
      <div className="container">
        <div className="user-sort-select">
          <div style={{ marginRight: 10 }}>Sort By</div>
          <select onChange={this.handleSort}>
            <option value="none">None</option>
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
          </select>
        </div>
        <div className="users-card-wrapper row">{this.renderUsersData(this.state.userData)}</div>
      </div>
    ) : (
      <div className="loading-icon">
        <i className="fa fa-cog fa-spin" />
      </div>
    );
  }
}

export default UsersDashboard;
