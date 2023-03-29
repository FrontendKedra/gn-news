import { useSelector } from "react-redux";
import { selectIsEnglish } from "../../newsSlice";
import { Container, NoArticlesParagraph } from "./styled";
import { messages } from "../../../common/Locale/messages";

export const NoArticles = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <Container>
      <NoArticlesParagraph>{messages[language].noArticles}</NoArticlesParagraph>
    </Container>
  );
};
