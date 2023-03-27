import { useDispatch } from "react-redux";
import {
  selectIsList,
  selectIsEnglish,
  toggleNewsPopup,
  toggleIsEnglish,
  toggleView,
} from "../newsSlice";
import {
  ChangerContainer,
  Container,
  ListViewChanger,
  LocaleChanger,
  PopUp,
  Title,
  ViewImage,
} from "./styled";
import list from "./icons/list.svg";
import tile from "./icons/tile.svg";
import { useSelector } from "react-redux";
import { messages } from "../../common/Locale/messages";

export const Header = () => {
  const dispatch = useDispatch();
  const isList = useSelector(selectIsList);
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <Container>
      <Title to="/">gnNews</Title>
      <PopUp onClick={() => dispatch(toggleNewsPopup())}>
        {messages[language].header.popup}
      </PopUp>
      <ChangerContainer>
        {messages[language].header.view}
        <ListViewChanger onClick={() => dispatch(toggleView())}>
          <ViewImage
            src={isList ? tile : list}
            alt={messages[language].alt}
          ></ViewImage>
        </ListViewChanger>
      </ChangerContainer>
      <LocaleChanger onClick={() => dispatch(toggleIsEnglish())}>
        {messages[language].header.localeChanger}
      </LocaleChanger>
    </Container>
  );
};
