import { ButtonLoadMore } from "./LoadMore.styled";

export const LoadMore = ({ clickLoadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={clickLoadMore}>
      Load more
    </ButtonLoadMore>
  );
};
