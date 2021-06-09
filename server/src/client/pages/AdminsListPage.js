import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import { canUseDOM } from 'exenv';

export const AdminsListPage = props => {
  if (canUseDOM) {
    useEffect(() => {
      props.fetchAdmins();
    }, [props.admins]);
  }

  const renderAdmins = () => {
    return props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  };

  return (
    <div>
      <h3>List of admins:</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
};

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
