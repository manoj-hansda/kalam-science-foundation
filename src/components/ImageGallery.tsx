'use client';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'photoswipe/dist/photoswipe.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const ImageGallery = ({ images }: { images: { src: string }[] }) => {
  const onInit = () => {};

  return (
    <>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map((img) => (
          <a key={img.src} href={img.src}>
            <img
              alt="img1"
              src={img.src}
              className="m-1"
              style={{ display: 'initial', width: 300, height: 300 }}
            />
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default ImageGallery;
