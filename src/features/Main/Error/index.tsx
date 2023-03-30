import { useSelector } from "react-redux";
import { messages } from "../../../common/Locale/messages";
import { selectIsEnglish } from "../../newsSlice";
import {
  Container,
  DangerIcon,
  ErrorMessage,
  Header,
  Link,
} from "./styled";

export const Error = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <Container data-testid="error">
      <DangerIcon />
      <Header>{messages[language].error.header}</Header>
      <ErrorMessage>
        {messages[language].error.message1}
        <br /> {messages[language].error.message2}
      </ErrorMessage>
      <Link to={"/"}>{messages[language].error.link}</Link>
    </Container>
  );
};
