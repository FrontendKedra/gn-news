import { all } from "redux-saga/effects";
import { watchFetchNews } from "./features/newsSaga";

export default function* rootSaga() {
  yield all([watchFetchNews()]);
}
