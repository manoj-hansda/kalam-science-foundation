import Logo from '../common/Logo';
import Navigation from '../common/Navigation';

const Header = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto md:flex py-6 justify-between items-center">
        <div className="flex">
          <Logo className="mr-3" />
          <div className="text-3xl font-medium">
            <span style={{ color: '#FF671F' }}>KALAM</span> <br />
            <span style={{ color: '#06038D' }}>SCIENCE</span> <br />{' '}
            <span style={{ color: '#046A38' }}>FOUNDATION</span>
          </div>
        </div>
        <div>
          <blockquote className="text-3xl italic font-semibold text-center md:mr-56">
            &quot;Inspiring People&quot;
          </blockquote>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Header;
