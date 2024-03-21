import ImageGallery from '@/components/ImageGallery';
import fs from 'fs';
import path from 'path';

const directoryPath = './public/images';

const getImages = () => {
  const files = fs.readdirSync(directoryPath);

  const imageFiles = files.filter(
    (file) =>
      path.extname(file).toLowerCase() === '.jpg' ||
      path.extname(file).toLowerCase() === '.png'
  );

  return imageFiles;
};

const images = getImages().map((img) => ({
  src: `/images/${img}`,
}));

const Gallery = ({ value }) => {
  return (
    <>

      <ImageGallery images={images} />
    </>
  );
};


export default Gallery;
