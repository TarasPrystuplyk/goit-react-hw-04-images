import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/imageGalleryitem/ImageGalleryItem';
import { ImageList } from './ImageGalleryStyled';
export default function ImageGallery({ images, selectedImage }) {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          previewImg={webformatURL}
          tags={tags}
          selectedImage={() => selectedImage(largeImageURL, tags)}
        />
      ))}
    </ImageList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  selectedImage: PropTypes.func,
};