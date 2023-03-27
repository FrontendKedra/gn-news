import { useSelector } from "react-redux";
import { selectIsEnglish, selectTotalResults } from "../newsSlice";
import { Pagination } from "./Pagination";
import { ArticlesNumber, Container, CurrentTime } from "./styled";
import { useCurrentFormattedDate } from "./useCurrentFormattedDate";
import { messages } from "../../common/Locale/messages";

export const Footer = () => {
  const totalResults = useSelector(selectTotalResults);
  const isEnglish = useSelector(selectIsEnglish);
  const formattedDate = useCurrentFormattedDate(isEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <Container>
      <CurrentTime>{formattedDate}</CurrentTime>
      <ArticlesNumber>
        {messages[language].footer} {totalResults}
      </ArticlesNumber>
      <Pagination />
    </Container>
  );
};
