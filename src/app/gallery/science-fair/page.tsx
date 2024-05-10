import ImageGallery from '@/components/ImageGallery';

import getDirImages from '@/utils/getDirImages';
import { GalleryImagesDirectories } from '@/utils/constants'

const images = getDirImages(GalleryImagesDirectories.SCIENCE_FAIR);

const Gallery = () => {
  return (
    <>
      <div>
        <div>Science Fair</div>
        <ImageGallery images={images} />
      </div>
    </>
  );
};

export default Gallery;
