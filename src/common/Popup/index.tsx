import { useSelector } from "react-redux";
import {
  selectIsEnglish,
  selectPopupNewsDetails,
} from "../../features/newsSlice";
import { messages } from "../Locale/messages";
import {
  ArticleLink,
  Author,
  Container,
  Content,
  CreationProcess,
  Text,
} from "./styled";

export const PopupContent = () => {
  const articleDetails = useSelector(selectPopupNewsDetails);
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (
    <>
      {articleDetails[0]?.content !== undefined ? (
        articleDetails.map(({ url, content, author, source }) => (
          <Container key={url}>
            {!!author && (
              <Author>
                {messages[language].popup.author} {author}
              </Author>
            )}
            {!!content ? (
              <Content>{content}</Content>
            ) : (
              <Content>
                {messages[language].popup.content} {source.name}
              </Content>
            )}
            {!!url && (
              <>
                <Text>{messages[language].popup.text} </Text>
                <ArticleLink
                  href={url}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {url}
                </ArticleLink>
              </>
            )}
          </Container>
        ))
      ) : (
        <CreationProcess>
          {messages[language].popup.creationProcess}
        </CreationProcess>
      )}
    </>
  );
};
