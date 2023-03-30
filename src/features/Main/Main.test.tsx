import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../globalStyle";
import { store } from "../../store";
import { theme } from "../../theme";
import { useSelector } from "react-redux";
import { Main } from ".";
import { HashRouter, useParams } from "react-router-dom";
import { selectArticles, selectNewsStatus } from "../newsSlice";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: jest.fn(),
}));

jest.mock("../useUrlParameter", () => ({
  useUrlParameter: jest.fn(),
}));

describe("Articles component", () => {
  test("renders NoArticles component when articles are empty and state is success", () => {
    const articles: string[] = [];
    const status = "success";
    const id = "pl";
    (useParams as jest.Mock).mockReturnValue(id);
    (useSelector as jest.Mock).mockImplementation((selectorFn) => {
      switch (selectorFn) {
        case selectArticles:
          return articles;
        case selectNewsStatus:
          return status;
      }
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Main />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByTestId("no-articles")).toBeInTheDocument();
  });

  test("renders Articles component when articles are not empty and state is success", () => {
    const articles = [
      {
        title: "Test title",
        description: "Test description",
        source: { id: "5", name: "Test source" },
        publishedAt: "2022-03-01T00:00:00Z",
        url: "http://example.com/article",
        urlToImage: "http://example.com/image",
        author: "Test author",
        content: "Test content",
      },
    ];
    const status = "success";
    const id = "pl";
    (useParams as jest.Mock).mockReturnValue(id);
    (useSelector as jest.Mock).mockImplementation((selectorFn) => {
      switch (selectorFn) {
        case selectArticles:
          return articles;
        case selectNewsStatus:
          return status;
      }
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Main />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByTestId("articles")).toBeInTheDocument();
  });

  test("renders Loader component when state is loading", () => {
    const status = "loading";
    const id = "pl";
    (useParams as jest.Mock).mockReturnValue(id);
    (useSelector as jest.Mock).mockReturnValue(status);

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Main />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("renders Error component when state is error", () => {
    const status = "error";
    const id = "pl";
    (useParams as jest.Mock).mockReturnValue(id);
    (useSelector as jest.Mock).mockReturnValue(status);

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Main />
          </HashRouter>
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByTestId("error")).toBeInTheDocument();
  });
});
