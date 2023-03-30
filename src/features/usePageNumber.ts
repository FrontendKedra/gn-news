import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UsePageNumber } from "../common/interfaces/interface";

export const usePageNumber = (): UsePageNumber => {
  const history = useHistory();
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const searchParams = new URLSearchParams(history.location.search);
    const page = Number(searchParams.get("page")) || 1;
    setPageNumber(page);
  }, [history.location.search]);

  const changePage = (newPage: number) => {
    setPageNumber(newPage);
    const searchParams = new URLSearchParams(history.location.search);
    searchParams.set("page", newPage.toString());
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return [pageNumber, changePage];
};
