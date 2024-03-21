'use client';

import { Gallery, Item } from 'react-photoswipe-gallery';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'photoswipe/dist/photoswipe.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const ImageGallery = ({ images }) => {
  const [open, setOpen] = useState(false);

  const onInit = () => {};

  return (
    <>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map((img) => (
          <a key={img.src} href={img.src}>
            <img alt="img1" src={img.src} style={{ display: 'initial', width: 300, height: 300 }} />
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default ImageGallery;
