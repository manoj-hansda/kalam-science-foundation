import ImageGallery from '@/components/ImageGallery';

import getDirImages from '@/utils/getDirImages';
import { GalleryImagesDirectories } from '@/utils/constants';

const images = getDirImages(
  GalleryImagesDirectories.MENTALLY_DISABLED_WOMENS_HOME_VISIT,
);

const Gallery = () => {
  return (
    <>
      <div>
        <h1 className="text-lg text-teal font-medium">
          Mentally Disabled Womens Home Visit
        </h1>

        <div className="mt-10">
          <ImageGallery images={images} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
