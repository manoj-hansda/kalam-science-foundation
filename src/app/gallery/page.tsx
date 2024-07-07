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
        <Link href="/gallery/lakshya-program">
          <div className="text-teal border p-2">Lakshya Program Visit</div>
        </Link>
        <Link href="/gallery/aangadwadi-visit">
          <div className="text-teal border p-2">Aangadwadi Visit</div>
        </Link>

        <Link href="/gallery/awareness-programs-for-safai-wala-karmchaari">
          <div className="text-teal border p-2">
            Awareness Programs for Safai Wala Karmchaari
          </div>
        </Link>

        <Link href="/gallery/mentally-disabled-womens-home-visit">
          <div className="text-teal border p-2">
            Mentally Disabled Womens Home Visit
          </div>
        </Link>

        <Link href="/gallery/blood-donation-camps">
          <div className="text-teal border p-2">Blood Donation Camps</div>
        </Link>

        <Link href="/gallery/Har-Ghar-Tiranga-distribution-drive">
          <div className="text-teal border p-2">
            Har Ghar Tiranga Distribution Drive
          </div>
        </Link>

        <Link href="/gallery/kids-nurturing-talents-for-India">
          <div className="text-teal border p-2">
            Kids Nurturing Talents for India
          </div>
        </Link>

        <Link href="/gallery/news-paper-coverage">
          <div className="text-teal border p-2">News Paper Coverage</div>
        </Link>

        <Link href="/gallery/niti-aayog-meeting">
          <div className="text-teal border p-2">Niti Aayog Meeting</div>
        </Link>

        <Link href="/gallery/sanitary-pad-distribution">
          <div className="text-teal border p-2">Sanitary Pad Distribution</div>
        </Link>

        <Link href="/gallery/social-work">
          <div className="text-teal border p-2">Social Work</div>
        </Link>

        <Link href="/gallery/women-empowerment-drive">
          <div className="text-teal border p-2">Women Empowerment Drive</div>
        </Link>
      </div>
    </>
  );
};

export default Gallery;
