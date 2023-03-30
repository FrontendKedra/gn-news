import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../../globalStyle";
import { store } from "../../../store";
import { theme } from "../../../theme";
import { Articles } from "../Articles";
import newsIcon from "./icons/newsIcon.svg";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Articles component", () => {
  test("renders null when in list view and title, source.name and publishedAt are null or undefined", () => {
    const isListView = true;
    (useSelector as jest.Mock).mockReturnValue(isListView);

    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title={null}
            description={"test description"}
            source={{ id: "5", name: null }}
            publishedAt={null}
            url="http://example.com/article"
            urlToImage={"http://example.com/image"}
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );
    expect(container).toBeEmptyDOMElement();
  });

  test("renders null when not in list view and title, source.name, publishedAt and description are null or undefined", () => {
    const isListView = false;
    (useSelector as jest.Mock).mockReturnValue(isListView);

    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title={null}
            description={null}
            source={{ id: "5", name: null }}
            publishedAt={null}
            url="http://example.com/article"
            urlToImage={"http://example.com/image"}
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    expect(container).toBeEmptyDOMElement();
  });

  test(`renders Thumbnail with src set to urlToImage when not in list view and urlToImage is present`, () => {
    const urlToImage = "http://example.com/image";
    const isListView = false;
    (useSelector as jest.Mock).mockReturnValue(isListView);

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title="Test title"
            description="Test description"
            source={{ id: "5", name: "Test source" }}
            publishedAt="2022-03-01T00:00:00Z"
            url="http://example.com/article"
            urlToImage={urlToImage}
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const thumbnail = screen.getByRole("img");
    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute("src", urlToImage);
  });

  test("renders Thumbnail with src set to urlToImage when not in list view and urlToImage is not present", () => {
    const urlToImage = null;
    const isListView = false;
    (useSelector as jest.Mock).mockReturnValue(isListView);

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title="Test title"
            description="Test description"
            source={{ id: "5", name: "Test source" }}
            publishedAt="2022-03-01T00:00:00Z"
            url="http://example.com/article"
            urlToImage={urlToImage}
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const thumbnail = screen.getByRole("img");
    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute("src", newsIcon);
  });

  test("renders element with data-testid set to `existantTitle` when title is present", () => {
    const title = "Test title";

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title={title}
            description="Test description"
            source={{ id: "5", name: "Test source" }}
            publishedAt="2022-03-01T00:00:00Z"
            url="http://example.com/article"
            urlToImage="http://example.com/image"
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const titleId = screen.getByTestId("existant-title");
    expect(titleId).toBeInTheDocument();
  });

  test("renders element with data-testid set to `nonExistantTitle` when title is present", () => {
    const title = null;

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title={title}
            description="Test description"
            source={{ id: "5", name: "Test source" }}
            publishedAt="2022-03-01T00:00:00Z"
            url="http://example.com/article"
            urlToImage="http://example.com/image"
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const titleId = screen.getByTestId("non-existant-title");
    expect(titleId).toBeInTheDocument();
  });

  test("renders element with data-testid set to `existantTeaser` with description when not in list view and description is present", () => {
    const description = "Test description";
    const isListView = false;
    (useSelector as jest.Mock).mockReturnValue(isListView);

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title="Test title"
            description={description}
            source={{ id: "5", name: "Test source" }}
            publishedAt="2022-03-01T00:00:00Z"
            url="http://example.com/article"
            urlToImage="http://example.com/image"
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const teaserId = screen.getByTestId("existant-teaser");
    expect(teaserId).toBeInTheDocument();
  });
  test("renders element with data-testid set to `nonExistantTeaser` with author when not in list view and description is not present", () => {
    const description = null;
    const isListView = false;
    (useSelector as jest.Mock).mockReturnValue(isListView);

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title="Test title"
            description={description}
            source={{ id: "5", name: "Test source" }}
            publishedAt="2022-03-01T00:00:00Z"
            url="http://example.com/article"
            urlToImage="http://example.com/image"
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const teaserId = screen.getByTestId("non-existant-teaser");
    expect(teaserId).toBeInTheDocument();
  });

  test("renders element with data-testid set to `existant-source` when source.name is present", () => {
    const source = { id: "5", name: "Test source" };

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title="Test title"
            description="Test description"
            source={source}
            publishedAt="2022-03-01T00:00:00Z"
            url="http://example.com/article"
            urlToImage="http://example.com/image"
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const sourceId = screen.getByTestId("existant-source.name");
    expect(sourceId).toBeInTheDocument();
  });

  test("renders element with data-testid set to `nonExistantSource` when source is not present", () => {
    const source = { id: "5", name: null };
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title="Test title"
            description="Test description"
            source={source}
            publishedAt="2022-03-01T00:00:00Z"
            url="http://example.com/article"
            urlToImage="http://example.com/image"
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const sourceId = screen.getByTestId("non-existant-source.name");
    expect(sourceId).toBeInTheDocument();
  });

  test("renders element with data-testid set to `existantPublishedAt` when publishedAt is present", () => {
    const publishedAt = "2022-03-01T00:00:00Z";
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Articles
            title="Test title"
            description="Test description"
            source={{ id: "5", name: "Test source" }}
            publishedAt={publishedAt}
            url="http://example.com/article"
            urlToImage="http://example.com/image"
            author="Test author"
            content="Test content"
          />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    );

    const PublicationDateId = screen.getByTestId("existant-publishedAt");
    expect(PublicationDateId).toBeInTheDocument();
  });
});
