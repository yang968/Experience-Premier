import * as userUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const createUser = user => dispatch => (
  userUtil.createUser(user).then(payload => dispatch(receiveUser(payload)))
);

export const login = loginData => dispatch => (
  userUtil.login(loginData).then(payload => dispatch(receiveCurrentUser(payload)))
);

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload: payload.data
});

const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload: payload.data
})