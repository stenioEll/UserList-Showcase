import axios from 'axios';

export const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'; // List of users have been requested from the API endpoint.
export const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'; // If fetching users succeeded.
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'; // If fetching users failed.

export const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequested());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
