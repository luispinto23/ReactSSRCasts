import { configureStore } from '@reduxjs/toolkit';
// import axios from 'axios';

import usersReducer from '../client/features/usersSlice';
import authReducer from '../client/features/authSlice';
import adminsReducer from '../client/features/adminsSlice';

export default req => {
  /* const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  }); */

  /* const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
 */
  const store = configureStore({
    reducer: {
      users: usersReducer,
      auth: authReducer,
      admins: adminsReducer,
    },
  });

  return store;
};
