import { useSelector } from "react-redux";
import { UsePageNumber } from "../../../common/interfaces/interface";
import { selectIsEnglish, selectTotalResults } from "../../newsSlice";
import { usePageNumber } from "../../usePageNumber";
import { ArrowNext, ArrowPrevious, Button, PageChanger } from "./styled";
import { messages } from "../../../common/Locale/messages";

export const Pagination = () => {
  const [pageNumber, changePage]: UsePageNumber = usePageNumber();
  const totalResults = useSelector(selectTotalResults);
  const totalPages = Math.ceil(totalResults / 20);
  const isFirstPage = pageNumber === 1;
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <>
      {totalResults > 20 && (
        <PageChanger>
          <Button
            disabled={isFirstPage}
            onClick={() => changePage(pageNumber - 1)}
          >
            <ArrowPrevious />
            {messages[language].pagination.previous}
          </Button>
          <span>
            {messages[language].pagination.page} {pageNumber}{" "}
            {messages[language].pagination.of}
          </span>
          <span>{totalPages}</span>
          <Button
            disabled={pageNumber === totalPages}
            onClick={() => changePage(pageNumber + 1)}
          >
            {messages[language].pagination.next}
            <ArrowNext />
          </Button>
        </PageChanger>
      )}
    </>
  );
};
