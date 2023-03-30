import { useSelector } from "react-redux";
import { messages } from "../../../common/Locale/messages";
import { selectIsEnglish } from "../../newsSlice";
import { Container, Icon, LoadingParagraph } from "./styled";

export const Loader = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <Container data-testid="loader">
      <LoadingParagraph>
        {messages[language].loader.paragraph1}
        <br />
        {messages[language].loader.paragraph2}
      </LoadingParagraph>
      <Icon />
    </Container>
  );
};
