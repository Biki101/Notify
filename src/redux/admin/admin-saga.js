import { all, put, call, takeLatest } from "redux-saga/effects";
import Admin_Action_Types from "./action.type";
import { signUpFailure } from "./admin-action";
import axios from "axios";

export function* signingUp({ payload }) {
  yield console.log(payload);
  try {
    yield axios
      .post("http://localhost:4000/admin/signup", payload)
      .then((res) => console.log(res.data));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(Admin_Action_Types.ADMIN_SIGN_UP_START, signingUp);
}

export function* adminSagas() {
  yield all([call(onSignUpStart)]);
}
