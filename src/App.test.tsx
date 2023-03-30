import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./globalStyle";
import { store } from "./store";
import { theme } from "./theme";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
  const linkElement = screen.getByTestId("header");
  expect(linkElement).toBeInTheDocument();
});
