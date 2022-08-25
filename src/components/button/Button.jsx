import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Buttonstyled';

export default function LoadMoreButton({ onClick }) {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};