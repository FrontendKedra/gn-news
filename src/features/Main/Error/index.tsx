import { useSelector } from "react-redux";
import { messages } from "../../../common/Locale/messages";
import { selectIsEnglish } from "../../newsSlice";
import {
  Container,
  DangerIcon,
  ErrorMessage,
  Header,
  LinkButton,
} from "./styled";

export const Error = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <Container>
      <DangerIcon />
      <Header>{messages[language].error.header}</Header>
      <ErrorMessage>
        {messages[language].error.message1}
        <br /> {messages[language].error.message2}
      </ErrorMessage>
      <LinkButton as="a" href="">
        {messages[language].error.linkButton}
      </LinkButton>
    </Container>
  );
};
