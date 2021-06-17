import Admin_Action_Types from "./action.type";

const ININTIAL_STATE = {
  username: null,
  isSigningIn: false,
  isSigningUp: false,
  errorMessage: undefined,
};

const adminReducer = (state = ININTIAL_STATE, action) => {
  switch (action.type) {
    case Admin_Action_Types.ADMIN_SIGNIN_START:
      return {
        ...state,
        isSigningIn: true,
        errorMessage: undefined,
      };

    case Admin_Action_Types.ADMIN_SIGNIN_FAILURE:
    case Admin_Action_Types.ADMIN_SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isSigningIn: false,
        isSigningUp: false,
      };

    case Admin_Action_Types.ADMIN_SIGN_UP_START:
      return {
        ...state,
        isSigningUp: true,
        errorMessage: undefined,
      };

    case Admin_Action_Types.ADMIN_SIGN_UP_SUCESS:
      return {
        ...state,
        username: action.payload,
        isSigningUp: false,
        errorMessage: undefined,
      };

    default:
      return state;
  }
};

export default adminReducer;
