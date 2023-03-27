import { createSlice } from "@reduxjs/toolkit";
import { Article, PopupNewsDetails } from "../common/interfaces/interface";
import { RootState } from "../store";
import { getBooleanFromLocalStorage } from "./booleanLocalStorage";

interface NewsState {
  status: string;
  newsArticles: Article[];
  totalResults: number;
  isList: boolean;
  isNewsPopup: boolean;
  popupNewsDetails: PopupNewsDetails[];
  isEnglish: boolean;
}

const initialState: NewsState = {
  status: "initial",
  newsArticles: [],
  totalResults: 0,
  isList: getBooleanFromLocalStorage("isList"),
  isNewsPopup: false,
  popupNewsDetails: [],
  isEnglish: getBooleanFromLocalStorage("isEnglish"),
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    fetchNews: (state, { payload }) => {
      state.status = "loading";
    },
    fetchNewsSuccess: (state, { payload: news }) => {
      state.status = "success";
      state.newsArticles = news.articles;
      state.totalResults = news.totalResults;
    },
    fetchNewsError: (state) => {
      state.status = "error";
    },
    toggleView: (state) => {
      state.isList = !state.isList;
    },
    toggleNewsPopup: (state) => {
      state.isNewsPopup = !state.isNewsPopup;
    },
    setPopupNewsDetails: (state, { payload }) => {
      state.popupNewsDetails = [payload];
    },
    toggleIsEnglish: (state) => {
      state.isEnglish = !state.isEnglish;
    },
  },
});

export const {
  fetchNews,
  fetchNewsSuccess,
  fetchNewsError,
  toggleView,
  toggleNewsPopup,
  setPopupNewsDetails,
  toggleIsEnglish,
} = newsSlice.actions;

export const selectNewsState = (state: RootState) => state.news;

export const selectNewsStatus = (state: RootState) =>
  selectNewsState(state).status;

export const selectArticles = (state: RootState) =>
  selectNewsState(state).newsArticles;

export const selectTotalResults = (state: RootState) =>
  selectNewsState(state).totalResults;

export const selectIsList = (state: RootState) => selectNewsState(state).isList;

export const selectIsNewsPopup = (state: RootState) =>
  selectNewsState(state).isNewsPopup;

export const selectPopupNewsDetails = (state: RootState) =>
  selectNewsState(state).popupNewsDetails;

export const selectIsEnglish = (state: RootState) =>
  selectNewsState(state).isEnglish;

export default newsSlice.reducer;
