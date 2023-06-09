import { useSelector } from "react-redux";
import { selectIsEnglish } from "../newsSlice";
import { countriesPolish, countriesEnglish } from "./countries";
import { Container, Country, CountryContainer, Flag } from "./styled";
import { messages } from "../../common/Locale/messages";

export const SideMenu = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <Container>
      {(isEnglish ? countriesEnglish : countriesPolish).map(
        ({ displayName, codeName, flag }) => (
          <CountryContainer to={`/country/${codeName}`} key={displayName}>
            <Flag src={flag} alt={messages[language].alt} />
            <Country>{displayName}</Country>
          </CountryContainer>
        )
      )}
    </Container>
  );
};
