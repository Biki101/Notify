import Admin_Action_Types from "./action.type";

export const signInStart = (adminCredentials) => ({
  type: Admin_Action_Types.ADMIN_SIGNIN_START,
  payload: adminCredentials,
});

export const signInSucess = (username) => ({
  type: Admin_Action_Types.ADMIN_SIGNIN_SUCESS,
  payload: username,
});

export const signInFailure = (errorMessage) => ({
  type: Admin_Action_Types.ADMIN_SIGNIN_FAILURE,
  payload: errorMessage,
});

export const signUpStart = (adminCredentials) => ({
  type: Admin_Action_Types.ADMIN_SIGN_UP_START,
  payload: adminCredentials,
});

export const signUpSucess = (username) => ({
  type: Admin_Action_Types.ADMIN_SIGNIN_SUCESS,
  payload: username,
});

export const signUpFailure = (errorMessage) => ({
  type: Admin_Action_Types.ADMIN_SIGN_UP_FAILURE,
  payload: errorMessage,
});
