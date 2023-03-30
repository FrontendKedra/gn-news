import { useParams } from "react-router-dom";
import { Container } from "./styled";
import { useEffect } from "react";
import {
  fetchNews,
  selectArticles,
  selectIsList,
  selectIsNewsPopup,
  selectNewsStatus,
  toggleNewsPopup,
} from "../newsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useUrlParameter } from "../useUrlParameter";
import { setPopupNewsDetails } from "../newsSlice";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { PopupContent } from "../../common/Popup";
import { Articles } from "./Articles";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { NoArticles } from "./NoArticles";

interface Id {
  id: string;
}
export const Main = () => {
  const { id } = useParams<Id>();
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const status = useSelector(selectNewsStatus);
  const isListView = useSelector(selectIsList);
  const page = useUrlParameter("page");
  const isNewsPopup = useSelector(selectIsNewsPopup);

  useEffect(() => {
    dispatch(fetchNews({ id, page }));
  }, [id, page, dispatch]);

  switch (status) {
    case "loading":
      return <Loader />;
    case "success":
      return articles.length === 0 ? (
        <NoArticles />
      ) : (
        <Container isList={isListView} data-testid="articles">
          {articles.map(
            ({
              title,
              publishedAt,
              source,
              urlToImage,
              description,
              url,
              author,
              content,
            }) => (
              <Articles
                title={title}
                publishedAt={publishedAt}
                source={source}
                urlToImage={urlToImage}
                description={description}
                url={url}
                author={author}
                content={content}
                key={title}
              />
            )
          )}
          <Popup
            open={isNewsPopup}
            onClose={() => {
              dispatch(toggleNewsPopup());
              dispatch(setPopupNewsDetails({}));
            }}
          >
            <PopupContent />
          </Popup>
        </Container>
      );
    case "error":
      return <Error />;
    default:
      return null;
  }
};
