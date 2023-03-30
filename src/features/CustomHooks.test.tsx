import { renderHook, act } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { useUrlParameter } from "./useUrlParameter";
import { usePageNumber } from "./usePageNumber";
import { createMemoryHistory } from "history";

describe("useUrlParamater", () => {
  it("should return the url parameter", () => {
    const { result } = renderHook(() => useUrlParameter("id"), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/test?id=1"]}>{children}</MemoryRouter>
      ),
    });
    expect(result.current).toBe("1");
  });

  it("it should initialize with page number 1", () => {
    const { result } = renderHook(() => usePageNumber(), {
      wrapper: MemoryRouter,
    });
    expect(result.current[0]).toBe(1);
  });

  it("should update the page number and the history on changePage", () => {
    const history = createMemoryHistory({
      initialEntries: ["/example?page=1"],
    });

    const { result } = renderHook(() => usePageNumber(), {
      wrapper: ({ children }) => <Router history={history}>{children}</Router>,
    });

    act(() => {
      const setPage = result.current[1];
      setPage(2);
    });

    expect(result.current[0]).toBe(2);
    expect(history.location.search).toBe("?page=2");
  });
});
