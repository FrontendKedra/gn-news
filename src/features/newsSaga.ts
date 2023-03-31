import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  fetchNews,
  fetchNewsError,
  fetchNewsSuccess,
  selectIsEnglish,
  selectIsList,
  toggleIsEnglish,
  toggleView,
} from "./newsSlice";
import { baseUrl, apiKey } from "../apiValues";
import { ApiResponse } from "../common/interfaces/interface";
import { getNewsFromApi } from "./getNewsFromApi";
import { saveBooleanInLocalStorage } from "./booleanLocalStorage";

interface NewsHandler {
  payload: {
    code: string;
    page: string | null;
  };
}

function* fetchNewsHandler({ payload: { code, page } }: NewsHandler) {
  const params = {
    country: code,
    apiKey,
    page: page || "1",
  };

  yield delay(300);

  try {
    const news: ApiResponse = yield call(
      getNewsFromApi<ApiResponse>,
      baseUrl,
      params
    );
    yield put(fetchNewsSuccess(news));
  } catch (error) {
    yield put(fetchNewsError());
  }
}

function* saveBooleanInLocalStorageHandler() {
  const isList: boolean = yield select(selectIsList);
  yield call(saveBooleanInLocalStorage, "isList", isList);

  const isEnglish: boolean = yield select(selectIsEnglish);
  yield call(saveBooleanInLocalStorage, "isEnglish", isEnglish);
}

export function* watchFetchNews() {
  yield takeEvery(fetchNews, fetchNewsHandler);
  yield takeLatest(toggleView.type, saveBooleanInLocalStorageHandler);
  yield takeLatest(toggleIsEnglish.type, saveBooleanInLocalStorageHandler);
}
