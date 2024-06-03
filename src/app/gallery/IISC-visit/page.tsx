import ImageGallery from '@/components/ImageGallery';

import getDirImages from '@/utils/getDirImages';
import { GalleryImagesDirectories } from '@/utils/constants'

const images = getDirImages(GalleryImagesDirectories.IISC_VISIT);

const Gallery = () => {
  return (
    <>
      <div>
        <h1 className="text-lg text-teal font-medium">IISC Visit</h1>

        <div className="mt-10">
          <ImageGallery images={images} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
