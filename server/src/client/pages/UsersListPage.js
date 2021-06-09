import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { canUseDOM } from 'exenv';

import {
  // selectAllUsers,
  fetchUsers,
  selectUsersIds,
  selectUserById,
} from '../features/usersSlice';

const UsersList = props => {
  const dispatch = useDispatch();
  const orderedUsersIds = useSelector(selectUsersIds);

  const userStatus = useSelector(state => state.users.status);
  const error = useSelector(state => state.users.error);

  if (canUseDOM) {
    /* useEffect(() => {
      props.fetchUsers();
    }, [props.users]); */
    useEffect(() => {
      if (userStatus === 'idle') {
        dispatch(fetchUsers());
      }
    }, [userStatus, dispatch]);
  }

  let content;

  if (userStatus === 'loading') {
    content = <div className='loader'>Loading...</div>;
  } else if (userStatus === 'succeeded') {
    content = orderedUsersIds.map(userId => renderUser(userId));
  } else if (userStatus === 'failed') {
    content = <div>{error}</div>;
  }

  const renderUser = userId => {
    const user = useSelector(state => selectUserById(state, userId));
    return <li key={user.id}>{user.name}</li>;
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
      <ul>{content}</ul>
    </div>
  );
};

// function mapStateToProps(state) {
//   return { users: state.users };
// }

const loadData = store => store.dispatch(fetchUsers());

export default {
  loadData,
  component: UsersList,
};
