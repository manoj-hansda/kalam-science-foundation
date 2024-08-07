import ImageGallery from '@/components/ImageGallery';

import getDirImages from '@/utils/getDirImages';
import { GalleryImagesDirectories } from '@/utils/constants';

const images = getDirImages(GalleryImagesDirectories.WOMEN_EMPOWERMENT_DRIVE);

const Gallery = () => {
  return (
    <>
      <div>
        <h1 className="text-lg text-teal font-medium">
          Women Empowerment Drive
        </h1>

        <div className="mt-10">
          <ImageGallery images={images} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
