import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';
import { canUseDOM } from 'exenv';

const UsersList = props => {
  if (canUseDOM) {
    useEffect(() => {
      props.fetchUsers();
    }, [props.users]);
  }

  const renderUsers = () => {
    return props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  const head = () => (
    <Helmet>
      <title>{`${props.users.length} Users Loaded`}</title>
      <meta property='og:title' content='Users App' />
    </Helmet>
  );

  return (
    <div>
      {head()}
      Here's a big list of users:
      <ul>{renderUsers()}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { users: state.users };
}

const loadData = store => store.dispatch(fetchUsers());

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
};
