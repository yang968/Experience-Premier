import * as userUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

//Map login differently? Auto login User on create?
// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const createUser = user => dispatch => (
  userUtil.createUser(user).then(userData => dispatch(receiveUser(userData)))
);

export const login = loginData => dispatch => (
  userUtil.login(loginData).then(userData => dispatch(receiveUser(userData)))
);

const receiveUser = (userData) => ({
  type: RECEIVE_USER,
  userData
});