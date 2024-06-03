import ImageGallery from '@/components/ImageGallery';

import getDirImages from '@/utils/getDirImages';
import { GalleryImagesDirectories } from '@/utils/constants'

const images = getDirImages(GalleryImagesDirectories.SCIENCE_FAIR);

const Gallery = () => {
  return (
    <>
      <div>
        <h1 className="text-lg text-teal font-medium">Science Fair</h1>

        <div className="mt-10">
          <ImageGallery images={images} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
