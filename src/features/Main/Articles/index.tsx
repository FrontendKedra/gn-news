import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectIsList,
  selectIsEnglish,
  setPopupNewsDetails,
  toggleNewsPopup,
} from "../../newsSlice";
import {
  PublicationDate,
  Source,
  Teaser,
  Thumbnail,
  TileList,
  Title,
} from "./styled";
import newsIcon from "./icons/newsIcon.svg";
import { Article } from "../../../common/interfaces/interface";
import { messages } from "../../../common/Locale/messages";

export const Articles = ({
  title,
  publishedAt,
  source,
  urlToImage,
  description,
  url,
  author,
  content,
}: Article) => {
  const dispatch = useDispatch();
  const isListView = useSelector(selectIsList);
  const isEnglish = useSelector(selectIsEnglish);
  const language = isEnglish ? "en" : "pl";

  return (isListView && (!title && !source.name && !publishedAt)) ||
    (!isListView &&
      (!title && !source.name && !publishedAt && !description) ) ? null : (
    <TileList
      isList={isListView}
      onClick={() => {
        dispatch(toggleNewsPopup());
        dispatch(setPopupNewsDetails({ url, content, author, source }));
      }}
    >
      {!isListView && (
        <>
          {!!urlToImage ? (
            <Thumbnail src={urlToImage} />
          ) : (
            <Thumbnail src={newsIcon} alt={messages[language].alt} />
          )}
        </>
      )}

      {!!title ? (
        <Title data-testid="existant-title">
          {messages[language].articles.t.existantT} {title}
        </Title>
      ) : (
        <Title data-testid="non-existant-title">
          {messages[language].articles.t.nonExistantT}
        </Title>
      )}

      {!isListView && (
        <>
          {!!description ? (
            <Teaser data-testid="existant-teaser">
              {messages[language].articles.teaser.existantTeaser} {description}
            </Teaser>
          ) : (
            <Teaser data-testid="non-existant-teaser">
              {messages[language].articles.teaser.nonExistantTeaser} {author}
            </Teaser>
          )}
        </>
      )}
      {!!source.name ? (
        <Source data-testid="existant-source.name">
          {messages[language].articles.source.existantSource} {source.name}
        </Source>
      ) : (
        <Source data-testid="non-existant-source.name">
          {messages[language].articles.source.nonExistantSource}
        </Source>
      )}

      {!!publishedAt && (
        <PublicationDate data-testid="existant-publishedAt">
          {messages[language].articles.publicationDate}{" "}
          {new Date(publishedAt).toLocaleDateString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </PublicationDate>
      )}
    </TileList>
  );
};
