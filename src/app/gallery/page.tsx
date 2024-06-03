import ImageGallery from '@/components/ImageGallery';
import Link from 'next/link';

const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 text-center">
        <Link href="/gallery/science-fair">
          <div className="text-teal border p-2">Science Fair</div>
        </Link>
        <Link href="/gallery/IISC-visit">
          <div className="text-teal border p-2">IISC Visit</div>
        </Link>
        <Link href="/gallery/anathashram-visit">
          <div className="text-teal border p-2">Anathashram Visit</div>
        </Link>
        <Link href="/gallery/HAL-visit">
          <div className="text-teal border p-2">HAL Visit</div>
        </Link>
        <Link href="/gallery/ISRO-visit">
          <div className="text-teal border p-2">ISRO Visit</div>
        </Link>
        <Link href="/gallery/lakshya-program-1">
          <div className="text-teal border p-2">Lakshya Program Visit 1</div>
        </Link>
        <Link href="/gallery/lakshya-program-2">
          <div className="text-teal border p-2">Lakshya Program Visit 2</div>
        </Link>
        <Link href="/gallery/lakshya-program-3">
          <div className="text-teal border p-2">Lakshya Program Visit 3</div>
        </Link>
        <Link href="/gallery/lakshya-program-4">
          <div className="text-teal border p-2">Lakshya Program Visit 4</div>
        </Link>
        <Link href="/gallery/aangadwadi-visit">
          <div className="text-teal border p-2">Aangadwadi Visit</div>
        </Link>
      </div>
    </>
  );
};

export default Gallery;
