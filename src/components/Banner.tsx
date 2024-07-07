import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerImages = [
  '/images/banners/banner-image-1.jpeg',
  '/images/banners/banner-image-2.jpeg',
  '/images/banners/banner-image-3.jpeg',
  '/images/banners/banner-image-4.jpeg',
  '/images/banners/banner-image-5.jpeg',
  '/images/banners/banner-image-6.jpeg',
  '/images/banners/banner-image-7.jpeg',
  '/images/banners/banner-image-8.jpeg',
  '/images/banners/banner-image-9.jpeg',
  '/images/banners/banner-image-10.jpeg',
  '/images/banners/banner-image-11.jpeg',
  '/images/banners/banner-image-12.jpeg',
  '/images/banners/banner-image-13.jpeg',
];

const Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,

  autoplay: true,
  autoplaySpeed: 2000,
};

const Banner = () => {
  return (
    <>
      <Slider {...Settings}>
        {BannerImages.map((img) => (
          <div key={img}>
            <div
              style={{
                backgroundImage: `url(${img})`,
                width: '100%',
                maxWidth: '1000px',
                height: '100vw',
                maxHeight: '600px',
                margin: 'auto',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Banner;
