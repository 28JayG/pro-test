import userActionTypes from './user.types';

export const signinUser = (user) => ({
  //send user as payload
  type: userActionTypes.SIGNIN_USER,
  payload: user,
});
